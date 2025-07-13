"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const incubationTypes = [
  {
    title: "Pre-Incubation",
    description: `
This initiative is tailored for students and aspiring entrepreneurs who are:
• Eager to delve into the realm of entrepreneurship and assess the viability of their innovative concepts.
• At the nascent stages of validating both the technical and business aspects of their entrepreneurial ideas.

The program offers an extensive curriculum encompassing foundational training, initial-level business and technological validation mentorship, and opportunities to engage with a network of industry professionals. These resources are designed to empower entrepreneurs to refine their ideas and lay a solid foundation for future success.
    `,
    image: "/dashboard/pre.jpg",
  },
  {
    title: "Physical Incubation",
    description: `
This selective and intensive initiative is meticulously designed to propel early-stage startups toward tangible success.

Participating companies will receive:
• Structured training and targeted mentoring, tailored to startup needs
• Access to service providers, funding support, and hands-on guidance
• Global connections to co-founders, mentors, and investors
The program emphasizes business innovation by focusing on thematic bundling, convergence of industries, and disruptive business models. It transforms innovative ideas into scalable and sustainable ventures.
    `,
    image: "/dashboard/physical.jpg",
  },
  {
    title: "Virtual Incubation",
    description: `
This program is designed for entrepreneurs who don’t require physical facilities but still need support.

Entrepreneurs will receive:
• Business Opportunity Validation Mentoring
• Access to Online Training Programs (strategy, operations, marketing)
• Limited Access to Networking Events (virtual)

This allows the incubator to support a broader range of innovators across sectors while maintaining a robust pipeline of potential incubatees.
    `,
    image: "/dashboard/virtual.jpg",
  },
];

export default function IncubationTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    startAutoRotate();
    return () => stopAutoRotate();
  }, [activeIndex]);

  const startAutoRotate = () => {
    stopAutoRotate();
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % incubationTypes.length);
    }, 8000); // 8 seconds for reading
  };

  const stopAutoRotate = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const active = incubationTypes[activeIndex];

  return (
    <div
      className="w-full max-w-6xl mx-auto mt-10 bg-black text-white rounded-lg overflow-hidden shadow-lg"
      onMouseEnter={stopAutoRotate}
      onMouseLeave={startAutoRotate}
    >
      {/* Image */}
      <div className="w-full h-[300px] relative">
        <Image
          src={active.image}
          alt={active.title}
          layout="fill"
          objectFit="cover"
          className="grayscale object-cover"
        />
        <div className="absolute bottom-0 left-0 w-full bg-black/60 p-4">
          <h2 className="text-xl font-bold">{active.title}</h2>
        </div>
      </div>

      {/* Description */}
      <div className="p-6 bg-black text-sm md:text-base space-y-4 leading-relaxed">
        {active.description
          .trim()
          .split("\n")
          .map((line, idx) =>
            line.trim().startsWith("•") ? (
              <p
                key={idx}
                className="pl-4 before:content-['•'] before:mr-2 before:text-white text-gray-300"
              >
                {line.trim().substring(1).trim()}
              </p>
            ) : (
              line.trim() && (
                <p key={idx} className="text-gray-400">
                  {line.trim()}
                </p>
              )
            )
          )}
      </div>

      {/* Tab Titles */}
      <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-gray-700 bg-black">
        {incubationTypes.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`text-left transition-all duration-300 text-sm sm:text-base ${
              index === activeIndex
                ? "text-white font-semibold border-b-2 border-white"
                : "text-gray-500 hover:text-white"
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
}
