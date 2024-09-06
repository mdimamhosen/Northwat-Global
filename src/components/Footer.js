import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import logo from "../assets/image 13.png";

const Footer = () => {
  return (
    <div className="bg-black text-white py-10">
      <div className="mx-auto w-11/12">
        <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <img src={logo} alt="Logo" className="w-40 h-auto" />
            <p className="text-sm">
              Travel Blog Elementor Template Kit. Powered by Design8. All rights
              reserved.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaInstagram />
              </a>
              <a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-400"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Category</h4>
            <ul className="space-y-2">
              <li className="hover:text-gray-400 cursor-pointer">
                Immigration
              </li>
              <li className="hover:text-gray-400 cursor-pointer">
                Study Abroad
              </li>
              <li className="hover:text-gray-400 cursor-pointer">Travel</li>
              <li className="hover:text-gray-400 cursor-pointer">
                Work Abroad
              </li>
              <li className="hover:text-gray-400 cursor-pointer">About Us</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Latest Posts</h4>
            <ul className="space-y-2">
              <li className="hover:text-gray-400 cursor-pointer">
                Study in China
              </li>
              <li className="hover:text-gray-400 cursor-pointer">
                Ulbright Scholarship
              </li>
              <li className="hover:text-gray-400 cursor-pointer">
                How to Get a Job in Canada
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold mt-8">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt />
                <span>
                  Kha-12/2(4th floor), Pragati Sarani, Gulshan, Dhaka-1212
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone />
                <span>+880-2-222222222</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope />
                <span>info@northwayglobal.com.bd</span>
              </li>
            </ul>
          </div>
        </div>{" "}
        <hr className="border-gray-700 mt-10 w-11/12 mx-auto" />
      </div>

      <div className="text-center py-4">
        <p>
          Designed and Developed by Ethical Den &copy;{" "}
          {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Footer;
