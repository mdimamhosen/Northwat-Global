import React from "react";
import bgimage from "../assets/StudentSpeak.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay"; // Import the Autoplay CSS
import { Pagination, Autoplay } from "swiper/modules"; // Correct import from swiper/modules
import { FaQuoteLeft } from "react-icons/fa";

const topstudents = [
  {
    id: 1,
    name: "John Doe",
    title: "Web Developer",
    image:
      "https://images.unsplash.com/photo-1440589473619-3cde28941638?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    university: "Harvard University",
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Frontend Developer",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    university: "Stanford University",
  },
  {
    id: 3,
    name: "Alice Johnson",
    title: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    university: "MIT",
  },
  {
    id: 4,
    name: "Michael Brown",
    title: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    university: "University of California",
  },
  {
    id: 5,
    name: "Emily Davis",
    title: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1440589473619-3cde28941638?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    university: "University of Michigan",
  },
  {
    id: 6,
    name: "Chris Wilson",
    title: "Backend Developer",
    image:
      "https://images.unsplash.com/photo-1484863137850-59afcfe05386?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    university: "University of Illinois",
  },
  {
    id: 7,
    name: "Natalie Lewis",
    title: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    university: "University of Washington",
  },
  {
    id: 8,
    name: "David Martinez",
    title: "DevOps Engineer",
    image:
      "https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    university: "California Institute",
  },
  {
    id: 9,
    name: "Sophia Moore",
    title: "AI Researcher",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    university: "University of Toronto",
  },
  {
    id: 10,
    name: "Daniel Taylor",
    title: "Cybersecurity Analyst",
    image:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    university: "University of Sydney",
  },
];

const TopStudents = () => {
  return (
    <div>
      <div
        className="mx-auto bg-cover bg-center text-center py-20 mt-28 -mb-10"
        style={{ backgroundImage: `url(${bgimage})` }}
      >
        <h1 className="text-4xl font-bold mb-4">
          <span className="text-white">Student's </span>
          <span className="text-[#F6941E]">Speak</span>
        </h1>
        <p className="text-lg text-white px-4">
          Discover what our top students have to say about their experiences.
        </p>
      </div>

      <div className="w-11/12 mx-auto -mt-16">
        <div className="mx-auto w-11/12 pb-20">
          <div className="">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              loop={true}
              autoplay={{ delay: 2000 }}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
            >
              {topstudents.map((student) => (
                <SwiperSlide key={student.id}>
                  <div className="p-6 shadow-lg rounded-lg bg-white flex flex-col justify-between h-full text-left">
                    <div className="flex flex-col gap-3 items-start">
                      <img
                        src={student.image || "https://via.placeholder.com/150"}
                        alt={student.name}
                        className="   w-full h-40 object-cover"
                      />
                      <div className="flex flex-col text-center w-full">
                        <h3 className="text-lg font-semibold text-gray-800">
                          {student.name}
                        </h3>
                        <p className="text-sm text-gray-500">{student.title}</p>
                        <p className="my-3 text-gray-600 flex-grow">
                          {student.university}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopStudents;
