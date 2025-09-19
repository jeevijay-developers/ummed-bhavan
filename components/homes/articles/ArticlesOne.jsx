
'use client'
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchEventGalleries } from "@/util/server";


export default function ArticlesOne() {
  const [eventGalleries, setEventGalleries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [totalGalleries, setTotalGalleries] = useState(0);
  const router = useRouter();

  useEffect(() => {
    async function loadGalleries() {
      try {
        setLoading(true);
        const data = await fetchEventGalleries(1, 9);
        setEventGalleries(data.eventGalleries || []);
        setTotalGalleries(data.total || 0);
        setHasMore(data.total > 9);
      } catch (err) {
        setEventGalleries([]);
        setTotalGalleries(0);
        setHasMore(false);
      } finally {
        setLoading(false);
      }
    }
    loadGalleries();
  }, []);

  const handleViewMore = async () => {
    try {
      setLoadingMore(true);
      const nextPage = currentPage + 1;
      const data = await fetchEventGalleries(nextPage, 9);
      
      if (data.eventGalleries && data.eventGalleries.length > 0) {
        setEventGalleries(prev => [...prev, ...data.eventGalleries]);
        setCurrentPage(nextPage);
        
        // Check if there are more galleries to load
        const totalLoaded = eventGalleries.length + data.eventGalleries.length;
        setHasMore(totalLoaded < totalGalleries);
      } else {
        setHasMore(false);
      }
    } catch (err) {
      console.error('Error loading more galleries:', err);
      setHasMore(false);
    } finally {
      setLoadingMore(false);
    }
  };
  console.log("Event galleries: ", eventGalleries);
  
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
                className="col-xl-4 col-lg-4 col-md-6 col-sm-12 d-flex"
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                <div
                  className="enhanced-event-card group w-100"
                  tabIndex={0}
                  role="button"
                  onClick={() => handleCardClick(elm.slug)}
                  onKeyPress={e => (e.key === 'Enter' ? handleCardClick(elm.slug) : null)}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="card-wrapper h-100 bg-white rounded-20 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 d-flex flex-column"
                       style={{ border: '1px solid #e5e7eb' }}>
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

        {/* View More Button */}
        {!loading && hasMore && (
          <div className="row justify-center mt-60">
            <div className="col-auto">
              <button
                onClick={handleViewMore}
                disabled={loadingMore}
                className="view-more-btn btn btn-outline-orange px-5 py-3 rounded-lg fw-600 transition-all duration-300 hover:bg-orange-500 hover:text-white disabled:opacity-50"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {loadingMore ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                    Loading More...
                  </>
                ) : (
                  <>
                    View More Events
                    <i className="icon-arrow-down ms-2"></i>
                  </>
                )}
              </button>
              
              {/* Progress Indicator */}
              <div className="text-center mt-3">
                <small className="text-secondary">
                  Showing {eventGalleries.length} of {totalGalleries} events
                </small>
              </div>
            </div>
          </div>
        )}

        {/* No More Results Message */}
        {!loading && !hasMore && eventGalleries.length > 0 && (
          <div className="row justify-center mt-60">
            <div className="col-auto text-center">
              <div className="text-orange-600 fw-600 mb-2">🎉 You've seen all our events!</div>
              <small className="text-secondary">
                Total: {eventGalleries.length} memorable celebrations
              </small>
            </div>
          </div>
        )}
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .view-more-btn {
          border: 2px solid #f97316;
          color: #f97316;
          background: transparent;
          font-size: 16px;
          padding: 12px 30px;
          border-radius: 50px;
          font-weight: 600;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .view-more-btn:before {
          content: '';
          position: absolute;
          top: 50%;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(249, 115, 22, 0.1), transparent);
          transform: translateY(-50%);
          transition: left 0.6s ease;
        }

        .view-more-btn:hover:before {
          left: 100%;
        }

        .view-more-btn:hover {
          background: #f97316;
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(249, 115, 22, 0.3);
        }

        .view-more-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        .view-more-btn:disabled:hover {
          background: transparent;
          color: #f97316;
          box-shadow: none;
        }

        .spinner-border-sm {
          width: 1rem;
          height: 1rem;
        }

        .text-orange-600 {
          color: #ea580c;
        }

        .text-orange-500 {
          color: #f97316;
        }

        .btn-outline-orange {
          border-color: #f97316;
          color: #f97316;
        }

        .btn-outline-orange:hover {
          background-color: #f97316;
          border-color: #f97316;
          color: white;
        }

        /* Animation for button appearance */
        @keyframes buttonFadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .view-more-btn {
          animation: buttonFadeIn 0.5s ease-out;
        }

        /* Progress indicator styling */
        .progress-indicator {
          background: linear-gradient(90deg, #f97316, #ea580c);
          height: 2px;
          border-radius: 1px;
          margin-top: 10px;
        }
      `}</style>
    </section>
  );
}
