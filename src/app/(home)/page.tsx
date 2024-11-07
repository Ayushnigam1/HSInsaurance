import LandingPage from "@/components/LandingPage";
import { Feature } from "@/interface/Feature";
import Insurance from "@/interface/Insurances";
import { LandingData } from "@/interface/LandingPage";
import { client } from "@/sanity/lib/client";
import { defineQuery } from "next-sanity";

const getText = async () => {
  const INSURANCE_QUERY = defineQuery(
    `*[_type == "Insurance"]{ insurance, order, description,iconimage }`
  );
  const insurances: Insurance[] = await client.fetch(
    INSURANCE_QUERY,
    {},
    { next: { revalidate: 60 } }
  );
  return insurances;
};

const getFeatures = async () => {
  const INSURANCE_QUERY = defineQuery(
    `*[_type == "Feature"]{ feature, description }`
  );
  const insurances: Feature[] = await client.fetch(
    INSURANCE_QUERY,
    {},
    { next: { revalidate: 60 } }
  );
  return insurances;
};
const getLandingData = async () => {
  const LANDING_QUERY = defineQuery(
    `*[_type=="SiteSettingPage"]{ heading, subheading, bannerimage, backgroundimage}`
  );
  const landingData: LandingData[] = await client.fetch(
    LANDING_QUERY,
    {},
    { next: { revalidate: 60 } }
  );
  return landingData[0];
};

export default async function Home() {
  const insurances = await getText();
  const features = await getFeatures();
  const landingData = await getLandingData();
  return (
    <LandingPage
      insurances={insurances ?? []}
      features={features}
      landingData={landingData}
    />
  );
}
