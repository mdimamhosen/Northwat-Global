import React from "react";
import Navbar from "./../components/Navbar";
import ProcessSection from "./../components/ProcessSection";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Blogs from "../components/Blogs";
import FrequentQuestions from "../components/FrequentQuestions";
import TopStudents from "./../components/TopStudents";
import Testimonials from "../components/Testimonials";
import Services from "../components/Services";
import ConstOfEducation from "../components/ConstOfEducation";
import PopularUniversities from "../components/PopularUniversities";
import AboutSection from "../components/AboutSection";

const Home = () => {
  return (
    <div className="w-screen bg-[#F5F5F5]">
      <Navbar />
      <Banner />
      <ProcessSection />
      <AboutSection />
      <PopularUniversities />
      <ConstOfEducation />
      <Services />
      <Testimonials />
      <TopStudents />
      <FrequentQuestions />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Home;
