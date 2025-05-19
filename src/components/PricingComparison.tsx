
"use client";

import React from "react";
import { motion } from "framer-motion";

type Plan = {
  name: string;
  description: string;
  initialCapital: string;
  spread: string;
  tradingFees: string;
  leverage: string;
  minLotSize: string;
  tradeExecution: string;
  openPosition: string;
  stopOut: string;
  marginCall: string;
  swapPolicy: string;
  riskExposure: string;
  assets: string;
};

type FeatureKey = keyof Plan;

const plans: Plan[] = [
  {
    name: "Abcd Vintage",
    description: "Perfect for balanced, all-level traders looking for consistency and solid growth.",
    initialCapital: "$10%",
    spread: "from 0.2 pips",
    tradingFees: "No Commission",
    leverage: "1:Unlimited",
    minLotSize: "0.01",
    tradeExecution: "200 trades during peak hours",
    openPosition: "Unlimited",
    stopOut: "0%",
    marginCall: "30%",
    swapPolicy: "0%",
    riskExposure: "Moderate",
    assets: "Forex, Crypto, Stocks, Commodities, Indices",
  },
  {
    name: "Abcd Cent",
    description: "Designed for beginners ready to step into the trading world with minimal risk.",
    initialCapital: "$10",
    spread: "from 0.3 pips",
    tradingFees: "Zero Commission",
    leverage: "1:Unlimited",
    minLotSize: "Same",
    tradeExecution: "200 trades during peak hours",
    openPosition: "Unlimited",
    stopOut: "0%",
    marginCall: "30%",
    swapPolicy: "0%",
    riskExposure: "Low",
    assets: "Forex, Crypto, Stocks, Commodities, Indices",
  },
  {
    name: "Abcd Pro",
    description: "Ideal for experienced traders seeking precision, speed, and high-stakes performance.",
    initialCapital: "$500",
    spread: "from 0.1 pips",
    tradingFees: "No Commission",
    leverage: "1:Unlimited",
    minLotSize: "Same",
    tradeExecution: "200 trades during peak hours",
    openPosition: "Unlimited",
    stopOut: "0%",
    marginCall: "30%",
    swapPolicy: "0%",
    riskExposure: "High",
    assets: "Forex, Crypto, Stocks, Commodities, Indices",
  },
];

