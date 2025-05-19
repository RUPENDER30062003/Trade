

"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const steps = [
  { step: 1, title: "Register your account" },
  { step: 2, title: "Deposit your funds" },
  { step: 3, title: "KYC" },
  { step: 4, title: "Start Trading & Earn Profits" },
];

const VerticalTimeline = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const [lineHeight, setLineHeight] = useState(0);
  const [maxLineHeight, setMaxLineHeight] = useState(0);

  useEffect(() => {
    if (timelineRef.current) {
      setMaxLineHeight(timelineRef.current.offsetHeight);
    }

    const handleScroll = () => {
      if (!containerRef.current || !timelineRef.current) return;

      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      const scrollY = window.scrollY + window.innerHeight;
      const scrolledIn = scrollY - containerTop;

      const percentage = Math.min(scrolledIn / containerHeight, 1);
      const calculatedHeight = percentage * maxLineHeight;
      setLineHeight(Math.min(calculatedHeight, maxLineHeight));
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [maxLineHeight]);

  return (
    <main
      ref={containerRef}
      className="relative bg-[#0A0A0A] text-white py-20 min-h-screen overflow-hidden"
    >
      <div ref={timelineRef} className="relative">
        {/* Vertical Line */}
        <motion.div
          className="absolute top-0 left-1/2 w-[2px] bg-purple-500 transform -translate-x-1/2 z-0"
          initial={{ height: 0 }}
          animate={{ height: lineHeight }}
          transition={{ duration: 0.3 }}
        />

        <div className="flex flex-col gap-32 relative z-10">
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={step.step}
                className={`flex justify-between items-center w-full px-8 md:px-32`}
              >
                {isEven ? (
                  <>
                    <div className="w-1/2 text-right pr-6">
                      <p className="text-sm text-gray-400 mb-1">{`Step ${step.step}`}</p>
                      <h3 className="text-2xl font-semibold">{step.title}</h3>
                    </div>
                    <div className="w-1/2 pl-6">
                      <span className="text-4xl font-bold text-white opacity-20">
                        {`0${step.step}`}
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-1/2 pr-6 text-right">
                      <span className="text-4xl font-bold text-white opacity-20">
                        {`0${step.step}`}
                      </span>
                    </div>
                    <div className="w-1/2 pl-6">
                      <p className="text-sm text-gray-400 mb-1">{`Step ${step.step}`}</p>
                      <h3 className="text-2xl font-semibold">{step.title}</h3>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-20">
          <button className="group relative inline-flex items-center gap-2 rounded-full bg-purple-600 px-6 py-3 text-white font-medium hover:bg-purple-700 transition-all duration-300 shadow-md hover:shadow-lg">
            Open FREE Account
            <span className="inline-block transform transition-transform group-hover:translate-x-1">
              ↗
            </span>
          </button>
        </div>
      </div>
    </main>
  );
};

export default VerticalTimeline;
