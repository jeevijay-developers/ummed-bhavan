'use client'
import { features } from "@/data/features";
import Image from "next/image";
import React from "react";

export default function FeaturesOne() {
  return (
    <section
      className="layout-pt-xl layout-pb-xl bg-gradient position-relative overflow-hidden"
    >
      <div className="container position-relative z-1">
        <div className="row justify-content-center mb-60">
          <div className="col-auto text-center">
            <h2 data-aos="fade-up" className="text-36 fw-700 text-dark">
              Why Choose Ummed Club Kota?
            </h2>
            <p className="text-18 text-gray mt-10" data-aos="fade-up" data-aos-delay="100">
              Discover our exclusive facilities and premium features
            </p>
          </div>
        </div>

        <div
          data-aos="fade-up"
          className="row x-gap-30 y-gap-30 pt-30 sm:pt-20"
        >
          {features.map((elm, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              className="col-lg-3 col-md-6"
            >
              <div className="enhanced-card text-center h-100 position-relative">
                <div className="card-content p-30">
                  <div className="icon-wrapper mb-25">
                    <div className="enhanced-icon bg-white mx-auto d-flex align-items-center justify-content-center">
                      <Image width={32} height={32} src={elm.iconSrc} alt="icon" />
                    </div>
                  </div>
                  
                  <h3 className="text-20 fw-600 mb-15 text-dark">{elm.title}</h3>
                  <p className="text-15 text-gray">{elm.text}</p>
                  
                  <div className="highlight-bar mx-auto mt-25"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .enhanced-card {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .enhanced-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
          border-color: rgba(74, 144, 226, 0.2);
        }

        .card-content {
          padding: 30px 25px;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
        }

        .enhanced-icon {
          width: 60px;
          height: 60px;
          border-radius: 12px;
          border: 2px solid rgba(74, 144, 226, 0.1);
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .enhanced-card:hover .enhanced-icon {
          border-color: rgba(74, 144, 226, 0.25);
          transform: translateY(-2px);
        }

        .enhanced-card h3 {
          margin-bottom: 15px;
          font-size: 18px;
          line-height: 1.4;
          min-height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .enhanced-card p {
          line-height: 1.6;
          margin-bottom: 0;
          flex-grow: 1;
        }

        .highlight-bar {
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #4a90e2, #7b68ee);
          border-radius: 1px;
          transition: width 0.4s ease;
          margin-top: 20px;
        }

        .enhanced-card:hover .highlight-bar {
          width: 30px;
        }

        /* Responsive adjustments */
        @media (max-width: 991px) {
          .card-content {
            padding: 25px 20px;
          }
          
          .enhanced-icon {
            width: 55px;
            height: 55px;
          }

          .enhanced-card h3 {
            font-size: 17px;
            min-height: 44px;
          }
        }

        @media (max-width: 767px) {
          .card-content {
            padding: 25px 20px;
          }
          
          .enhanced-card h3 {
            font-size: 16px;
            min-height: 40px;
          }

          .enhanced-card p {
            font-size: 14px;
          }
        }
      `}</style>
    </section>
  );
}
