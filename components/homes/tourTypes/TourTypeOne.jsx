import { destinationsSix } from "@/data/destinations";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TourTypeOne() {
  return (
    <section className="layout-pt-xl layout-pb-xl">
      <div className="container">
        <div className="row justify-between items-end y-gap-10">
          <div className="col-auto">
            <h2
              data-aos="fade-up"
              data-aos-delay=""
              className="text-30 md:text-24"
            >
              Popular things to do
            </h2>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay=""
          className="-type-1 pt-40 sm:pt-22"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}
        >
          {destinationsSix.map((elm, i) => (
            <section
              key={i}
              className="featureCard -type-1 -hover-1 overflow-hidden rounded-12 px-30 py-30"
            >
              <div className="featureCard__image">
                <Image
                  width={780}
                  height={780}
                  style={{ objectFit: "cover" }}
                  src={elm.imgSrc}
                  alt="image"
                />
              </div>

              <div className="featureCard__content">
                <h4 className="text-white">{elm.title}</h4>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}