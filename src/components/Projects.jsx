import React from 'react'
import project_1 from '../images/project_1.jpg'
import project_2 from '../images/project_2.jpg'
import project_3 from '../images/project_3.jpg'

export default function Projects() {

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
    ];
  return (
    <section className="py-12 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Our Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
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
    </section>
  );
}