const features: { name: string; key: FeatureKey }[] = [
  { name: "Who It's For", key: "description" },
  { name: "Initial Capital Requirement", key: "initialCapital" },
  { name: "Spread Advantage", key: "spread" },
  { name: "Trading Fees", key: "tradingFees" },
  { name: "Leverage Capacity", key: "leverage" },
  { name: "Minimum Lot Size", key: "minLotSize" },
  { name: "Trade Execution Limit", key: "tradeExecution" },
  { name: "Open Position Capacity", key: "openPosition" },
  { name: "Stop Out Threshold", key: "stopOut" },
  { name: "Margin Call Activation", key: "marginCall" },
  { name: "Swap Policy", key: "swapPolicy" },
  { name: "Risk Exposure", key: "riskExposure" },
  { name: "Asset Options", key: "assets" },
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const glowingBorderVariants = {
  animate: {
    boxShadow: [
      "0 0 4px 2px rgba(168, 85, 247, 0.3), 0 0 0px 0px rgba(168, 85, 247, 0)",
      "0 0 10px 5px rgba(168, 85, 247, 0.5), 0 0 3px 1px rgba(168, 85, 247, 0.3)",
      "0 0 4px 2px rgba(168, 85, 247, 0.3), 0 0 0px 0px rgba(168, 85, 247, 0)",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const borderPathVariants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: {
      pathLength: { duration: 2, ease: "easeInOut", repeat: Infinity },
      opacity: { duration: 0.5, ease: "easeInOut" },
    },
  },
};

const PricingComparison = () => {
  return (
    <div className="w-full bg-[#050507] text-white py-8 md:py-16">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center mb-12 relative">
        <div className="relative overflow-visible">
          <motion.div
            initial="hidden"
            animate="animate"
            variants={glowingBorderVariants}
            className="absolute inset-0 rounded-xl"
          >
            <svg className="absolute top-0 left-0 w-full h-full">
              <motion.rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                rx="12"
                fill="none"
                stroke="rgba(168, 85, 247, 0.7)"
                strokeWidth="2"
                initial="hidden"
                animate="visible"
                variants={borderPathVariants}
              />
            </svg>
          </motion.div>

          <div className="relative z-10 py-10 px-6 bg-[#111116] rounded-xl border border-purple-500/30">
            <motion.div
              initial="hidden"
              animate="visible"
              custom={0}
              variants={fadeIn}
              className="mb-8"
            >
              <button className="px-6 py-2.5 rounded-full backdrop-blur-sm border border-gray-700 hover:bg-opacity-30 transition duration-300">
                Compare Plans
              </button>
            </motion.div>

            <motion.h2
              initial="hidden"
              animate="visible"
              custom={1}
              variants={fadeIn}
              className="text-5xl md:text-6xl font-normal tracking-tight mb-4"
            >
              Compare your <span className="text-purple-400 font-medium">Abcd</span> plan
            </motion.h2>

            <motion.p
              initial="hidden"
              animate="visible"
              custom={2}
              variants={fadeIn}
              className="text-xl md:text-2xl text-gray-300 font-light"
            >
              Flexible Deposits for Every Trader
            </motion.p>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Features Column */}
          <div>
            <div className="h-28 flex items-end mb-6" />
            {features.map((feature, index) => (
              <motion.div
                key={feature.key}
                initial="hidden"
                animate="visible"
                custom={index + 3}
                variants={fadeIn}
                className="py-4 px-4 border-t border-gray-800 flex items-center h-20 text-gray-300"
              >
                {feature.name}
              </motion.div>
            ))}
          </div>

          {/* Plans */}
          {plans.map((plan, planIndex) => (
            <motion.div
              key={plan.name}
              initial="hidden"
              animate="visible"
              custom={planIndex + 3}
              variants={fadeIn}
              className="relative"
            >
              <div className="relative overflow-visible h-full">
                <motion.div
                  initial="hidden"
                  animate="animate"
                  variants={glowingBorderVariants}
                  className="absolute inset-0 rounded-xl"
                  style={{ height: "calc(100% + 40px)" }}
                >
                  <svg className="absolute top-0 left-0 w-full h-full">
                    <motion.rect
                      x="0"
                      y="0"
                      width="100%"
                      height="100%"
                      rx="12"
                      fill="none"
                      stroke="rgba(168, 85, 247, 0.7)"
                      strokeWidth="2"
                      initial="hidden"
                      animate="visible"
                      variants={borderPathVariants}
                    />
                  </svg>
                </motion.div>

                <div className="relative z-10 bg-[#111116] rounded-xl p-4 border border-purple-500/30">
                  <div className="bg-[#1a1a24] rounded-xl p-8 h-24 mb-6 flex flex-col justify-between">
                    <h3 className="text-2xl font-medium text-white">
                      {plan.name}
                    </h3>
                  </div>

                  {features.map((feature, index) => {
                    const value = plan[feature.key];
                    const isRisk = feature.key === "riskExposure";
                    const riskColor =
                      value === "Low"
                        ? "text-green-400"
                        : value === "Moderate"
                        ? "text-yellow-400"
                        : value === "High"
                        ? "text-red-400"
                        : "text-white";

                    return (
                      <motion.div
                        key={`${plan.name}-${feature.key}`}
                        initial="hidden"
                        animate="visible"
                        custom={index + planIndex + 4}
                        variants={fadeIn}
                        className={`py-4 px-4 border-t border-gray-800 h-20 flex items-center justify-center text-center ${
                          isRisk ? riskColor : "text-white"
                        } ${feature.key === "description" ? "text-sm" : "text-base"}`}
                      >
                        {value}
                      </motion.div>
                    );
                  })}

                  <div className="mt-4 flex justify-center mb-2">
                    <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 px-8 rounded-full transition duration-300">
                      Start Trading
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingComparison;
