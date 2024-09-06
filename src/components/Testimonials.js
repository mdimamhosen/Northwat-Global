import React from "react";
import Title from "../utils/Title";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

// Sample 30 reviews
const reviews = [
  {
    id: 1,
    name: "John Doe",
    title: "Web Developer",
    image:
      "https://images.unsplash.com/photo-1440589473619-3cde28941638?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    revi: "This course greatly improved my web development skills. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Frontend Developer",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    revi: "Learned React and Tailwind, greatly boosted my frontend confidence!",
    rating: 5,
  },
  {
    id: 3,
    name: "Alice Johnson",
    title: "Software Engineer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    revi: "Great course, practical projects improved my software engineering portfolio!",
    rating: 5,
  },
  {
    id: 4,
    name: "Michael Brown",
    title: "Backend Developer",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    revi: "Backend concepts well-explained, hands-on approach made learning easier.",
    rating: 5,
  },
  {
    id: 5,
    name: "Emily Davis",
    title: "UI/UX Designer",
    image:
      "https://images.unsplash.com/photo-1440589473619-3cde28941638?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    revi: "Confidently design user interfaces and experiences, thanks to this course!",
    rating: 5,
  },
  {
    id: 6,
    name: "Chris Wilson",
    title: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1484863137850-59afcfe05386?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    revi: "Comprehensive data science module, extremely useful for my career.",
    rating: 5,
  },
  {
    id: 7,
    name: "Natalie Lewis",
    title: "DevOps Engineer",
    image:
      "https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    revi: "Practical DevOps practices and tools covered, very relevant content.",
    rating: 5,
  },
  {
    id: 8,
    name: "David Martinez",
    title: "Full Stack Developer",
    image:
      "https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    revi: "Solid foundation in full-stack development, varied and informative course.",
    rating: 5,
  },
  {
    id: 9,
    name: "Sophia Moore",
    title: "Mobile Developer",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    revi: "Detailed mobile development section, excellent for building applications.",
    rating: 5,
  },
  {
    id: 10,
    name: "Daniel Taylor",
    title: "Cloud Engineer",
    image:
      "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    revi: "Clear and easy-to-follow cloud computing concepts, highly effective.",
    rating: 5,
  },
  {
    id: 11,
    name: "Olivia Anderson",
    title: "Game Developer",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    revi: "Valuable insights into game development and design with practical application.",
    rating: 5,
  },
  {
    id: 12,
    name: "James Thomas",
    title: "Systems Analyst",
    image:
      "https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    revi: "Great overview of system analysis techniques with practical actions.",
    rating: 5,
  },
  {
    id: 13,
    name: "Isabella Jackson",
    title: "Technical Writer",
    image:
      "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    revi: "Improved documentation skills significantly with the technical writing module.",
    rating: 5,
  },
  {
    id: 14,
    name: "Benjamin White",
    title: "Cybersecurity Specialist",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    revi: "Up-to-date cybersecurity content, very informative with latest trends.",
    rating: 5,
  },
  {
    id: 15,
    name: "Ava Harris",
    title: "Product Manager",
    image:
      "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    revi: "Great course for product management fundamentals, practical and engaging.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <div className="bgColor-[rgba(246, 148, 30, 0.03)] py-12">
      <div className="w-11/12 mx-auto">
        <div className="mx-auto w-11/12">
          <Title heading="What" subheading="Our Students Say" />
          <p className="text-gray-600 my-4">
            Hear from our students about how our courses have impacted their
            careers and helped them achieve their goals.
          </p>

          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            {reviews.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="p-6 shadow-lg rounded-lg bg-white flex flex-col justify-between h-full text-left">
                  <div className="flex flex-col gap-3 items-start">
                    <div className="mb-4">
                      <FaQuoteLeft className="text-orange-400 text-xl" />
                    </div>
                    <img
                      src={review.image || "https://via.placeholder.com/150"}
                      alt={review.name}
                      className="rounded-full w-20 h-20 object-cover"
                    />
                    <div className="flex flex-col">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {review.name}
                      </h3>
                      <p className="text-sm text-gray-500">{review.title}</p>
                      <p className="my-3 text-gray-600 flex-grow">
                        {review.revi}
                      </p>
                      <div className="flex items-center mt-2">
                        {[...Array(review.rating)].map((_, index) => (
                          <FaStar key={index} className="text-yellow-500" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
