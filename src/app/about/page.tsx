"use client";

import { motion } from "framer-motion";
import { GraduationCap, Building2, Layers, Briefcase } from "lucide-react";
import { Lightbulb, Target, Rocket } from "lucide-react";

const visionPoints = [
  {
    icon: <Lightbulb className="w-6 h-6 text-[#f99733]" />,
    title: "Innovation Ecosystem",
    description:
      "Build a vibrant and sustainable ecosystem that fosters innovation, creativity, and knowledge-sharing among entrepreneurs, researchers, and industry experts.",
  },
  {
    icon: <Target className="w-6 h-6 text-[#f99733]" />,
    title: "New Ventures",
    description:
      "Encourage the creation of scalable, technology-driven ventures by providing resources, mentorship, and access to cutting-edge research and infrastructure.",
  },
  {
    icon: <Rocket className="w-6 h-6 text-[#f99733]" />,
    title: "Value-Added Jobs",
    description:
      "Drive economic growth by enabling startups to generate high-impact, value-added employment opportunities across diverse technological domains.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};
const objectives = [
  "Creation of technology based new enterprises",
  "Creating value added jobs & services",
  "Facilitating transfer of technology",
  "Fostering the entrepreneurial spirit",
  "Speedy commercialisation of R&D output",
  "Specialised services to existing SMEs",
];

export default function AboutPage() {
  const content = [
    {
      icon: <GraduationCap className="w-8 h-8 text-[#f99733]" />,
      title: "Exceptional Faculty",
      description:
        "Our faculty comprises highly qualified and experienced professionals, passionate about nurturing young minds.",
    },
    {
      icon: <Building2 className="w-8 h-8 text-[#f99733]" />,
      title: "Industry Collaborations",
      description:
        "We actively collaborate with leading companies to provide students with real-world exposure and internship opportunities.",
    },
    {
      icon: <Layers className="w-8 h-8 text-[#f99733]" />,
      title: "Diverse B.Tech Programs",
      description:
        "We offer a comprehensive range of B.Tech programs in various specializations, equipping students to excel in chosen engineering fields.",
    },
    {
      icon: <Briefcase className="w-8 h-8 text-[#f99733]" />,
      title: "Excellent Placements",
      description:
        "YCCE boasts a stellar placement record, consistently securing placements for a significant portion of our graduating class in top-tier engineering firms.",
    },
  ];

  return (
    <section className="bg-white text-gray-800 py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4">ABOUT YCCE</h2>
        <p className="text-lg text-center mb-12">
          Yeshwantrao Chavan College of Engineering (YCCE): Shaping Futures in
          Engineering
        </p>

        <div className="grid md:grid-cols-2 gap-10">
          {content.map((item, i) => (
            <motion.div
              key={i}
              className="bg-[#f9f9f9] p-6 rounded-xl shadow-lg"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={cardVariants}
              custom={i}
            >
              <div className="flex items-center gap-4 mb-3">
                {item.icon}
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
              <p className="text-gray-700">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <section className="bg-gray-100 py-12 px-6 mt-10">
        <p className="text-lg text-gray-700 leading-relaxed">
          YCCE TBI Foundation is a Private incorporated on 30 October 2018 for
          technology business incubation. It is classified as non-govt section 8
          company and is registered at Registrar of Companies, Mumbai. YCCE TBI
          Foundation’s Corporate Identification Number is (CIN)
          U93090MH2018NPL316594 and its registration number is 316594.
        </p>
      </section>

      <section className="bg-white text-gray-800 py-20 px-6 md:px-16">
        <h2 className="text-5xl font-bold text-center mb-4">THE TBI</h2>
        <div className="w-full max-w-4xl h-[1.5px] bg-gray-300 mx-auto mb-12" />
        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            OUR MISSION
          </h2>
          <p className="text-lg text-gray-600">
            Our mission is to promote technology-based startups and
            entrepreneurship
          </p>
        </motion.div>

        {/* Vision */}
        <div className="text-center max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            OUR VISION
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {visionPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-[#f9f9f9] rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  {point.icon}
                  <h3 className="text-lg font-semibold">{point.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="text-center mt-20">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
          Objectives of YCCE TBI Foundation
        </h2>
        <hr className="w-32 border-t border-gray-300 mx-auto mb-8" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left text-gray-700 text-base"
        >
          {objectives.map((obj, i) => (
            <div key={i} className="flex items-start gap-2">
              <span className="text-lg">•</span>
              <span>{obj}</span>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="text-center mt-24">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-2">
          Meet the Team
        </h2>
        <hr className="w-24 border-t border-gray-300 mx-auto mb-10" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-4">
          {[
            {
              name: " Dr. Sandip S Khedkar",
              role: "Director",
              photo: "/teams/Picture1.png",
            },
            {
              name: " Prof. Prasad Hatwalne",
              role: "Incubation Manager",
              photo: "/teams/Picture2.png",
            },
            {
              name: "Dr. Shweta Dhondse",
              role: "Public Relation Officer",
              photo: "/teams/Picture3.png",
            },
            {
              name: " Prof. Surendra Nagpure",
              role: "FabLab Incharge",
              photo: "/teams/Picture4.png",
            },
          ].map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex flex-col items-center"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-42 h-42 rounded-full object-cover mb-4 shadow-md ml-10 mr-10"
              />
              <h3 className="text-lg font-medium text-gray-800">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
