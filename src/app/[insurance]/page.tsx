"use client"
import { Box, Stack, Typography } from "@mui/joy";
import { useParams } from 'next/navigation';
import { defineQuery } from "next-sanity";
import { client } from "@/sanity/lib/client";
import Insurance from "@/interface/Insurances";
import { useEffect, useState } from "react";
const getPlans = async () => {
        const PLANS_QUERY = defineQuery(`*[_type == "Insurance"]{
        insurance,
        order,
        "plans": *[_type == "Plan" && references(^._id)]{
          plan
        }
      }`)
        const plans: Insurance[] = await client.fetch(PLANS_QUERY, {}, { next: { revalidate: 60 } })
        return plans;
      }
export default function Term() {
        const [plans, setPlans] = useState<Insurance[]>([])
        const params =useParams()
        const insurance= params.insurance as string
        useEffect(() => {
                getPlans().then((plans) => setPlans(plans))
              }, [])
        return (
                <>
                <Stack paddingY={8}>
                <Typography level="h2" textAlign={'center'}>{insurance.replace(/_/g, ' ')} Guide</Typography>
                {
                        plans.find((item)=>item?.insurance?.toLowerCase()===insurance.replace(/_/g, ' ').toLowerCase())?.plans?.map(plan =>
                                (<Box key={plan.plan} id={plan.plan} sx={{margin:"10px"}}>
                                 <Typography level="h4">{plan.plan}</Typography>
                                 </Box>
                                ))
                }
                </Stack>
              
                </>
                
        )
}