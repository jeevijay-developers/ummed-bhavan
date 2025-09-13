
import React from "react";
import Header1 from "@/components/layout/header/Header1";
import SingleOne from "@/components/tourSingle/pages/SingleOne";
import FooterOne from "@/components/layout/footers/FooterOne";
import { fetchFacilitiesbySlug } from "@/util/server";

export const metadata = {
  title: "Ummed club kota",
  description: "ViaTour - Travel & Tour React NextJS Template",
};

export default async function page({ params }) {
    const {slug} = await params;
  const facility = await fetchFacilitiesbySlug(slug);
  console.log("Slug: ", facility);
  
  console.log(facility);

  return (
    <>
      <main>
        <Header1 />
        {/* <PageHeader /> */}

        <SingleOne tour={facility} />
        {/* <TourSlider /> */}
        <FooterOne />
      </main>
    </>
  );
}
