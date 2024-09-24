import React from "react";
import { motion } from "framer-motion";
import { KEY_FEATURES_CONTENT } from "../constants";

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

export default function KeyFeatures() {
  return (
    <motion.section
      initial="initial"
      animate="animate"
      variants={staggerChildren}
      className="py-20"
    >
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-12 border-t border-neutral-800 pt-20"
          variants={fadeInUp}
        >
          <motion.h2
            className="text-3xl lg:text-5xl font-bold tracking-tighter bg-gradient-to-t from-neutral-50 via-neutral-300 to-neutral-600 bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            {KEY_FEATURES_CONTENT.sectionTitle}
          </motion.h2>
          <motion.p className="mt-4 text-neutral-400" variants={fadeInUp}>
            {KEY_FEATURES_CONTENT.sectionDescription}
          </motion.p>
        </motion.div>
        <motion.div
          className="flex flex-wrap justify-between"
          variants={staggerChildren}
        >
          {KEY_FEATURES_CONTENT.features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="flex flex-col items-center text-center w-full md:w-1/2 lg:w-1/3 p-6"
              variants={fadeInUp}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-blue-900"
              >
                {feature.icon}
              </motion.div>
              <motion.h3
                className="text-xl font-semibold mt-4"
                variants={fadeInUp}
              >
                {feature.title}
              </motion.h3>
              <motion.p className="mt-2 text-neutral-400" variants={fadeInUp}>
                {feature.description}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
