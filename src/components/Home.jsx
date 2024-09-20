import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#231f20]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-blue-600 ">Hi, my name is</p>
        <h1
          className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]"
          style={{ marginTop: "15px" }}
        >
          Ali Gasimzade
        </h1>
        <h2
          className="text-4xl sm:text-6xl text-[#8892b0]"
          style={{ marginTop: "15px" }}
        >
          I'm Frontend Developer
        </h2>
        <div>
          <Link
            to="work"
            smooth={true}
            duration={500}
            className="text-white group border-2 px-6 py-3 my-2 mt-[15px] max-w-[200px] cursor-pointer flex items-center hover:bg-blue-600 hover:border-blue-600 hover:rounded"
            
          >
            View my works
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
