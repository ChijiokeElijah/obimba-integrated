import React from 'react'
import { useState } from "react";
import project_1 from "../images/project_1.jpg";
import project_2 from "../images/project_2.jpg";
import project_3 from "../images/project_3.jpg";
import project_4 from "../images/project_4.jpg";
import project_5 from "../images/project_5.jpg";
import project_6 from "../images/project_6.jpg";
import project_7 from "../images/project_7.jpg";
import project_8 from "../images/project_8.jpg";
import project_9 from "../images/project_9.jpg";
import project_10 from "../images/project_10.jpg";
import project_11 from "../images/project_11.jpg";
import project_12 from "../images/project_12.jpg";
import project_13 from "../images/project_13.jpg";
import project_14 from "../images/project_14.jpg";
import project_15 from "../images/project_15.jpg";
import project_16 from "../images/project_16.jpg";
import project_17 from "../images/project_17.jpg";
import project_18 from "../images/project_18.jpg";
import project_19 from "../images/project_19.jpg";
import project_20 from "../images/project_20.jpg";
import project_21 from "../images/project_21.jpg";
import project_22 from "../images/project_22.jpg";
import project_23 from "../images/project_23.jpg";
import project_24 from "../images/project_24.jpg";
import project_25 from "../images/project_25.jpg";

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [visibleCount, setVisibleCount] = useState(3);

  const showMore = () => {
    setVisibleCount((prev) => prev + 3); // load 3 more on each click
  };

  const projects = [
    {
      id: 1,
      title: "Luxury Apartment",
      description: "A premium high-rise built with precision.",
      image: project_1,
    },
    {
      id: 2,
      title: "Modern Office Block",
      description: "Sustainable design for the future of work.",
      image: project_2,
    },
    {
      id: 3,
      title: "Custom Villa",
      description: "Tailored residential masterpiece.",
      image: project_3,
    },
    {
      id: 4,
      title: "Custom Villa",
      description: "Tailored residential masterpiece.",
      image: project_4,
    },
    {
      id: 5,
      title: "Custom Villa",
      description: "Tailored residential masterpiece.",
      image: project_5,
    },
    {
      id: 6,
      title: "Custom Villa",
      description: "Tailored residential masterpiece.",
      image: project_6,
    },
    {
      id: 7,
      title: "Custom Villa",
      description: "Tailored residential masterpiece.",
      image: project_7,
    },
    {
      id: 8,
      title: "Custom Villa",
      description: "Tailored residential masterpiece.",
      image: project_8,
    },
    {
      id: 9,
      title: "Custom Villa",
      description: "Tailored residential masterpiece.",
      image: project_9,
    },
    {
      id: 10,
      title: "Luxury Apartment",
      description: "A premium high-rise built with precision.",
      image: project_10,
    },
    {
      id: 11,
      title: "Modern Office Block",
      description: "Sustainable design for the future of work.",
      image: project_11,
    },
    {
      id: 12,
      title: "Custom Villa",
      description: "Tailored residential masterpiece.",
      image: project_12,
    },
    {
      id: 13,
      title: "Custom Villa",
      description: "Tailored residential masterpiece.",
      image: project_13,
    },
    {
      id: 14,
      title: "Custom Villa",
      description: "Tailored residential masterpiece.",
      image: project_14,
    },
    {
      id: 15,
      title: "Custom Villa",
      description: "Tailored residential masterpiece.",
      image: project_15,
    },
    {
      id: 16,
      title: "Custom Villa",
      description: "Tailored residential masterpiece.",
      image: project_16,
    },
    {
      id: 17,
      title: "Custom Villa",
      description: "Tailored residential masterpiece.",
      image: project_17,
    },
    {
      id: 18,
      title: "Custom Villa",
      description: "Tailored residential masterpiece.",
      image: project_18,
    },
    {
      id: 20,
      title: "Luxury Apartment",
      description: "A premium high-rise built with precision.",
      image: project_20,
    },
    {
      id: 21,
      title: "Modern Office Block",
      description: "Sustainable design for the future of work.",
      image: project_21,
    },
    {
      id: 22,
      title: "Custom Villa",
      description: "Tailored residential masterpiece.",
      image: project_22,
    },
    {
      id: 23,
      title: "Custom Villa",
      description: "Tailored residential masterpiece.",
      image: project_23,
    },
    {
      id: 24,
      title: "Custom Villa",
      description: "Tailored residential masterpiece.",
      image: project_24,
    },
    {
      id: 25,
      title: "Custom Villa",
      description: "Tailored residential masterpiece.",
      image: project_25,
    },
    {
      id: 19,
      title: "Custom Villa",
      description: "Tailored residential masterpiece.",
      image: project_19,
    },
  ];
  const hasMore = visibleCount < projects.length;
  return (
    <section className="py-12 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Our Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.slice(0, visibleCount).map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
            onClick={() => setSelectedImage(project.image)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {project.title}
              </h3>
              <p className="mt-2 text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Full Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full px-4">
            <img
              src={selectedImage}
              alt="Full view"
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
            <button
              className="absolute top-2 right-2 text-white text-2xl font-bold"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* Show More Button */}
      {hasMore && (
        <div className="flex justify-center mt-10">
          <button
            onClick={showMore}
            className="bg-red-700 text-white px-6 py-3 rounded hover:bg-red-800 transition"
          >
            See More
          </button>
        </div>
      )}
    </section>
  );
}
