import LandingPage from "@/components/LandingPage";
import { Feature } from "@/interface/Feature";
import Insurance from "@/interface/Insurances";
import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";


const getText = async () => {
  const INSURANCE_QUERY = defineQuery(`*[_type == "Insurance"]{ insurance, order, description }`)
  const insurances: Insurance[] = await client.fetch(INSURANCE_QUERY, {}, { next: { revalidate: 60 } })
  return insurances;
}

const getFeatures = async () => {
  const INSURANCE_QUERY = defineQuery(`*[_type == "Feature"]{ feature, description }`)
  const insurances: Feature[] = await client.fetch(INSURANCE_QUERY, {}, { next: { revalidate: 60 } })
  return insurances;
}

export default async function Home() {
  const insurances = await getText();
  const features = await getFeatures();
  return (
    <LandingPage insurances={insurances ?? []} features={features} />
  );
}
