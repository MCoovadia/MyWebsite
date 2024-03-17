import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import Navbar from "./Navbar";
import About from "./About";
import Skills from "./Skills";
import Work from "./Work";
import Contact from "./Contact";

const Home = () => {
  return (
    <div>
      <Navbar />

      <div name="home" className="w-full h-screen bg-[#024761]">
        {/* Container */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
          <p className="text-pink-600 sm:text-4xl">Hi, my name is</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
            Moe Coovadia
          </h1>
          <h2 className="text-4xl sm:text-7xl font-bold text-[#000000]">
            I'm a Full Stack Developer.
          </h2>
          <p className="text-[#8892b0] py-4 max-w-[700px]">
            I specialize in the development and design of exceptional digital
            experiences as a full-stack developer, with a keen aspiration to
            delve into the realm of data analysis. Currently, my main emphasis
            is on creating responsive full-stack web applications, while
            actively working towards honing my skills to transition into the
            field of data analytics.
          </p>
          <div>
            <Link to="work" smooth={true} duration={500}>
              <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
                View Work
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-3 " />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
};

export default Home;
