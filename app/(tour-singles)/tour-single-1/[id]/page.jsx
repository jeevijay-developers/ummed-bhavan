import React from "react";
import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import SingleOne from "@/components/tourSingle/pages/SingleOne";
import { fetchFacilitiesbySlug } from "@/util/server";


export const metadata = {
  title: "Ummed club kota",
  description: "ViaTour - Travel & Tour React NextJS Template",
};

export default async function page({ slug }) {
  const tour = await fetchFacilitiesbySlug(slug);
  return (
    <>
      <main>
        <Header1 />
        {/* <PageHeader /> */}

        <SingleOne tour={tour} />
        {/* <TourSlider /> */}
        <FooterOne />
      </main>
    </>
  );
}
