import React from "react";
import { motion } from "framer-motion";
import { PLANS_CONTENT } from "../constants";

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

export default function Pricing() {
  return (
    <motion.section
      id="pricing"
      initial="initial"
      animate="animate"
      variants={staggerChildren}
      className="py-20"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12 border-t border-neutral-800 pt-20"
          variants={fadeInUp}
        >
          <motion.h2
            className="text-3xl lg:text-5xl font-bold tracking-tighter bg-gradient-to-t from-neutral-50 via-neutral-300 to-neutral-600 bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            {PLANS_CONTENT.sectionTitle}
          </motion.h2>
          <motion.p className="mt-4 text-neutral-400" variants={fadeInUp}>
            {PLANS_CONTENT.sectionDescription}
          </motion.p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={staggerChildren}
        >
          {PLANS_CONTENT.plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`p-8 rounded-xl shadow-lg bg-neutral-950 ${
                plan.popular
                  ? "border border-blue-900/80"
                  : "border border-neutral-800"
              }`}
              variants={fadeInUp}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              {plan.popular && (
                <motion.div className="text-center mb-4" variants={fadeInUp}>
                  <span className="bg-blue-600 text-white text-xs py-1 px-3 rounded-full uppercase">
                    {PLANS_CONTENT.popularBadge}
                  </span>
                </motion.div>
              )}
              <motion.h3
                className="text-lg lg:text-xl mb-4 tracking-tighter uppercase"
                variants={fadeInUp}
              >
                {plan.name}
              </motion.h3>
              <motion.p className="text-neutral-400 mb-6" variants={fadeInUp}>
                {plan.description}
              </motion.p>
              <motion.div
                className="text-2xl lg-text-3xl font-medium mb-6"
                variants={fadeInUp}
              >
                {plan.price}
              </motion.div>
              <motion.ul
                className="mb-8 space-y-4 text-neutral-400"
                variants={fadeInUp}
              >
                {plan.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center"
                    variants={fadeInUp}
                  >
                    <span className="inline-block w-2 h-2 bg-neutral-600 rounded-full mr-2" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
              <motion.button
                className="w-full py-3 px-4 rounded-lg bg-blue-600 hover:bg-blue-500 transition duration-300 ease-in-out"
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {PLANS_CONTENT.ctaText}
              </motion.button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
