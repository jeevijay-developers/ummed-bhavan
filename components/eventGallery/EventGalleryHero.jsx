'use client'
import React from "react";
import Image from "next/image";

export default function EventGalleryHero({ eventGallery }) {
  if (!eventGallery) {
    return null;
  }

  return (
    <section className="hero -type-1" data-bg="img/hero/1/bg.png" style={{ width: "98vw", borderRadius: "12px" }}>
      <div className="hero__bg">
        <Image
          width={1920}
          height={900}
          src={eventGallery.banner}
          alt={eventGallery.title}
          className=""
        />
        <div className="hero__bg__overlay"></div>
      </div>

      <div className="container">
        <div className="row justify-center">
          <div className="col-xl-8 col-lg-9">
            <div className="hero__content text-center">
              <h1 className="hero__title text-white text-60 lg:text-40 md:text-30">
                {eventGallery.title}
              </h1>
              
              <div className="hero__meta mt-20">
                <div className="d-flex x-gap-20 y-gap-10 items-center justify-center text-white">
                  <div className="d-flex items-center x-gap-5">
                    <i className="icon-calendar text-16"></i>
                    <span className="text-15">
                      {new Date(eventGallery.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <div className="d-flex items-center x-gap-5">
                    <i className="icon-image text-16"></i>
                    <span className="text-15">{eventGallery.images?.length || 0} Photos</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          position: relative;
          height: 500px;
          display: flex;
          align-items: center;
          overflow: hidden;
          width: 100%;
        }

        .hero__bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          overflow: hidden;
        }

        .hero__bg__image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          max-width: 80%;
        }

        .hero__bg__overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.4) 0%,
            rgba(0, 0, 0, 0.6) 100%
          );
          z-index: 2;
        }

        .hero .container {
          position: relative;
          z-index: 3;
        }

        .hero__content {
          max-width: 800px;
          margin: 0 auto;
        }

        .hero__title {
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
          margin-bottom: 20px;
        }

        .hero__meta {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 50px;
          padding: 15px 30px;
          display: inline-block;
        }

        @media (max-width: 768px) {
          .hero {
            height: 400px;
          }

          .hero__title {
            font-size: 2rem !important;
          }

          .hero__meta {
            padding: 12px 20px;
          }
        }

        @media (max-width: 576px) {
          .hero {
            height: 350px;
          }

          .hero__title {
            font-size: 1.75rem !important;
          }
        }
      `}</style>
    </section>
  );
}