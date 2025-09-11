"use client";
import { destinationsEight } from "@/data/destinations";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { tourDataThreeA } from "@/data/tours";
import { IoCloseSharp } from "react-icons/io5";
import "./style.css";

export default function TrendingDestinationsTwo() {
  const [image, setImage] = useState("/img/clubgallary/cg10.jpg");
  const [viewBig, setViewBig] = useState(false);
  const [text, setText] = useState("");
  
  const handleImageClick = (path, text) => {
    setImage(path);
    setText(text);
    setViewBig(true);
    document.body.style.overflow = 'hidden';
  };
  
  const handleCloseImageClick = () => {
    setImage("");
    setViewBig(false);
    document.body.style.overflow = 'unset';
  };

  // Handle ESC key and cleanup
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === 'Escape' && viewBig) {
        handleCloseImageClick();
      }
    };

    if (viewBig) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.body.style.overflow = 'unset';
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [viewBig]);
  return (
    <section className="layout-pt-xl layout-pb-xl bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container">
        {/* Centered Header Section */}
        <div className="row justify-center text-center mb-60">
          <div className="col-lg-8">
            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-40 lg:text-36 md:text-30 sm:text-24 fw-700 text-dark mb-20"
            >
              Club Gallery
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="text-16 text-gray leading-relaxed"
            >
              Explore the timeless elegance and rich heritage of Shree Ummed Club Kota through our curated gallery. 
              From historic architecture to modern amenities, witness the perfect blend of tradition and luxury.
            </p>
          </div>
        </div>

        {/* Enhanced Gallery Grid */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          className="row y-gap-40 x-gap-30 pt-20"
        >
          {tourDataThreeA.map((elm, i) => (
            <div
              key={i}
              className="col-lg-4 col-md-6"
              data-aos="zoom-in"
              data-aos-delay={i * 100}
            >
              <div
                className="enhanced-gallery-card group cursor-pointer"
                onClick={() => {
                  handleImageClick(elm.imageSrc, elm.title);
                }}
              >
                <div className="card-image-wrapper relative overflow-hidden rounded-20">
                  <div className="image-overlay absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10"></div>
                  
                  <Image
                    width={450}
                    height={300}
                    src={elm.imageSrc}
                    alt={elm.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Hover Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-25 z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <div className="bg-white/20 backdrop-blur-md rounded-12 p-20 border border-white/30">
                      <h4 className="text-white text-18 fw-600 mb-8">{elm.title}</h4>
                      <div className="flex items-center text-white/80 text-14">
                        <span className="mr-10">📸</span>
                        <span>Click to view full image</span>
                      </div>
                      <div className="w-0 group-hover:w-full h-1 bg-white/60 mt-15 transition-all duration-700 delay-200"></div>
                    </div>
                  </div>
                </div>
                
                {/* Card Title (Always Visible) */}
                <div className="card-content pt-20 text-center">
                  <h4 className="text-20 fw-600 text-dark group-hover:text-blue-600 transition-colors duration-300">
                    {elm.title}
                  </h4>
                  <div className="w-0 group-hover:w-16 h-0.5 bg-blue-600 mx-auto mt-10 transition-all duration-500"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Modal */}
      {viewBig && (
        <div 
          className="enhanced-modal"
          onClick={(e) => {
            // Close modal if clicking the backdrop (not the content)
            if (e.target === e.currentTarget) {
              handleCloseImageClick();
            }
          }}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.55)',
            backdropFilter: 'blur(20px)',
            zIndex: 999999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            padding: '20px',
            boxSizing: 'border-box',
            animation: 'fadeInModal 0.3s ease-out'
          }}
        >
          {/* Close Button */}
          <div 
            className="close-button"
            onClick={() => handleCloseImageClick()}
            style={{
              position: 'fixed',
              top: '30px',
              right: '30px',
              width: '60px',
              height: '60px',
              backdropFilter: 'blur(15px)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              zIndex: 1000000,
              border: '2px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
            }}
          >
            <IoCloseSharp style={{ color: 'white', fontSize: '28px', background: 'none' }} />
          </div>
          
          {/* Modal Content */}
          <div 
            className="modal-content"
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              textAlign: 'center',
              position: 'relative',
              zIndex: 999998
            }}
          >
            {/* Image Container with Enhanced Styling */}
            <div 
              className="image-container"
              style={{
                marginBottom: '30px',
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 30px 60px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))'
              }}
            >
              <Image
                height={800}
                width={800}
                src={image}
                alt="Gallery Image"
                style={{ 
                  maxWidth: '85vw',
                  maxHeight: '75vh',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                  borderRadius: '20px',
                  display: 'block'
                }}
              />
              
              {/* Image Overlay Effects */}
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(45deg, transparent 49%, rgba(255,255,255,0.03) 50%, transparent 51%)',
                  pointerEvents: 'none',
                  borderRadius: '20px'
                }}
              />
            </div>
            
            {/* Enhanced Info Card */}
            <div 
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                borderRadius: '16px',
                padding: '24px 32px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                maxWidth: '600px',
                margin: '0 auto'
              }}
            >
              <h4 
                style={{
                  color: 'white',
                  fontSize: '24px',
                  fontWeight: '700',
                  marginBottom: '12px',
                  textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'
                }}
              >
                {text}
              </h4>
              <div 
                style={{
                  width: '60px',
                  height: '3px',
                  background: 'linear-gradient(90deg, #4f46e5, #06b6d4)',
                  margin: '16px auto',
                  borderRadius: '2px'
                }}
              />
              <p 
                style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '16px',
                  lineHeight: '1.6',
                  margin: 0,
                  textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
                }}
              >
                Part of Shree Ummed Club Kota's heritage collection
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style jsx>{`
        .enhanced-gallery-card {
          background: white;
          border-radius: 20px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
        }

        .enhanced-gallery-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }

        .card-image-wrapper {
          height: 280px;
          position: relative;
        }

        /* Enhanced Modal Animations */
        @keyframes fadeInModal {
          from {
            opacity: 0;
            backdrop-filter: blur(0px);
          }
          to {
            opacity: 1;
            backdrop-filter: blur(20px);
          }
        }

        @keyframes scaleInImage {
          from {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes slideUpContent {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .enhanced-modal .image-container {
          animation: scaleInImage 0.5s ease-out 0.1s both;
        }

        .enhanced-modal .modal-content > div:last-child {
          animation: slideUpContent 0.5s ease-out 0.3s both;
        }

        /* Improved responsiveness */
        @media (max-width: 768px) {
          .card-image-wrapper {
            height: 240px;
          }
          
          .enhanced-modal {
            padding: 15px !important;
          }
          
          .enhanced-modal .image-container img {
            max-width: 95vw !important;
            max-height: 70vh !important;
          }
          
          .close-button {
            top: 15px !important;
            right: 15px !important;
            width: 50px !important;
            height: 50px !important;
          }
        }

        @media (max-width: 480px) {
          .enhanced-modal .image-container img {
            max-width: 98vw !important;
            max-height: 65vh !important;
          }
        }

        /* Accessibility improvements */
        .enhanced-modal:focus {
          outline: none;
        }

        .close-button:focus {
          outline: 2px solid rgba(255, 255, 255, 0.5);
          outline-offset: 2px;
        }
      `}</style>
    </section>
  );
}
