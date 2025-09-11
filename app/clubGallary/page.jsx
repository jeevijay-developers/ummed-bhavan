import ClubGallary from "@/components/ClubGallary/ClubGallary";
import TrendingDestinationsTwo from "@/components/homes/destinations/TrendingDestinationsTwo";
import FooterOne from "@/components/layout/footers/FooterOne";
import Header1 from "@/components/layout/header/Header1";
import React from "react";

export const metadata = {
  title: "Club Gallery - Shree Ummed Club Kota | Heritage & Luxury",
  description: "Explore the timeless elegance and rich heritage of Shree Ummed Club Kota through our curated gallery. Discover historic architecture, modern amenities, and the perfect blend of tradition and luxury.",
  keywords: "Shree Ummed Club Kota, club gallery, heritage, luxury, historic architecture, Kota club, premium facilities",
  openGraph: {
    title: "Club Gallery - Shree Ummed Club Kota",
    description: "Discover the historic elegance and modern luxury of Shree Ummed Club Kota through our exclusive gallery.",
    type: "website",
  },
};

const page = () => {
  return (
    <div>
      <Header1 />
      <TrendingDestinationsTwo />

      {/* <ClubGallary /> */}
      <FooterOne />
    </div>
  );
};

export default page;
