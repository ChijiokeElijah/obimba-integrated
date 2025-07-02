import React from 'react'
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";


export default function Review() {
    const reviews = [
      {
        id: 1,
        name: "Kalu Ndukwe U.",
        role: "Home owner",
        quote:
          "Their hard work, dedication, and expertise are truly impressive. Keep up the fantastic work! ",
      },
      {
        id: 2,
        name: "Okechi Nwafor",
        role: "Business Owner",
        quote:
          "From concept to completion, their craftsmanship and attention to detail blew me away.",
      },
      {
        id: 3,
        name: "Wilson Menthol",
        role: "Property Manager",
        quote:
          "Working with your team has been a game-changer for our brand. The professionalism and attention to detail were exceptional!",
      },
      {
        id: 4,
        name: "IK Nkele",
        role: "Home Owner",
        quote:
          "Their attention to detail and commitment to quality made our dream home a reality. Truly exceptional craftsmanship..",
      },
      {
        id: 5,
        name: "Alexis Ike",
        role: "Property Manager",
        quote:
          "From design to delivery, they handled our commercial project with precision, professionalism, and on-time execution.",
      },
      {
        id: 6,
        name: "Chibuike Ben",
        role: "Real Estate Developer",
        quote:
          "We were impressed by their transparency, communication, and the quality of the materials used. Highly recommended!",
      },
      {
        id: 7,
        name: "Tymgotel Sunny K.",
        role: "Estate manager",
        quote:
          "Their team turned our vision into a stunning residential property that exceeds expectations. A pleasure to work with.",
      },
      {
        id: 8,
        name: "Nnanna Echeme",
        role: "Business Owner",
        quote:
          "As a business owner, I appreciated how efficiently they managed our office building project. Everything was delivered ahead of schedule.",
      },
      {
        id: 9,
        name: "Comr. David Orji",
        role: "Home owner",
        quote:
          "They made the entire construction process smooth and stress-free. Their team is reliable, skilled, and courteous.",
      },
      {
        id: 10,
        name: "Iyke Gin",
        role: "Business Owner",
        quote:
          "What stood out was their ability to blend function and aesthetics—our commercial space is both beautiful and practical.",
      },
    ];
    const scrollRef = useRef(null);

    const scroll = (direction) => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: direction === "left" ? -300 : 300,
          behavior: "smooth",
        });
      }
    };
  return (
    <section className="bg-gray-100 py-16 px-6">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        What Our Clients Say
      </h2>

      <div className="relative">
        {/* Scroll Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white shadow rounded-full hover:bg-gray-200"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4 no-scrollbar"
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="min-w-[300px] max-w-[300px] bg-white rounded-lg shadow p-6 flex-shrink-0"
            >
           
              

              {/* Quote */}
              <p className="text-gray-600 mb-4">"{review.quote}"</p>

              {/* Client Info */}
              <div className="font-semibold text-gray-800">{review.name}</div>
              <div className="text-sm text-gray-500">{review.role}</div>
            </div>
          ))}{" "}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-white shadow rounded-full hover:bg-gray-200"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </section>
  );
}
