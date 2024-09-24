import React from "react";
import { motion } from "framer-motion";
import { HOW_IT_WORKS_CONTENT } from "../constants";

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

export default function HowItWorks() {
  return (
    <motion.section
      id="works"
      className="py-20"
      initial="initial"
      animate="animate"
      variants={staggerChildren}
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
            {HOW_IT_WORKS_CONTENT.sectionTitle}
          </motion.h2>
          <motion.p
            className="mt-4 text-neutral-400 max-w-xl mx-auto"
            variants={fadeInUp}
          >
            {HOW_IT_WORKS_CONTENT.sectionDescription}
          </motion.p>
        </motion.div>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerChildren}
        >
          {HOW_IT_WORKS_CONTENT.steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-neutral-900 p-6 rounded-xl shadow-lg flex flex-col justify-between"
              variants={fadeInUp}
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <motion.h3
                  className="text-xl font-semibold mb-4 text-white"
                  variants={fadeInUp}
                >
                  {step.title}
                </motion.h3>
                <motion.p className="text-neutral-400 mb-6" variants={fadeInUp}>
                  {step.description}
                </motion.p>
              </div>
              <motion.div
                className="flex justify-center mb-6"
                variants={fadeInUp}
              >
                <motion.img
                  src={step.imageSrc}
                  alt={step.imageAlt}
                  className="rounded-lg w-full h-40 object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
              {step.users && (
                <motion.div
                  className="flex items-center justify-between mt-4"
                  variants={fadeInUp}
                >
                  <div className="flex -space-x-2">
                    {step.users.map((user, userIndex) => (
                      <motion.img
                        key={userIndex}
                        src={user}
                        alt={`User ${userIndex + 1}`}
                        className="w-8 h-8 rounded-full border-2 border-neutral-800"
                        whileHover={{ scale: 1.1, zIndex: 1 }}
                        transition={{ duration: 0.2 }}
                      />
                    ))}
                  </div>
                  <motion.button
                    className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition duration-300 ease-in-out"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Connect
                  </motion.button>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
