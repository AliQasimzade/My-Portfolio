import React, {useEffect,useRef} from "react";
import "animate.css";

const About = () => {
  const about = useRef(null);

  useEffect(() => {
   setTimeout(() => {
    about.current.className = "sm:text-right pb-8 pl-4"
   }, 1000)
  },[])

  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4 animate__animated animate__backInLeft" ref={about}>
            <p className="text-4xl font-bold inline border-b-4 border-pink-600" >
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold" >
            <p>Hi. I'm Ali, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I studied Front End Development Course in{" "}
              <a href="https://atlacademy.az/" style={{ color: "#db2777" }}>
                Atl Academy
              </a>
              .Then I was in practice for 2 months in{" "}
              <a href="https://www.atltech.az/az" style={{ color: "#db2777" }}>
                Atl Tech
              </a>
              . Currently, I am an intern at{" "}
              <a href="https://globalsoft.az/" style={{ color: "#db2777" }}>
                GlobalSoft
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
