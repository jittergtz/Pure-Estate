// components/Navigation.tsx
"use client";

import { X } from "lucide-react";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

const NavLinks = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Properties",
    link: "/properties",
  },
  {
    name: "Services",
    link: "/services",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Contact",
    link: "/contact",
  },
];


const NavigationHome = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };



  return (
    <>
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all  ${
        isScrolled ? "bg-black/30  backdrop-blur-md" : ""
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-light text-white"
          >
            Pure<span className="font-serif italic">Estate</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-8 md:flex text-white/80">
            {NavLinks.map((item) => (
              <motion.a
                key={item.name}
                href={item.link}
                className="text-sm transition-colors "
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`hidden border  px-4 py-2 text-sm  transition-colors hover:bg-white text-white hover:text-black md:block
            
            `}
          >
            Schedule Viewing
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="text-white md:hidden"
            onClick={toggleMobileMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </motion.button>
        </div>
      </div>


    </motion.header>

          {/* Mobile Menu Modal */}
          {isMobileMenuOpen && (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-60">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                }}
                className="fixed top-0 right-0 h-full w-full backdrop-blur-md p-6 shadow-lg "
              >
                <button
                  className="mb-4 w-full  flex justify-end text-gray-400"
                  onClick={toggleMobileMenu}
                >
                   <X/>
                </button>
                <nav className="space-y-9 px-10 mt-16">
                  {NavLinks.map((item) => (
                    <a
                      key={item.name}
                      href={item.link}
                      className="block text-lg  font-medium text-gray-300 hover:text-gray-50"
                      onClick={toggleMobileMenu}
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
              </motion.div>
            </div>
          )}
          </>
  );
};

export default NavigationHome;




export const NavigationProperties = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
    <>
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed left-0 right-0 top-0 z-50 transition-all  ${
        isScrolled ? "bg-white text-black/80  backdrop-blur-md" : "hover:text-white text-white/80"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-light "
          >
            Pure<span className="font-serif italic">Estate</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-8 md:flex">
            {NavLinks.map((item) => (
              <motion.a
                key={item.name}
                href={item.link}
                className="text-sm  "
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`hidden border  px-4 py-2 text-sm  transition-colors hover:bg-white hover:text-black md:block
              ${ isScrolled ? "border-black hover:bg-black hover:text-white text-black" : "border-white text-white"}
            `}
          >
            Schedule Viewing
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className={` md:hidden
                 ${ isScrolled ? " text-black " : "text-gray-200"}
            `}
            onClick={toggleMobileMenu}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </motion.button>
        </div>
      </div>


    </motion.header>

          {/* Mobile Menu Modal */}
          {isMobileMenuOpen && (
            <div className="fixed inset-0 z-50 bg-white bg-opacity-60">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                }}
                className="fixed top-0 right-0 h-full w-full backdrop-blur-md p-6 shadow-lg "
              >
                <button
                  className="mb-4 w-full  flex justify-end text-neutral-800"
                  onClick={toggleMobileMenu}
                >
                   <X/>
                </button>
                <nav className="space-y-9 px-10 mt-16">
                  {NavLinks.map((item) => (
                    <a
                      key={item.name}
                      href={item.link}
                      className="block text-lg  font-medium text-neutral-800"
                      onClick={toggleMobileMenu}
                    >
                      {item.name}
                    </a>
                  ))}
                </nav>
              </motion.div>
            </div>
          )}
          </>
  );
};

