import Insurance from "@/interface/Insurances";
import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";

export const getInsurances = async () => {
  const PLANS_QUERY = defineQuery(`*[_type == "Insurance"]{
  insurance,
  order,
  "plans": *[_type == "Plan" && references(^._id)]{
    plan
  }
}`);
  const plans: Insurance[] = await client.fetch(PLANS_QUERY, {}, { next: { revalidate: 60 } });
  return plans;
};
