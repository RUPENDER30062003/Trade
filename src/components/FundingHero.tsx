"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const FundingHero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { scrollYProgress } = useScroll();

  // Simplified scroll animations
  const headingY = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const subtitleY = useTransform(scrollYProgress, [0, 0.25], [0, 60]);
  const buttonOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.6]);

  // Ensure component is mounted before accessing window
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="relative w-full min-h-[90vh] bg-[#050510] flex flex-col items-center justify-center py-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-purple-600/20 blur-[80px] z-0" />

      {/* Content container */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
        {/* Badge */}
        <div className="inline-block ">
          <div className="px-4 py-1.5 rounded-full border border-gray-700 bg-gray-800/50 backdrop-blur-sm text-gray-200 text-sm">
            Prop Firm
          </div>
        </div>

        {/* Heading */}
        <motion.h1
          style={{ y: headingY }}
          className="mb-4 text-4xl md:text-6xl font-medium tracking-tight text-white leading-tight"
        >
          Get Funded Up to <span className="text-purple-400">$10,000</span>
        </motion.h1>

        {/* Subtitle */}
        <br />
        <motion.p
          style={{ y: subtitleY }}
          className="mb-8 text-lg md:text-xl text-gray-300"
        >
          Prove your skills, get funded, and trade like a pro.
        </motion.p>

        {/* Call-to-action button */}
        <motion.div style={{ opacity: buttonOpacity }} className="mt-6">
            <br />
            <br />
          <a
            href="#"
            className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 text-white font-medium shadow-lg shadow-purple-600/30 hover:from-purple-500 hover:to-purple-600 transition-all duration-300"
          >
            Get Funded
            <svg
              className="ml-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default FundingHero;
