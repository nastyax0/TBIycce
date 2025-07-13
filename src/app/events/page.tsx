"use client";
import React from "react";
import Image from "next/image"; // if you're using Next.js
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";

const KeyEventsTimeline = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const events = [
    {
      id: 1,
      title: "Awareness session on entrepreneurship",
      date: "30th July",
    },
    { id: 2, title: "ABCD of Entrepreneurship", date: "8th August" },
    { id: 3, title: "3-Day Ideation Bootcamp", date: "8th–10th August" },
    {
      id: 4,
      title: "Mentoring Session for Ideation Bootcamp Students",
      date: "9th August",
    },
    { id: 5, title: "MGI Ideathon", date: "22nd October" },
    { id: 6, title: "MGI Ideathon Finale", date: "16th January" },
    { id: 7, title: "One-Day Bootcamp: Idea to MVP", date: "10th March" },
    {
      id: 8,
      title: "Interaction with successful entrepreneur",
      date: "9th April",
    },
  ];

  const eventGallery = [
    {
      title: "MGI Ideathon",
      images: [
        "/events/Picture1.jpg",
        "/events/Picture2.jpg",
        "/events/Picture3.jpg",
        "/events/Picture4.jpg",
      ],
    },
    {
      title: "Bootcamp For Startups",
      images: [
        "/events/Picture5.jpg",
        "/events/Picture6.jpg",
        "/events/Picture12.jpg",
        "/events/Picture7.jpg",
      ],
    },
    {
      title: "Innovation Design and Entrepreneurship Bootcamp",
      images: [
        "/events/Picture8.jpg",
        "/events/Picture9.jpg",
        "/events/Picture10.jpg",
        "/events/Picture11.jpg",
      ],
    },
  ];

  return (
    <div className="px-6 py-10 space-y-24 max-w-7xl mx-auto">
      {/* Upcoming Events */}
      <section
        id="upcoming"
        className="text-center space-y-6"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-6">
          Upcoming Event
        </h2>

        <div
          className="flex flex-col md:flex-row items-center justify-between gap-10 bg-gray-100 p-10 md:p-12 lg:p-16 max-w-6xl mx-auto"
          data-aos="zoom-in"
        >
          <div className="flex-1 text-left space-y-4">
            <h3 className="text-3xl font-bold text-gray-700">
              Inter-Institutional Ideathon
            </h3>
            <ul className="list-disc list-inside text-base text-base-content space-y-1">
              <li>One Idea per Section</li>
              <li>Exciting Cash Prizes</li>
              <li>Registration Free</li>
            </ul>
            <p className="font-semibold text-red-600 text-lg">
              Best Idea Award recognition to the winning section!!
            </p>
          </div>

          <div className="flex-shrink-0 w-40 h-40 lg:w-52 lg:h-52 relative">
            <Image
              src="/events/logo.png"
              alt="Ideathon Illustration"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section id="past" className="space-y-12" data-aos="fade-up">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-primary">Past Events</h2>
          <p className="text-xl text-base-content mt-2">Key Events of 2024</p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="md:hidden border-l-4 border-primary pl-6 space-y-10">
            {events.map((event) => (
              <div key={event.id} className="relative" data-aos="fade-right">
                <div className="absolute -left-5 top-0 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">
                  {event.id}
                </div>
                <h3 className="text-lg  font-semibold text-base-content">
                  {event.title}
                </h3>
                <p className="text-sm  text-gray-500">{event.date}</p>
              </div>
            ))}
          </div>

          <div className="hidden md:grid grid-cols-8 gap-4 relative border-t-4 border-primary pt-14">
            {events.map((event) => (
              <div
                key={event.id}
                className="relative flex flex-col items-center justify-between text-center"
                data-aos="fade-up"
              >
                <div className="absolute -top-5 bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                  {event.id}
                </div>
                <div className="mt-8 space-y-1">
                  <h3 className="text-sm font-semibold text-base-content leading-snug">
                    {event.title}
                  </h3>
                  <p className="text-xs text-gray-500">{event.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Event Highlights */}
        <div className="text-center" data-aos="fade-up">
          <h3 className="text-3xl font-bold text-primary mb-10">
            Event Highlights
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {eventGallery.map((event, index) => (
            <div
              key={index}
              className="bg-base-100 rounded-2xl overflow-hidden shadow-xl"
              data-aos="zoom-in-up"
            >
              <div className="grid grid-cols-2 gap-2 p-2">
                {event.images.map((image, imgIndex) => (
                  <div key={imgIndex} className="overflow-hidden rounded-xl">
                    <Image
                      src={image}
                      alt={`${event.title} - Image ${imgIndex + 1}`}
                      width={300}
                      height={150}
                      className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
              <div className="py-4">
                <h4 className="text-lg font-semibold text-center text-base-content">
                  {event.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default KeyEventsTimeline;
