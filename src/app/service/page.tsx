"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Lightbulb, ShieldCheck, Users, Banknote } from "lucide-react";

const ServiceCards = () => {
  const services = [
    {
      icon: <Lightbulb className="text-[#f99733] w-8 h-8" />,
      title: "Mentorship",
      description:
        "Expert guidance from academia to support and nurture innovative ideas.",
    },
    {
      icon: <ShieldCheck className="text-[#f99733] w-8 h-8" />,
      title: "IPR Assistance",
      description:
        "Assistance in Intellectual Property Rights, patents, and commercialization processes.",
    },
    {
      icon: <Users className="text-[#f99733] w-8 h-8" />,
      title: "Incubation & Network Building",
      description:
        "Provision of co-working spaces, laboratories, and infrastructure for startups. Building a professional network via industry connections.",
    },
    {
      icon: <Banknote className="text-[#f99733] w-8 h-8" />,
      title: "Funding Support",
      description: (
        <>
          YCCE, Nagpur has received approval for two schemes:
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>MSME Champion Scheme</li>
            <li>
              ASPIRE – Promotion of Innovation, Rural Industries &
              Entrepreneurship
            </li>
          </ul>
        </>
      ),
    },
  ];

  const equipmentImages = [
    "Picture1.jpg",
    "Picture2.jpg",
    "Picture3.jpg",
    "Picture4.jpg",
    "Picture5.jpg",
    "Picture6.png",
    "Picture7.jpg",
    "Picture8.jpg",
    "Picture9.jpg",
    "Picture10.jpg",
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-16 space-y-24">
      {/* Infrastructure Section */}
      <section className="text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-800 mb-10"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          variants={fadeIn}
        >
          Infrastructure
        </motion.h2>

        <motion.div
          className="text-gray-700 max-w-4xl mx-auto text-left space-y-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div>
            <h3 className="text-2xl font-semibold mb-2">FabLab</h3>
            <p>
              Yeshwantrao Chavan College of Engineering has established a
              Fabrication Laboratory under the ASPIRE scheme. It is open 24x7
              with tools for multiple disciplines.
            </p>
            <p className="mt-2">
              It supports student and faculty projects through specialized
              equipment.
            </p>

            <h4 className="text-xl font-bold mt-8 mb-4">
              FabLab Equipment Gallery
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {equipmentImages.map((img, i) => (
                <Image
                  key={i}
                  src={`/services/${img}`}
                  alt={`Equipment ${i + 1}`}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover rounded-lg shadow-sm hover:scale-105 transition-transform duration-300"
                />
              ))}
            </div>

            <ul className="list-disc list-inside mt-6 space-y-2">
              <li>
                <strong>Laser Cutter:</strong> For cutting critical shapes in
                non-metals.
              </li>
              <li>
                <strong>CNC Router:</strong> Automated cutting for complex
                prototypes.
              </li>
              <li>
                <strong>3D Scanner:</strong> Captures high-res 3D models.
              </li>
              <li>
                <strong>Double-nozzle 3D Printer:</strong> Multi-color/material
                prints.
              </li>
              <li>
                <strong>Single-nozzle 3D Printer:</strong> Consistent prototype
                development.
              </li>
              <li>
                <strong>Vinyl Cutter:</strong> For signs, banners, and promo
                material.
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">Co-working Spaces</h3>
            <p>
              Furnished spaces and meeting rooms support team collaboration.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-2">IT Infrastructure</h3>
            <p>
              Includes internet, power, and all utilities needed for daily
              operations.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section>
        <motion.h2
          className="text-4xl font-bold text-center text-gray-800 mb-14"
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          variants={fadeIn}
        >
          Services
        </motion.h2>

        <motion.div
          className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-5 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300"
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <div className="shrink-0">{service.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <div className="text-gray-700 text-sm">
                  {service.description}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default ServiceCards;
