"use client";

import React, { useState } from "react";
import ImageLightBox from "./ImageLightBox";
import Image from "next/image";
// const images = [
//   {
//     id: 1,
//     image: `/img/tourSingle/1/1.png`,
//   },
//   {
//     id: 1,
//     image: `/img/tourSingle/1/2.png`,
//   },
//   {
//     id: 1,
//     image: `/img/tourSingle/1/3.png`,
//   },
//   {
//     id: 1,
//     image: `/img/tourSingle/1/4.png`,
//   },
// ];
export default function Gallery1({ tour }) {
  const [activeLightBox, setActiveLightBox] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(1);
  
  const images = tour?.images || [];
  const hasImages = images.length > 0;
  
  if (!hasImages) {
    return (
      <div className="tourSingleGrid -type-1 mt-30">
        <div className="tourSingleGrid__grid mobile-css-slider-2">
          <div className="text-center py-60">
            <p className="text-18 text-light-1">No images available</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="tourSingleGrid -type-1 mt-30">
        <div className="tourSingleGrid__grid mobile-css-slider-2">
          {images.map((image, index) => {
            // First image gets larger size, others get smaller sizes
            const isFirstImage = index === 0;
            const width = isFirstImage ? 1155 : index === 1 ? 765 : 375;
            const height = isFirstImage ? 765 : 375;
            
            return (
              <Image
                key={index}
                width={width}
                height={height}
                src={image}
                alt={`Gallery image ${index + 1}`}
                style={{ objectFit: 'cover' }}
              />
            );
          })}
        </div>

        <div className="tourSingleGrid__button">
          {images.length > 1 && (
            <div
              style={{ cursor: "pointer" }}
              className="js-gallery"
              data-gallery="gallery1"
            >
              {(images.length > 4) && (
                <span
                  onClick={() => setActiveLightBox(true)}
                  className="button -accent-1 py-10 px-20 rounded-200 bg-dark-1 lh-16 text-white"
                >
                  See all photos ({images.length})
                </span>
              )}
            </div>
          )}
        </div>
      </div>
      {images.length > 0 && (
        <ImageLightBox
          images={images}
          activeLightBox={activeLightBox}
          setActiveLightBox={setActiveLightBox}
          currentSlideIndex={currentSlideIndex}
          setCurrentSlideIndex={setCurrentSlideIndex}
        />
      )}
    </>
  );
}
