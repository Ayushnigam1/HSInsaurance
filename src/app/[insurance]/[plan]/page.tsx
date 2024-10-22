import { Container, Stack, Typography } from "@mui/joy";
import { defineQuery } from "next-sanity";
import { client } from "@/sanity/lib/client";
import Plan from "@/interface/Plans";
import { getInsurances } from "@/util/getInsurances";
import Buttons from "@/components/Buttons";

const getPlans = async (insurance: string) => {
	const PLANS_QUERY = defineQuery(`*[_type == "Plan" && insuranceType -> insurance == "${insurance}"]{ plan, description }`)
	const plans: Plan[] = await client.fetch(PLANS_QUERY, {}, { next: { revalidate: 60 } })
	return plans;
}
export async function generateStaticParams() {
	const insurances = await getInsurances();
	const data =insurances.flatMap(({ insurance, plans }) => 
        plans?.map(({ plan }) => 
            `${insurance.replace(/ /g, '_')}/${plan.replace(/ /g, '_')}`
        )
    );
    return data;
}

export default async function InsuranceSection({ params: { insurance,plan } }: { params: { insurance: string,plan:string } }) {
	const resolvedInsurance = insurance.replace(/_/g, ' ')
	const currentplan =  (await getPlans(resolvedInsurance)).find(Plan=>(Plan.plan=plan.replace(/_/g, ' ')))
   
	return (
		<>
			 <Container>
                <Stack paddingY={12} direction={{ lg: 'row' }} gap={2}>
                    <Stack alignContent={'center'}  gap={2}>
					<Typography level="h1" >{currentplan?.plan!} Guide</Typography>
					 <Typography level='body-lg' color='neutral' textAlign={'justify'}>{currentplan?.description}</Typography>
					
			        </Stack>
                    <Stack>
                    <img alt={'hero image'} src={'https://placehold.co/600x400/png'}></img>
                   <Buttons/>
                   </Stack>
                </Stack>
            </Container>
		</>

	)
}