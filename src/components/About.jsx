import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const About = ({id}) => {
  return (
    <div id={id} className="flex flex-col items-center justify-start bg-gray-100 px-4 py-16">
               
      <h1 className="text-4xl font-bold text-[#2C415A] mb-6">About PK-Store</h1>
       
      <p className="max-w-2xl text-center text-lg text-gray-700 mb-4">
        PK-Store is your one-stop online shop for all your favorite products. 
        We are committed to providing high-quality products with the best 
        customer experience.
      </p>

      <p className="max-w-2xl text-center text-lg text-gray-700 mb-8">
        Our mission is to make shopping simple, fast, and enjoyable. 
        From electronics to fashion, we bring you a wide range of items 
        at competitive prices.
      </p>
 
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl shadow-lg w-72 hover:shadow-2xl transition">
          <h2 className="text-2xl font-semibold text-[#2C415A] mb-2">Our Mission</h2>
          <p className="text-gray-600">
            Provide the best shopping experience and high-quality products 
            to every customer, every time.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-lg w-72 hover:shadow-2xl transition">
          <h2 className="text-2xl font-semibold text-[#2C415A] mb-2">Our Vision</h2>
          <p className="text-gray-600">
            To be the leading online store, trusted by customers for quality, 
            affordability, and convenience.
          </p>
        </div>
      </div>
 
      <div className="flex gap-6 text-[#2C415A] text-xl">
        <a href="https://facebook.com" target="_blank" className="hover:text-blue-600 transition">
          <FaFacebookF />
        </a>
        <a href="https://twitter.com" target="_blank" className="hover:text-blue-400 transition">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" className="hover:text-pink-500 transition">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" target="_blank" className="hover:text-blue-700 transition">
          <FaLinkedinIn />
        </a>
      </div>

    </div>
  );
};

export default About;
