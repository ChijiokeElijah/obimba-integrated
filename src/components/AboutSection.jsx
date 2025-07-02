import CEO from "../images/CEO.jpg"
import { Link } from "react-scroll";

export default function AboutSection() {
  return (
    <section name="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-xl text-gray-800 font-bold text-center sm:text-3xl sm:text-left">
            About <br /> <strong> Obimba Integrated Services</strong>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Founded in 2010, Obimba Integrated Services has been at the
            forefront of Nigeria’s construction and design industry. From
            residential villas to commercial high-rises, we blend time‑tested
            craftsmanship with modern innovation to deliver spaces that stand
            the test of time.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our success is built on three pillars:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>
              <strong>Integrity:</strong> Transparent communication at every
              stage.
            </li>
            <li>
              <strong>Quality:</strong> Meticulous attention to detail, from
              blueprint to build.
            </li>
            <li>
              <strong>Innovation:</strong> Sustainable solutions powered by the
              latest technology.
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed">
            With a team of seasoned architects, engineers, and project managers,
            we turn your vision into reality—on time, on budget, and beyond
            expectations.
          </p>
          <Link to="contact">
            <p className="inline-block bg-red-700 text-white px-6 py-3 rounded-lg hover:bg-red-800 transition">
              Get in Touch
            </p>
          </Link>
        </div>

        {/* Illustration/Image */}
        <div className="flex-1">
          <img
            src={CEO}
            alt="Our CEO"
            className="w-full h-40% object-cover md:h-40% rounded-lg shadow-lg"
          />
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-2xl">Engr. Obinna Mba</h2>
            <h3>CEO, Obimba Integrated Services</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
