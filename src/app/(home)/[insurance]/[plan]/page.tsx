import { Box, Container, Stack, Typography } from "@mui/joy";
import { defineQuery, PortableText } from "next-sanity";
import { client } from "@/sanity/lib/client";
import Plan from "@/interface/Plans";
import { getInsurances } from "@/util/getInsurances";
import Buttons from "@/components/Buttons";
import { TypedObject } from "sanity";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import Image from "next/image";
import "./plan.css";

const getPlans = async (insurance: string) => {
  const PLANS_QUERY = defineQuery(
    `*[_type == "Plan" && insuranceType -> insurance == "${insurance}"]{ plan, image, body }`
  );
  const plans: Plan[] = await client.fetch(
    PLANS_QUERY,
    {},
    { next: { revalidate: 60 } }
  );
  return plans;
};
export async function generateStaticParams() {
  const insurances = await getInsurances();
  const data = insurances.flatMap(({ insurance, plans }) =>
    plans?.map(
      ({ plan }) =>
        `${insurance?.replace(/ /g, "_")}/${plan?.replace(/ /g, "_")}`
    )
  );
  return data;
}

export default async function InsuranceSection({
  params: { insurance, plan },
}: {
  params: { insurance: string; plan: string };
}) {
  const resolvedInsurance = insurance?.replace(/_/g, " ");
  const currentplan = (await getPlans(resolvedInsurance))?.find(
    (Plan) => Plan.plan === plan.replace(/_/g, " ")
  );

  return (
    <Container maxWidth={"lg"} sx={{ paddingTop: 5 }}>
      {currentplan && (
        <>
          <Typography level="h1" marginBottom={2}
                style={{
                  background: `-webkit-linear-gradient(${'#60a5fa'}, ${'#2563eb'})`,
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  WebkitBackgroundClip: "text",
                }}
          >
            {currentplan.plan}
          </Typography>
          <Stack
            direction={{ md: "row", xs: "column-reverse" }}
            gap={2}
            alignItems={"start"}
          >
            <Box className="portable">
              <PortableText value={currentplan.body as TypedObject[]} />
            </Box>
            <Box width={"100%"} padding={2} boxShadow={"sm"} borderRadius="lg">
              <Box
                width={"100%"}
                maxHeight={"400px"}
                minWidth={{ xs: "100%", md: "500px" }}
                borderRadius="lg"
                overflow="hidden"
              >
                <Image
                  height={500}
                  width={500}
                  style={{ objectFit: "fill", width: "100%", height: "100%" }}
                  alt={"hero image"}
                  src={
                    currentplan?.image
                      ? urlFor(currentplan?.image as SanityImageSource).url()
                      : ""
                  }
                />
              </Box>
              <Buttons />
            </Box>
          </Stack>
        </>
      )}
    </Container>
  );
}
