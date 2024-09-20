import React, { useEffect, useRef } from "react";
import "animate.css";

const About = () => {
  const about = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      about.current.className = "sm:text-right pb-8 pl-4";
    }, 1000);
  }, []);

  return (
    <div name="about" className="w-full h-screen bg-[#231f20] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div
            className="sm:text-right pb-8 pl-4 animate__animated animate__backInLeft"
            ref={about}
          >
            <p className="text-4xl font-bold inline border-b-4 border-blue-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Ali, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>
              I studied Front End Development Course in{" "}
              <a
                href="https://atlacademy.az/"
                style={{ color: "rgb(37, 99, 235)" }}
              >
                Atl Academy
              </a>
              .Then I was in practice for 2 months in{" "}
              <a
                href="https://www.atltech.az/az"
                style={{ color: "rgb(37, 99, 235)" }}
              >
                Atl Tech
              </a>
              .I worked for 4 months at
              <a
                href="https://globalsoft.az/"
                className="ml-1 mr-1"
                style={{ color: "rgb(37, 99, 235)" }}
              >
                GlobalSoft
              </a>
              I worked as Instructor
              <a
                href="https://rgacademy.org/"
                className="ml-1"
                style={{ color: "rgb(37, 99, 235)" }}
              >
                RG Academy
              </a>
              and I worked as remote in <a href="https://rgagency.org/"
                className="ml-1"
                style={{ color: "rgb(37, 99, 235)" }}>RG Agency</a>
              .Right now I work at <a
                href="https://globalsoft.az/"
                className="ml-1 mr-1"
                style={{ color: "rgb(37, 99, 235)" }}
              >
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
