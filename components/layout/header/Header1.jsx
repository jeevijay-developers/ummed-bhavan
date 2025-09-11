"use client";

import { useEffect, useState } from "react";
import HeaderSerch from "../components/HeaderSerch";
import Destinations from "../components/Destinations";
import Activities from "../components/Activities";
// import Currency from "../components/Currency";
import MobileMenu from "../components/MobileMenu";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
export default function Header1() {
  const router = useRouter();
  const pathname = usePathname();
  const pageNavigate = (pageName) => {
    router.push(pageName);
  };
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [addClass, setAddClass] = useState(false);

  // Desktop menu items - same as mobile menu
  const menuItems = [
    {
      title: "Facility",
      location: "/facility",
    },
    {
      title: "Events",
      location: "/events",
    },
    {
      title: "About",
      location: "/about",
    },
    {
      title: "Club Gallary",
      location: "/clubGallary",
    },
    {
      title: "Event Gallary",
      location: "/eventGallary",
    },
    {
      title: "Contact Us",
      location: "/contact",
    },
  ];

  // Add a class to the element when scrolled 50px
  const handleScroll = () => {
    if (window.scrollY >= 50) {
      setAddClass(true);
    } else {
      setAddClass(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`header -type-1 js-header ${addClass ? "-is-sticky" : ""}`}
      >
        <div className="header__container container">
          <div className="headerMobile__left">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="header__menuBtn js-menu-button"
            >
              <i className="icon-main-menu"></i>
            </button>
          </div>

          <div className="header__logo">
            <Link href="/" className="header__logo">
              <Image
                width="250"
                height="50"
                src="/img/pageHeader/logo.png"
                alt="logo icon"
                priority
              />
            </Link>

            {/* <div className="xl:d-none ml-30">
              <HeaderSerch />
            </div> */}
          </div>

          {/* Desktop Navigation Menu */}
          <div className="header__nav">
            <nav className="header__navigation">
              <ul className="d-flex items-center x-gap-30">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link 
                      href={item.location}
                      className={`header__nav-link ${
                        pathname === item.location ? 'is-active' : ''
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="header__right">
            
            {/* Mobile menu button - only visible on mobile */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="header__menuBtn ml-30 js-menu-button headerMobile__menuBtn"
            >
              <i className="icon-main-menu"></i>
            </button>
          </div>
        </div>
      </header>
      <MobileMenu
        setMobileMenuOpen={setMobileMenuOpen}
        mobileMenuOpen={mobileMenuOpen}
      />
    </>
  );
}
