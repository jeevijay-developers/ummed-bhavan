"use client";

import { tourDataThree } from "@/data/tours";
import React, { useState, useRef, useEffect } from "react";
import { fetchFacilities } from "@/util/server";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function TourList5() {
  const [sortOption, setSortOption] = useState("");
  const [ddActives, setDdActives] = useState(false);
  const dropDownContainer = useRef();
  const dropDownContainer2 = useRef();

  // State for dynamic facilities
  const [facilities, setFacilities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const router = useRouter();
  const [curentDD, setCurentDD] = useState("");

  // Fetch facilities from API
  const loadFacilities = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchFacilities(1, 9); // Fetch more facilities for display
      setFacilities(data.facilities || []);
    } catch (err) {
      console.error('Error fetching facilities:', err);
      setError('Failed to load facilities');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Load facilities on component mount
    loadFacilities();

    const handleClick = (event) => {
      if (
        dropDownContainer.current &&
        !dropDownContainer.current.contains(event.target)
      ) {
        setDdActives(false);
      }
      if (
        dropDownContainer2.current &&
        !dropDownContainer2.current.contains(event.target)
      ) {
        setCurentDD("");
      }
    };

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  const handleFacilityClick = (facility) => {
    // Navigate using facility slug or ID for dynamic routing
    router.push(`/facility/${facility.slug}`);
  };
  return (
    <section className="layout-pt-lg layout-pb-xl">
      <div className="container">
        {/* <div className="row  custom-dd-container justify-between items-center relative z-5">
          <div className="col-auto">
            <div
              ref={dropDownContainer2}
              className="row  custom-dd-container2 custom-dd-container x-gap-10 y-gap-10 items-center"
            >
              <div className="col-auto">
                <div
                  className={` dropdown -base -price js-dropdown js-form-dd  ${
                    curentDD == "priceFilter1" ? "is-active" : ""
                  } `}
                >
                  <div
                    onClick={() => {
                      setCurentDD((pre) =>
                        pre == "priceFilter1" ? "" : "priceFilter1",
                      );
                    }}
                    className="dropdown__button h-50 min-w-auto js-button"
                  >
                    <span className="js-title">Price</span>
                    <i className="icon-chevron-down ml-10"></i>
                  </div>

                  <div className="dropdown__menu px-30 py-30 shadow-1 border-1 js-">
                    <h5 className="text-18 fw-500">Filter Price</h5>
                    <div className="pt-20">
                      <RangeSlider />
                    </div>
                    <button className="button px-25 py-15 lh-12 -accent-1 text-accent-1 bg-accent-1-05 border-accent-1 mt-30">
                      Apply
                      <i className="icon-arrow-top-right text-16 ml-10"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-auto">
                <div
                  className={` dropdown -base -price js-dropdown js-form-dd  ${
                    curentDD == "durationFilter1" ? "is-active" : ""
                  } `}
                >
                  <div
                    onClick={() => {
                      setCurentDD((pre) =>
                        pre == "durationFilter1" ? " " : "durationFilter1",
                      );
                    }}
                    className="dropdown__button h-50 min-w-auto js-button"
                  >
                    <span className="js-title">Duration</span>
                    <i className="icon-chevron-down ml-10"></i>
                  </div>

                  <div className="dropdown__menu px-30 py-30 shadow-1 border-1 js-">
                    <h5 className="text-18 fw-500">Duration</h5>
                    <div className="pt-20">
                      <div className="d-flex flex-column y-gap-15">
                        {durations.map((elm, i) => (
                          <div key={i}>
                            <div className="d-flex items-center">
                              <div className="form-checkbox ">
                                <input type="checkbox" name="name" />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon">
                                    <Image
                                      width="10"
                                      height="8"
                                      src="/img/icons/check.svg"
                                      alt="icon"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="lh-11 ml-10">{elm}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button className="button px-25 py-15 lh-12 -accent-1 text-accent-1 bg-accent-1-05 border-accent-1 mt-20">
                      Apply
                      <i className="icon-arrow-top-right text-16 ml-10"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-auto">
                <div
                  className={` dropdown -base -price js-dropdown js-form-dd  ${
                    curentDD == "languageFilter1" ? "is-active" : ""
                  } `}
                >
                  <div
                    onClick={() => {
                      setCurentDD((pre) =>
                        pre == "languageFilter1" ? "" : "languageFilter1",
                      );
                    }}
                    className="dropdown__button h-50 min-w-auto js-button"
                  >
                    <span className="js-title">Languages</span>
                    <i className="icon-chevron-down ml-10"></i>
                  </div>

                  <div className="dropdown__menu px-30 py-30 shadow-1 border-1 js-">
                    <h5 className="text-18 fw-500">Language</h5>
                    <div className="pt-20">
                      <div className="d-flex flex-column y-gap-15">
                        {languages.map((elm, i) => (
                          <div key={i}>
                            <div className="d-flex items-center">
                              <div className="form-checkbox ">
                                <input type="checkbox" name="name" />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon">
                                    <Image
                                      width="10"
                                      height="8"
                                      src="/img/icons/check.svg"
                                      alt="icon"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="lh-11 ml-10">{elm}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button className="button px-25 py-15 lh-12 -accent-1 text-accent-1 bg-accent-1-05 border-accent-1 mt-20">
                      Apply
                      <i className="icon-arrow-top-right text-16 ml-10"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-auto">
                <div
                  className={` dropdown -base -price js-dropdown js-form-dd  ${
                    curentDD == "ratingFilter1" ? "is-active" : ""
                  } `}
                >
                  <div
                    onClick={() => {
                      setCurentDD((pre) =>
                        pre == "ratingFilter1" ? "" : "ratingFilter1",
                      );
                    }}
                    className="dropdown__button h-50 min-w-auto js-button"
                  >
                    <span className="js-title">Rating</span>
                    <i className="icon-chevron-down ml-10"></i>
                  </div>

                  <div className="dropdown__menu px-30 py-30 shadow-1 border-1 js-">
                    <h5 className="text-18 fw-500">Rating</h5>
                    <div className="pt-20">
                      <div className="d-flex flex-column y-gap-15">
                        {rating.map((elm, i) => (
                          <div key={i} className="d-flex">
                            <div className="form-checkbox">
                              <input type="checkbox" name="rating" />
                              <div className="form-checkbox__mark">
                                <div className="form-checkbox__icon">
                                  <Image
                                    width="10"
                                    height="8"
                                    src="/img/icons/check.svg"
                                    alt="icon"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="d-flex x-gap-5 ml-10">
                              <Stars star={elm} font={13} />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button className="button px-25 py-15 lh-12 -accent-1 text-accent-1 bg-accent-1-05 border-accent-1 mt-20">
                      Apply
                      <i className="icon-arrow-top-right text-16 ml-10"></i>
                    </button>
                  </div>
                </div>
              </div>

              <div className="col-auto">
                <div
                  className={` dropdown -base -price js-dropdown js-form-dd  ${
                    curentDD == "featuresFilter1" ? "is-active" : ""
                  } `}
                >
                  <div
                    onClick={() => {
                      setCurentDD((pre) =>
                        pre == "featuresFilter1" ? "" : "featuresFilter1",
                      );
                    }}
                    className="dropdown__button h-50 min-w-auto js-button"
                  >
                    <span className="js-title">Specials</span>
                    <i className="icon-chevron-down ml-10"></i>
                  </div>

                  <div className="dropdown__menu px-30 py-30 shadow-1 border-1 js-">
                    <h5 className="text-18 fw-500">Specials</h5>
                    <div className="pt-20">
                      <div className="d-flex flex-column y-gap-15">
                        {features.map((elm, i) => (
                          <div key={i}>
                            <div className="d-flex items-center">
                              <div className="form-checkbox ">
                                <input type="checkbox" name="name" />
                                <div className="form-checkbox__mark">
                                  <div className="form-checkbox__icon">
                                    <Image
                                      width="10"
                                      height="8"
                                      src="/img/icons/check.svg"
                                      alt="icon"
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="lh-11 ml-10">{elm}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button className="button px-25 py-15 lh-12 -accent-1 text-accent-1 bg-accent-1-05 border-accent-1 mt-20">
                      Apply
                      <i className="icon-arrow-top-right text-16 ml-10"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div ref={dropDownContainer} className="col-auto">
            <div
              className={`dropdown -type-2 js-dropdown js-form-dd ${
                ddActives ? "is-active" : ""
              } `}
            >
              <div
                className="dropdown__button js-button"
                onClick={() => setDdActives((pre) => !pre)}
              >
                <span>Sort by: </span>
                <span className="js-title">
                  {sortOption ? sortOption : "Featured"}
                </span>
                <i className="icon-chevron-down"></i>
              </div>

              <div className="dropdown__menu js-menu-items">
                {speedFeatures.map((elm, i) => (
                  <div
                    onClick={() => {
                      setSortOption((pre) => (pre == elm ? "" : elm));
                      setDdActives(false);
                    }}
                    key={i}
                    className="dropdown__item"
                    data-value="fast"
                  >
                    {elm}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div> */}

        <div className="row y-gap-30 pt-30">
          {loading ? (
            // Loading state
            <div className="col-12 text-center py-50">
              <div 
                className="mx-auto mb-20"
                style={{
                  width: '40px',
                  height: '40px',
                  border: '4px solid #f3f3f3',
                  borderTop: '4px solid #3498db',
                  borderRadius: '50%',
                  animation: 'spin 2s linear infinite'
                }}
              ></div>
              <p className="mt-20">Loading facilities...</p>
              <style jsx>{`
                @keyframes spin {
                  0% { transform: rotate(0deg); }
                  100% { transform: rotate(360deg); }
                }
              `}</style>
            </div>
          ) : error ? (
            // Error state
            <div className="col-12 text-center py-50">
              <p className="text-16 mb-10" style={{color: '#e74c3c'}}>{error}</p>
              <button 
                onClick={loadFacilities}
                className="button px-30 py-15 -accent-1 text-accent-1 bg-accent-1-05 border-accent-1"
              >
                Try Again
              </button>
            </div>
          ) : facilities.length === 0 ? (
            // Empty state
            <div className="col-12 text-center py-50">
              <p className="text-18 fw-500 mb-10">Sooner the facilities will be added</p>
              <p className="text-light-2">We're working on adding new facilities for you.</p>
            </div>
          ) : (
            // Dynamic facilities rendering
            facilities.map((facility, i) => (
              <div
                key={facility._id || i}
                className="col-lg-3 col-sm-6"
                style={{ cursor: "pointer" }}
                onClick={() => handleFacilityClick(facility)}
              >
                <div className="tourCard -type-1 py-10 px-10 border-1 rounded-12  -hover-shadow">
                  <div className="tourCard__header">
                    <div className="tourCard__image ratio ratio-28:20">
                      <Image
                        width={421}
                        height={301}
                        src={facility.images?.[0] || "/img/placeholder.jpg"}
                        alt={facility.name || "Facility"}
                        className="img-ratio rounded-12"
                      />
                    </div>
                  </div>

                  <div className="tourCard__content px-10 pt-10">
                    <h3 className="tourCard__title text-16 fw-500 mt-5">
                      <span>{facility.name}</span>
                    </h3>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* <div className="d-flex justify-center flex-column mt-60">
          <Pagination />

          <div className="text-14 text-center mt-20">
            Showing results 1-30 of 1,415
          </div>
        </div> */}
      </div>
    </section>
  );
}
