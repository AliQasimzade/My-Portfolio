import React from "react";
import AvonNewThumbNail from "../assets/avonNewThumbnail.png";
import SharkAz from "../assets/sharkaz.jpeg";
import Giperaks from "../assets/giperaks.png";
import Turalux from "../assets/turalux.png";
import Korteya from "../assets/korteya.png";
import Ptsp from "../assets/ptsp.png";
import PressKlub from "../assets/pressklub.png";
import Ams from "../assets/ams.png";
import Eudi from "../assets/eudi.png";
import NobelEnergy from "../assets/nobelenergy.png";
import Netfilms from "../assets/netfilms.png";
import Gastrovill from "../assets/gastrovill.png";
import Azeuro from "../assets/azeuro.png";

const Work = () => {
  return (
    <div
      name="work"
      className="w-full md:h-screen text-gray-300 bg-[#231f20]"
      style={{ height: "fit-content", scrollMarginTop: "200px" }}
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-blue-600">
            Works
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{
              backgroundImage:
                `url(${Korteya})`,
              backgroundSize: "contain"
            }}
            className="shadow-lg shadow-[#2563eb]  group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Korteya
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://korteya.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Visit
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage:
                `url(${Azeuro})`,
            }}
            className="shadow-lg shadow-[#2563eb]   group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Azeurotel
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://azeurotel.az/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Visit
                  </button>
                </a>
              </div>
            </div>
          </div>



          <div
            style={{
              backgroundImage:
                `url(${Giperaks})`,
              backgroundSize: "contain"
            }}
            className="shadow-lg shadow-[#2563eb] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Giperaks
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://giperaks.az/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Visit
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage:
                `url(${Turalux})`,
              backgroundSize: "contain"
            }}
            className="shadow-lg shadow-[#2563eb] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Turalux
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://b2b.turalux.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Visit
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage:
                `url(${AvonNewThumbNail})`,

            }}
            className="shadow-lg shadow-[#2563eb] bg-contain group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Avon AZ
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://avonaz.net"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Visit
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage:
                `url(${NobelEnergy})`,
              backgroundSize: "contain"
            }}
            className="shadow-lg shadow-[#2563eb]   group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Nobel Energy
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://nobelenergy.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Visit
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage:
                `url(${PressKlub})`,
              backgroundSize: "contain"
            }}
            className="shadow-lg shadow-[#2563eb]   group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Press Klub
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://pressklub.az/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Visit
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage:
                `url(${Ams})`,
              backgroundSize: "contain"
            }}
            className="shadow-lg shadow-[#2563eb]   group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Auto Management Soft
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://app.automanagesoft.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Visit
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage:
                `url(${Eudi})`,
              backgroundSize: "contain"
            }}
            className="shadow-lg shadow-[#2563eb]   group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                EUDI
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://eudi.az/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Visit
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage:
                `url(${SharkAz})`,
              backgroundSize: "contain"
            }}
            className="shadow-lg shadow-[#2563eb] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Shark-Sushi
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://shark.az/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Visit
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage:
                `url(${Ptsp})`,
              backgroundSize: "contain"
            }}
            className="shadow-lg shadow-[#2563eb]   group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Ptsp
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://ptsp.az/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Visit
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage:
                `url(${Netfilms})`,
              backgroundSize: "contain"
            }}
            className="shadow-lg shadow-[#2563eb]   group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                NETFILMS(Clone)
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://netfilmsmovies.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Visit
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundImage:
                `url(${Gastrovill})`,
              backgroundSize: "contain"
            }}
            className="shadow-lg shadow-[#2563eb]   group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Gastrovill
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://gastrovill.az/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Visit
                  </button>
                </a>
              </div>
            </div>
          </div>




        </div>
      </div>
    </div>
  );
};

export default Work;
