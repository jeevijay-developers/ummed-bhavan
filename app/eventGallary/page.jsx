// import ClubGallary from "@/components/ClubGallary/ClubGallary";
import EnevtGallary from "@/components/ClubGallary/EnevtGallary";
import ArticlesOne from "@/components/homes/articles/ArticlesOne";
import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import React from "react";

export const metadata = {
  title: "Event Gallery - Shree Ummed Club Kota | Memorable Celebrations",
  description: "Relive the spectacular moments and celebrations at Shree Ummed Club Kota. From cultural festivities to exclusive gatherings, discover the vibrant social life that makes our club truly special.",
  keywords: "Shree Ummed Club Kota, events, celebrations, cultural festivals, gatherings, club events, Kota events, social activities",
  openGraph: {
    title: "Event Gallery - Shree Ummed Club Kota",
    description: "Discover the vibrant celebrations and memorable events at Shree Ummed Club Kota through our exclusive event gallery.",
    type: "website",
  },
};

const page = () => {
  return (
    <div>
      <Header1 />
      <ArticlesOne />
      {/* <EnevtGallary /> */}
      <FooterOne />
    </div>
  );
};

export default page;
