import React from 'react'
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Kalu from '../images/Kalu.jpg'

export default function Review() {
    const reviews = [
      {
        id: 1,
        name: "Kalu Ndukwe U.",
        role: "Homeowner",
        quote:
          "Your hard work, dedication, and expertise are truly impressive. Keep up the fantastic work! ",
    
      },
      {
        id: 2,
        name: "Tunde B.",
        role: "Business Owner",
        quote:
          "From concept to completion, their craftsmanship and attention to detail blew me away.",
        
      },
      {
        id: 3,
        name: "Ngozi E.",
        role: "Project Manager",
        quote:
          "Reliable, efficient, and innovative. Obimba Integrated delivers on every promise.",
        
      },
      {
        id: 4,
        name: "David K.",
        role: "Real Estate Developer",
        quote:
          "They handled our commercial complex flawlessly. Highly recommend them for any serious construction project.",
       
      },
      {
        id: 5,
        name: "David K.",
        role: "Real Estate Developer",
        quote:
          "They handled our commercial complex flawlessly. Highly recommend them for any serious construction project.",
      
      },
      {
        id: 6,
        name: "David K.",
        role: "Real Estate Developer",
        quote:
          "They handled our commercial complex flawlessly. Highly recommend them for any serious construction project.",
        
      },
      {
        id: 7,
        name: "David K.",
        role: "Real Estate Developer",
        quote:
          "They handled our commercial complex flawlessly. Highly recommend them for any serious construction project.",
       
      },
      {
        id: 8,
        name: "David K.",
        role: "Real Estate Developer",
        quote:
          "They handled our commercial complex flawlessly. Highly recommend them for any serious construction project.",
      
      },
      {
        id: 9,
        name: "David K.",
        role: "Real Estate Developer",
        quote:
          "They handled our commercial complex flawlessly. Highly recommend them for any serious construction project.",
        
      },
      {
        id: 10,
        name: "David K.",
        role: "Real Estate Developer",
        quote:
          "They handled our commercial complex flawlessly. Highly recommend them for any serious construction project.",
       
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
