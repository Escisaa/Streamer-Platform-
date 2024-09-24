import React from "react";
import { TESTIMONIALS_CONTENT } from "../constants";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="max-w-7xl mx-auto px-4 mt-20">
        <div className="text-center mb-12 border-t border-neutral-800">
          <h2 className="text-3xl lg:text-5xl mt-20 tracking-tighter bg-gradient-to-t from-neutral-50 via-neutral-300 to-neutral-600 bg-clip-text text-transparent">
            {TESTIMONIALS_CONTENT.sectionTitle}
          </h2>
          <p className="mt-4">{TESTIMONIALS_CONTENT.sectionDescription}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {TESTIMONIALS_CONTENT.reviews.map((review, index) => (
            <div
              key={index}
              className="mt-10 flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-neutral-900/50 border border-neutral-900 p-10"
            >
              <p className="mb-4 text-neutral-200">{review.review}</p>

              <div className="flex items-center mt-4">
                <img
                  src={review.image}
                  alt={review.alt}
                  className="w-12 h-12 rounded-full"
                />

                <div>
                  <p className="text-sm font-bold text-white">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
