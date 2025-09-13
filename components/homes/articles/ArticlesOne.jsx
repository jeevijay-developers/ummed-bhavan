
'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchEventGalleries } from "@/util/server";


export default function ArticlesOne() {
  const [eventGalleries, setEventGalleries] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function loadGalleries() {
      try {
        setLoading(true);
        const data = await fetchEventGalleries(1, 9);
        setEventGalleries(data.eventGalleries || []);
      } catch (err) {
        setEventGalleries([]);
      } finally {
        setLoading(false);
      }
    }
    loadGalleries();
  }, []);

  const handleCardClick = (slug) => {
    router.push(`/eventGallary/${slug}`);
  };

  return (
    <section className="layout-pt-xl layout-pb-xl bg-gradient-to-br from-orange-50 to-amber-100">
      <div className="container">
        {/* Centered Header Section */}
        <div className="row justify-center text-center mb-60">
          <div className="col-lg-8">
            {/* <div data-aos="fade-up" className="mb-20">
              <span className="text-orange-600 text-14 fw-600 uppercase tracking-wide">
                Memorable Moments
              </span>
            </div> */}
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
          {loading ? (
            <div className="col-12 text-center py-5">
              <span className="text-orange-600">Loading event galleries...</span>
            </div>
          ) : eventGalleries.length === 0 ? (
            <div className="col-12 text-center py-5 text-gray-500">
              No event galleries found.
            </div>
          ) : (
            eventGalleries.map((elm, i) => (
              <div 
                key={elm._id || i} 
                className="col-lg-4 col-md-6 d-flex"
                data-aos="zoom-in"
                data-aos-delay={i * 100}
                style={{ border: '1px solid #e5e7eb', borderRadius: '12px', padding: '20px' }}
              >
                <div
                  className="enhanced-event-card group w-100"
                  tabIndex={0}
                  role="button"
                  onClick={() => handleCardClick(elm.slug)}
                  onKeyPress={e => (e.key === 'Enter' ? handleCardClick(elm.slug) : null)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="card-wrapper h-100 bg-white rounded-20 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 d-flex flex-column">
                    {/* Image Container */}
                    <div className="image-container relative overflow-hidden flex-shrink-0">
                      <div className="image-aspect-ratio">
                        <Image
                          width={616}
                          height={451}
                          src={elm.banner}
                          alt={elm.title}
                          className="w-100 h-100 object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        {/* Overlay Effects */}
                        <div className="overlay-gradient position-absolute top-0 start-0 w-100 h-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
                      <div 
                        className="card-description text-15 text-secondary mb-3 flex-grow-1" 
                        style={{ 
                          display: '-webkit-box', 
                          WebkitLineClamp: 3, 
                          WebkitBoxOrient: 'vertical', 
                          overflow: 'hidden',
                          lineHeight: '1.6'
                        }}
                        dangerouslySetInnerHTML={{ 
                          __html: elm.content ? elm.content.replace(/<[^>]*>/g, ' ').substring(0, 150) + '...' : 'No description available'
                        }}
                      />
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
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      {/* Custom Styles */}
      {/* ...existing code... */}
    </section>
  );
}
