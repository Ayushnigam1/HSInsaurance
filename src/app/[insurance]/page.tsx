import { Container, Stack, Typography } from "@mui/joy";
import { defineQuery } from "next-sanity";
import { client } from "@/sanity/lib/client";
import Plan from "@/interface/Plans";
import { getInsurances } from "@/util/getInsurances";

const getPlans = async (insurance: string) => {
	const PLANS_QUERY = defineQuery(`*[_type == "Plan" && insuranceType -> insurance == "${insurance}"]{ plan, description }`)
	const plans: Plan[] = await client.fetch(PLANS_QUERY, {}, { next: { revalidate: 60 } })
	return plans;
}

export async function generateStaticParams() {
	const insurances = await getInsurances();
	return insurances.map(({ insurance }) => ({ insurance: insurance.replace(/ /g, '_') }))
}

export default async function InsuranceSection({ params: { insurance } }: { params: { insurance: string } }) {
	const resolvedInsurance = insurance.replace(/_/g, ' ')
	const plans = await getPlans(resolvedInsurance)
	return (
		<>
			<Container maxWidth={'md'}>
				<Stack sx={{ paddingY: 8 }} gap={4}>
					<Typography level="h2" textAlign={'center'}>{resolvedInsurance} Guide</Typography>
					{
						plans.map(plan =>
						(<Stack key={plan.plan.replace(/\s+/g, '_')} id={plan.plan.replace(/\s+/g, '_')} sx={{ scrollMarginTop: "64px" }} gap={2}>
							<Typography level="h3">{plan.plan}</Typography>
							<Typography>{plan.description}</Typography>
						</Stack>
						))
					}
				</Stack>
			</Container>
		</>

	)
}