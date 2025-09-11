'use client'
import { articles } from "@/data/articles";
import { blogs } from "@/data/blogs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import eventDesc from "@/data/eventDesc";

export default function ArticlesOne() {
  return (
    <section className="layout-pt-xl layout-pb-xl bg-gradient-to-br from-orange-50 to-amber-100">
      <div className="container">
        {/* Centered Header Section */}
        <div className="row justify-center text-center mb-60">
          <div className="col-lg-8">
            <div data-aos="fade-up" className="mb-20">
              <span className="text-orange-600 text-14 fw-600 uppercase tracking-wide">
                Memorable Moments
              </span>
            </div>
            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-40 lg:text-36 md:text-30 sm:text-24 fw-700 text-dark mb-20"
            >
              Event Gallery
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-16 text-gray leading-relaxed"
            >
              Relive the spectacular moments and celebrations at Shree Ummed Club Kota. From cultural festivities to 
              exclusive gatherings, discover the vibrant social life that makes our club truly special.
            </p>
          </div>
        </div>

        {/* Enhanced Event Cards Grid */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="row g-4 pt-20"
        >
          {eventDesc.map((elm, i) => (
            <div 
              key={i} 
              className="col-lg-4 col-md-6 d-flex"
              data-aos="zoom-in"
              data-aos-delay={i * 100}
            >
              <Link href={`/blog-single/${i}`} className="enhanced-event-card group w-100">
                <div className="card-wrapper h-100 bg-white rounded-20 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 d-flex flex-column">
                  {/* Image Container */}
                  <div className="image-container relative overflow-hidden flex-shrink-0">
                    <div className="image-aspect-ratio">
                      <Image
                        width={616}
                        height={451}
                        src={elm.bannerImage}
                        alt={elm.title}
                        className="w-100 h-100 object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      
                      {/* Overlay Effects */}
                      <div className="overlay-gradient position-absolute top-0 start-0 w-100 h-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Date Badge */}
                      <div className="event-badge position-absolute top-3 start-3 bg-white bg-opacity-90 backdrop-blur rounded-lg px-3 py-2 transform translate-y-n2 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="text-orange-600 small fw-600 text-uppercase">Event</div>
                        <div className="text-dark small fw-500">Highlight</div>
                      </div>
                      
                      {/* Hover Icon */}
                      <div className="hover-icon position-absolute top-3 end-3 d-flex align-items-center justify-content-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <span className="text-white">→</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="card-content p-4 flex-grow-1 d-flex flex-column">
                    {/* Title */}
                    <div className="mb-3 flex-shrink-0">
                      <h4 className="card-title text-20 fw-600 text-dark group-hover:text-orange-600 transition-colors duration-300">
                        {elm.title}
                      </h4>
                    </div>

                    {/* Description */}
                    <p className="card-description text-15 text-secondary mb-3 flex-grow-1">
                      {elm.desc}
                    </p>

                    {/* Bottom Section */}
                    <div className="card-footer d-flex align-items-center justify-content-between mt-auto">
                      <div className="d-flex align-items-center gap-2">
                        <span className="text-orange-500">📅</span>
                        <span className="small text-secondary">View Event</span>
                      </div>
                      
                      {/* Animated Underline */}
                      <div className="underline-animation"></div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .enhanced-event-card {
          text-decoration: none;
          color: inherit;
          display: block;
          height: 100%;
        }

        .enhanced-event-card:hover {
          text-decoration: none;
          color: inherit;
        }

        .card-wrapper {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(255, 165, 0, 0.1);
          min-height: 450px;
        }

        .card-wrapper:hover {
          border-color: rgba(255, 165, 0, 0.2);
          box-shadow: 0 25px 50px rgba(255, 165, 0, 0.1);
          transform: translateY(-8px);
        }

        .image-container {
          position: relative;
          background: linear-gradient(145deg, #f8f9fa, #e9ecef);
        }

        .image-aspect-ratio {
          position: relative;
          width: 100%;
          height: 250px;
          overflow: hidden;
        }

        .overlay-gradient {
          background: linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%, transparent 100%);
        }

        .event-badge {
          backdrop-filter: blur(10px);
        }

        .translate-y-n2 {
          transform: translateY(-8px);
        }

        .hover-icon {
          width: 40px;
          height: 40px;
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border-radius: 50%;
          transform: translateY(8px);
        }

        .group:hover .hover-icon {
          transform: translateY(0);
        }

        .card-content {
          min-height: 200px;
        }

        .card-title {
          line-height: 1.4;
          min-height: 60px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .card-description {
          line-height: 1.6;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
          min-height: 72px;
        }

        .card-footer {
          margin-top: auto;
          padding-top: 1rem;
        }

        .underline-animation {
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #f97316, #ea580c);
          transition: width 0.5s ease;
          border-radius: 1px;
        }

        .group:hover .underline-animation {
          width: 48px;
        }

        /* Consistent spacing */
        .row.g-4 > * {
          padding: 0.75rem;
        }

        /* Animation for staggered appearance */
        @keyframes slideUpFade {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .enhanced-event-card {
          animation: slideUpFade 0.6s ease-out;
        }

        /* Responsive adjustments */
        @media (max-width: 991px) {
          .card-wrapper {
            min-height: 420px;
          }
          
          .image-aspect-ratio {
            height: 220px;
          }
          
          .card-content {
            min-height: 180px;
          }
        }

        @media (max-width: 767px) {
          .card-wrapper {
            min-height: 400px;
          }
          
          .image-aspect-ratio {
            height: 200px;
          }
          
          .card-content {
            min-height: 160px;
          }
          
          .card-title {
            min-height: 50px;
            font-size: 18px;
          }
          
          .card-description {
            min-height: 60px;
            font-size: 14px;
          }
        }

        @media (max-width: 576px) {
          .row.g-4 > * {
            padding: 0.5rem;
          }
          
          .card-wrapper {
            min-height: 380px;
          }
        }

        /* Accessibility improvements */
        .enhanced-event-card:focus {
          outline: 2px solid #f97316;
          outline-offset: 2px;
        }

        .enhanced-event-card:focus .card-wrapper {
          border-color: #f97316;
          box-shadow: 0 0 0 3px rgba(249, 115, 22, 0.1);
        }

        /* Smooth group hover states */
        .group:hover .card-title {
          color: #f97316;
        }

        .group:hover .event-badge {
          transform: translateY(0);
        }
      `}</style>
    </section>
  );
}
