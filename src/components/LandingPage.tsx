"use client";
import { CalendarIcon } from "@heroicons/react/16/solid";
import {
  Button,
  Stack,
  Typography,
  Sheet,
  Container,
  Card,
  CardContent,
  CardActions,
  Grid,
  Box,
  useTheme,
} from "@mui/joy";
import CustomCard from "./CustomCard";
import Insurance from "@/interface/Insurances";
import useConv from "@/hooks/useConv";
import { Feature } from "@/interface/Feature";
import { LandingData } from "@/interface/LandingPage";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

function LandingPage(props: {
  insurances: Insurance[];
  features: Feature[];
  landingData: LandingData;
}) {
  const { insurances, features, landingData } = props;
  const { onClick } = useConv();
  const theme = useTheme();
  return (
    <>
      <Container>
        <Stack paddingY={12} direction={{ lg: "row" }} gap={2}>
          <Stack alignContent={"center"} justifyContent="center" gap={1}>
            <Typography level="h1" fontSize={48}>
              <span
                style={{
                  background: `-webkit-linear-gradient(${theme.palette.primary[400]}, ${theme.palette.primary[600]})`,
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  WebkitBackgroundClip: "text",
                }}
              >
                {landingData.heading.split(" ").slice(0, 3).join(" ")}
              </span>
              <br />
              {landingData.heading.split(" ").slice(3).join(" ")}
            </Typography>
            <Typography level="body-lg" color="neutral">
              {landingData.subheading}
            </Typography>
            <Stack
              direction="row"
              marginTop={2}
              gap={2}
              flexWrap="wrap"
              justifyContent="stretch"
            >
              <Button
                sx={{ width: { xs: "100%", sm: "unset" } }}
                startDecorator={<CalendarIcon height={18} />}
                onClick={onClick}
                size="lg"
              >
                Contact Us Today!
              </Button>
              {/* <Button sx={{ width: { xs: '100%', sm: 'unset' } }} startDecorator={<FontAwesomeIcon icon={faWhatsapp} height={18} />} onClick={onClick} size='lg' color='success'>Whatsapp Us</Button> */}
            </Stack>
          </Stack>
          <Box
            width={"100%"}
            maxHeight={"400px"}
            minWidth={{ xs: "100%", md: "500px" }}
            borderRadius="lg"
            overflow="hidden"
          >
            <Image
              alt={"hero image"}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
              height={500}
              width={500}
              src={
                landingData?.bannerimage
                  ? urlFor(landingData?.bannerimage as SanityImageSource).url()
                  : ""
              }
            />
          </Box>
        </Stack>
      </Container>
      <Sheet color="neutral">
        <Container sx={{ paddingY: 8 }}>
          <Stack
            maxWidth="md"
            justifyContent={"center"}
            alignItems={"center"}
            gap={2}
            margin={"auto"}
          >
            <Typography level="h3">Welcome to HS Insurance</Typography>
            <Typography textAlign={"center"}>
              At HS Insurance, we simplify insurance. Whether it’s medical,
              life, term, or motor insurance, we offer expert advice, answer
              your questions, and guide you to the right coverage—all in one
              place.
            </Typography>
          </Stack>
          <Grid container alignItems="stretch" spacing={3} marginTop={3}>
            {insurances
              .sort((a, b) => a.order - b.order)
              .map((i, index) => {
                return (
                  <Grid xs={12} md={6} justifyContent={"stretch"} key={index}>
                    <CustomCard
                      key={i.insurance}
                      title={i.insurance}
                      text={i.description}
                      imageUrl={i.iconimage}
                      imageAlt="health"
                    />
                  </Grid>
                );
              })}
          </Grid>
        </Container>
      </Sheet>
      <Stack
        paddingY={7}
        paddingX={{ xs: 2, md: 0 }}
        style={{
          backgroundImage: `url(${
            landingData?.backgroundimage
              ? urlFor(landingData?.backgroundimage as SanityImageSource).url()
              : ""
          }`,
        }}
        alignItems={"end"}
      >
        <Card
          variant="plain"
          sx={{
            padding: "3rem",
            maxWidth: "md",
          }}
        >
          <CardContent component={Stack} gap={2}>
            <Typography level="h3">Your One-Stop Insurance Guide</Typography>
            <Typography color="neutral">
              Get expert advice, compare plans, understand policies, and secure
              the best coverage—all with HS Insurance.
            </Typography>
            <Grid container marginY={3} paddingY={3}>
              {features.map((f, index) => (
                <Grid key={index} xs={12} sm={6}>
                  <Card variant="plain">
                    <CardContent>
                      <Typography level="title-lg">{f.feature}</Typography>
                      <Typography color="neutral">{f.description}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </CardContent>
          <CardActions sx={{ flexWrap: "wrap" }}>
            <Button
              sx={{ width: { xs: "100%", sm: "unset" } }}
              startDecorator={<CalendarIcon height={18} />}
              onClick={onClick}
              size="lg"
            >
              Contact Us Today!
            </Button>
            {/* <Button sx={{ width: { xs: '100%', sm: 'unset' } }} size='lg' startDecorator={<FontAwesomeIcon icon={faWhatsapp} onClick={onClick} />} color='success' onClick={onClick}>Whatsapp Us</Button> */}
          </CardActions>
        </Card>
      </Stack>
    </>
  );
}

export default LandingPage;
