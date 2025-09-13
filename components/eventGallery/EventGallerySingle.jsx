'use client'
import React, { useState } from "react";
import Image from "next/image";

export default function EventGallerySingle({ eventGallery }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const openModal = (imgUrl) => {
    setModalImage(imgUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalImage(null);
  };
  if (!eventGallery) {
    return (
      <section className="layout-pt-md layout-pb-xl">
        <div className="container">
          <div className="row justify-center">
            <div className="col-lg-8 text-center">
              <h2>Event Gallery Not Found</h2>
              <p>The requested event gallery could not be found.</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="layout-pt-md layout-pb-xl" >
        <div className="container">
          <div className="row y-gap-20 justify-center my-2">
            <div className="col-lg-12">
              {/* Title */}
              <h1 className="text-40 md:text-30 fw-700 mb-20">{eventGallery.title}</h1>

              {/* Content with HTML rendering */}
              <div 
                className="event-content mt-30"
                dangerouslySetInnerHTML={{ __html: eventGallery.content }}
              />

              {/* Event Images Gallery */}
              {eventGallery.images && eventGallery.images.length > 0 && (
                <div className="mt-60">
                  <h3 className="text-24 fw-600 mb-30">Event Gallery</h3>
                  <div className="row y-gap-30">
                    {eventGallery.images.map((image, index) => (
                      <div key={index} className="col-lg-4 col-md-4 col-sm-6 mb-4">
                        <div className="gallery-item" style={{ cursor: 'pointer' }} onClick={() => openModal(image)}>
                          <Image
                            width={400}
                            height={300}
                            src={image}
                            alt={`${eventGallery.title} - Image ${index + 1}`}
                            className="w-100 rounded-8 object-cover"
                            style={{ height: '300px' }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Modal for fullscreen image */}
      {modalOpen && (
        <div className="event-modal-overlay" onClick={closeModal}>
          <div className="event-modal-content" onClick={e => e.stopPropagation()}>
            <button className="event-modal-close" onClick={closeModal}>&times;</button>
            <img src={modalImage} alt="Event Fullscreen" className="event-modal-img" />
          </div>
        </div>
      )}

      {/* Custom Styles for HTML Content and Modal */}
      <style jsx global>{`
        .event-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0,0,0,0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }
        .event-modal-content {
          position: relative;
          background: transparent;
          padding: 0;
          border-radius: 12px;
          max-width: 90vw;
          max-height: 90vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
          
        .event-modal-img {
          max-width: 90vw;
          max-height: 80vh;
          border-radius: 12px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        }

        .event-content {
          line-height: 1.8;
          color: #374151;
        }

        .event-content p {
          margin-bottom: 1.5rem;
          color: #4b5563;
          font-size: 16px;
          line-height: 1.8;
        }

        .event-content h1 {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
          color: #1f2937;
        }

        .event-content h2 {
          font-size: 2rem;
          font-weight: 600;
          margin-bottom: 1.25rem;
          color: #1f2937;
        }

        .event-content h3 {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #374151;
        }

        .event-content ul {
          margin: 1.5rem 0;
          padding-left: 1.5rem;
          list-style-type: disc;
          list-style-position: outside;
        }

        .event-content ul li {
          margin-bottom: 0.75rem;
          color: #4b5563;
          font-size: 16px;
          line-height: 1.6;
          position: relative;
          display: list-item;
          list-style-type: disc;
          padding-left: 0.5rem;
        }

        .event-content ul li::marker {
          color: #f97316;
          content: "•";
        }

        .event-content ol {
          margin: 2rem 0;
          padding-left: 1.5rem;
          list-style-type: decimal;
          list-style-position: outside;
        }

        .event-content ol li {
          margin-bottom: 0.75rem;
          color: #4b5563;
          font-size: 16px;
          line-height: 1.6;
          display: list-item;
          list-style-type: decimal;
        }

        .event-content ol li::marker {
          color: #f97316;
          font-weight: 600;
        }

        .event-content blockquote {
          border-left: 4px solid #f97316;
          margin: 2rem 0;
          padding: 1.5rem 2rem;
          background: #fff7ed;
          border-radius: 0.5rem;
          font-style: italic;
          color: #7c2d12;
        }

        .event-content strong {
          font-weight: 600;
          color: #1f2937;
        }

        .event-content em {
          font-style: italic;
          color: #6b7280;
        }

        .event-content a {
          color: #f97316;
          text-decoration: none;
          border-bottom: 1px solid transparent;
          transition: border-color 0.3s ease;
        }

        .event-content a:hover {
          border-bottom-color: #f97316;
        }

        .gallery-item {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .gallery-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }

        .gallery-item img {
          transition: transform 0.3s ease;
        }

        .gallery-item:hover img {
          transform: scale(1.05);
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .event-content h1 {
            font-size: 2rem;
          }

          .event-content h2 {
            font-size: 1.5rem;
          }

          .event-content h3 {
            font-size: 1.25rem;
          }

          .event-content p,
          .event-content ul li,
          .event-content ol li {
            font-size: 15px;
          }
        }
      `}</style>
    </>
  );
}