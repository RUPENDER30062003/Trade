"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "rgba(216, 180, 254, 0.9)",
      color: "#111",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.95
    }
  };

  // Gradient text animation
  const textGradientVariants = {
    animate: {
      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      transition: {
        duration: 8,
        ease: "linear",
        repeat: Infinity
      }
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-[#0A0A0A] text-white px-4 overflow-hidden">
      {/* Gradient background effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-50%] left-[-20%] w-[70%] h-[70%] rounded-full bg-purple-900/20 blur-[100px]" />
        <div className="absolute bottom-[-30%] right-[-10%] w-[60%] h-[60%] rounded-full bg-pink-900/20 blur-[100px]" />
      </div>

      {/* Content container with z-index to appear above gradient */}
      <div className="relative z-10 flex flex-col items-center max-w-6xl mx-auto">
        {/* "Our Process" Button */}
        <motion.div
          className="mb-12 sm:mb-16 md:mb-20"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.button
            className="px-6 py-2 text-sm font-semibold text-purple-300 border border-purple-300 rounded-full transition duration-300 backdrop-blur-sm"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => {
              // Smooth scroll to process section
              document.getElementById("process")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Our Process
          </motion.button>
        </motion.div>

        {/* Heading with animated gradient */}
        <motion.h1 
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-center leading-[1.2] md:leading-[1.1] tracking-tight px-4"
          initial="hidden"
          animate="visible"
          custom={0}
          variants={fadeInUp}
        >
          Become a{" "}
          <motion.span 
            className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-purple-600 bg-size-200"
            variants={textGradientVariants}
            animate="animate"
            style={{ 
              backgroundSize: "200% 200%",
            }}
          >
            Abcd Pro
          </motion.span>{" "}
          <br className="md:hidden" />
          in seconds
        </motion.h1>

        {/* Subtext with animated entry */}
        <motion.p 
          className="mt-6 text-lg md:text-xl text-gray-300 flex items-center gap-2"
          initial="hidden"
          animate="visible"
          custom={1}
          variants={fadeInUp}
        >
          <motion.span 
            role="img" 
            aria-label="Rocket"
            initial={{ rotate: -45 }}
            animate={{ rotate: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            🚀
          </motion.span>{" "}
          Sign up. Fund. Trade.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          className="mt-10 sm:mt-12 md:mt-16"
          initial="hidden"
          animate="visible"
          custom={2}
          variants={fadeInUp}
        >
          <motion.button
            className="px-8 py-3 text-base md:text-lg font-medium bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-lg hover:shadow-purple-500/30 transition duration-300 flex items-center gap-2"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Get Started Now
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </motion.button>
        </motion.div>

        {/* Optional: Scrolling indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: scrolled ? 0 : 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
            initial={{ y: 0 }}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <motion.div className="w-1 h-2 bg-purple-400 rounded-full mt-2" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;