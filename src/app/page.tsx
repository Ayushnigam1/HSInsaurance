import LandingPage from "@/components/LandingPage";
import Insurance from "@/interface/Insurances";
import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";


const getText = async () => {
  const INSURANCE_QUERY = defineQuery(`*[_type == "Insurance"]{ insurance, order, description }`)
  const insurances: Insurance[] = await client.fetch(INSURANCE_QUERY, {}, { next: { revalidate: 60 } })
  return insurances;
}

export default async function Home() {
  const insurances = await getText();
  return (
    <>
      <LandingPage insurances={insurances??[]} />
    </>
  );
}
