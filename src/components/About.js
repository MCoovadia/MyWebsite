import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hello, I'm Muhammed Coovadia. It's a pleasure to meet you. Feel
              free to explore.
            </p>
          </div>
          <div>
            <p>
              Greetings! I'm passionate about crafting dynamic and user-centric
              web experiences, and I specialize in leveraging JavaScript and
              React to bring ideas to life. With a keen eye for detail and a
              commitment to excellence, I thrive on the challenge of creating
              seamless and interactive applications. Whether it's collaborating
              with individuals or contributing to large-scale projects, I am
              dedicated to delivering solutions that not only meet but exceed
              expectations. Let's embark on a journey of innovation and
              creativity together. Welcome to my portfolio!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
