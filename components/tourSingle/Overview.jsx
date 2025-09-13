import React from "react";

export default function Overview({ tour }) {
  return (
    <>
      <h2 className="text-30">{tour?.data?.title || tour?.name}</h2>
      <p className="mt-20">{tour?.data?.description}</p>

      {tour?.data?.features && tour.data.features.length > 0 && (
        <>
          <h3 className="text-20 fw-500 mt-20">Features & Amenities</h3>
          <ul className="ulList mt-20">
            {tour.data.features.map((feature, index) => {
              return <li key={index}>{feature}</li>;
            })}
          </ul>
        </>
      )}
    </>
  );
}
