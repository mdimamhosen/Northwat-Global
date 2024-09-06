import React from "react";
import Heading from "../utils/Heading";
import {
  FaCalendarAlt,
  FaComment,
  FaHeart,
  FaLongArrowAltRight,
} from "react-icons/fa";
import image1 from "../assets/image 12.png";
import image2 from "../assets/image 12 (1).png";
import image3 from "../assets/image 12 (2).png";
// Sample blog data
const blogPosts = [
  {
    id: 1,
    image: image1,
    date: "September 20, 2024",
    title: "Emotional Intelligence in Education Building",
    comments: 5,
    likes: 12,
  },
  {
    id: 2,
    image: image2,
    date: "September 18, 2024",
    title: "The Future of Abroad Education in 2024",
    comments: 8,
    likes: 22,
  },
  {
    id: 3,
    image: image3,
    date: "September 15, 2024",
    title: "The Importance of Education in Society",
    comments: 3,
    likes: 5,
  },
];

const Blogs = () => {
  return (
    <div className="w-11/12 mx-auto py-16">
      <Heading heading="Blog" subheading="Our Latest Posts" />
      <p className="text-lg text-gray-700 mb-6 text-center">
        Stay updated with our latest blog posts covering a variety of topics
        from EduAbroad .
      </p>
      <div className="grid w-11/12 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((blog) => (
          <div
            key={blog.id}
            className="border rounded-lg shadow-lg overflow-hidden   transform hover:scale-105 transition-all duration-300 ease-linear"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <div className="flex items-center text-gray-500 mb-2">
                <FaCalendarAlt className="mr-2" />
                <span>{blog.date}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
              <hr className="my-2 border-gray-300" />

              <div className="flex justify-between items-center">
                <div className="flex items-center text-gray-600">
                  <FaHeart className="mr-2 text-red-500" />
                  <span>{blog.likes} Likes</span>
                </div>
                <div className="flex items-center text-gray-600 mb-2">
                  <FaComment className="mr-2" />
                  <span>{blog.comments} Comments</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="flex justify-center items-center
     "
      >
        <button
          className={`flex w-fit mt-12 hover:scale-95 transition-all duration-300 ease-linear items-center px-6 py-2  scale-105   shadow-md font-semibold text-[#F6941E]   border border-[#F6941E] hover:bg-opacity-80`}
        >
          View all Blogs
          <FaLongArrowAltRight className="ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Blogs;
