import React from "react";
import { motion } from "framer-motion";
import { HERO_CONTENT, BRAND_LOGOS } from "../constants";
import heroImage from "../assets/hero.jpg";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Hero() {
  return (
    <motion.section
      initial="initial"
      animate="animate"
      className="pt-28 lg:pt-36"
    >
      <motion.div
        variants={staggerChildren}
        className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center"
      >
        <motion.div
          variants={fadeInUp}
          className="bg-neutral-800 border-neutral-700 px-3 py-2 rounded-full text-xs"
        >
          {HERO_CONTENT.badgeText}
        </motion.div>
        <motion.h1
          variants={fadeInUp}
          className="text-5xl lg:text-8xl my-4 font-semibold tracking-tighter bg-gradient-to-b from-neutral-50 via-neutral-300 to-neutral-700 bg-clip-text text-transparent"
        >
          {HERO_CONTENT.mainHeading.split("\n").map((text, index) => (
            <motion.span key={index} variants={fadeInUp}>
              {text} <br />
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="mt-6 text-neutral-300 max-w-xl"
        >
          {HERO_CONTENT.subHeading}
        </motion.p>
        <motion.div variants={fadeInUp} className="mt-6 space-x-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white py-3 px-6 rounded-lg font-medium"
          >
            {HERO_CONTENT.callToAction.primary}
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="inline-block border-2 border-gray-500 text-white py-3 px-6 rounded-lg font-medium"
          >
            {HERO_CONTENT.callToAction.secondary}
          </motion.a>
        </motion.div>
        <motion.div variants={fadeInUp} className="py-10">
          <motion.p
            variants={fadeInUp}
            className="text-gray-400 text-center mb-8"
          >
            {HERO_CONTENT.trustedByText}
          </motion.p>
          <motion.div
            variants={staggerChildren}
            className="flex flex-wrap justify-center gap-8"
          >
            {BRAND_LOGOS.map((logo, index) => (
              <motion.img
                key={index}
                variants={fadeInUp}
                src={logo.src}
                alt={logo.alt}
                className="h-8"
              />
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          variants={fadeInUp}
          className="mt-12"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <motion.img
            src={heroImage}
            alt="Streamer Saas Interface"
            className="w-full h-auto rounded-3xl border border-neutral-800 mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
