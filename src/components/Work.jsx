import React from "react";
import Trafalgar from "../assets/Cover.png";
import Lombard from "../assets/lombard.jpg";
import Weather from "../assets/weather.webp";
import AvonThumbNail from "../assets/avonThumbnail.jpeg"
import Restwell from "../assets/restwell.webp"
import SharkAz from "../assets/sharkaz.jpeg"
const Work = () => {
  return (
    <div
      name="work"
      className="w-full md:h-screen text-gray-300 bg-[#231f20]"
      style={{ height: "fit-content",scrollMarginTop:"200px" }}
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-blue-600">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid Item */}
          <div
            style={{
              backgroundImage:
                `url(${AvonThumbNail})`,
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Avon AZ
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://avonaz.net"
                  target="_blank"
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
                `url(${Restwell})`,
                backgroundSize: 'contain'
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
              Restwell(App)
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://play.google.com/store/search?q=restwell"
                  target="_blank"
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
                backgroundSize:"contain"
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
               Shark-Sushi
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://shark.az/"
                  target="_blank"
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
                "url(https://screenshot-proxy.netlify.app/f_jpg,w_336/https://d33wubrfki0l68.cloudfront.net/6315f01fe3237b5de3c19bf1/screenshot_2022-09-05-12-48-37-0000.png)",
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Search Github User
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://github-search-user-api.netlify.app"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Visit
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Lombard})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Lombard
              </span>
              <div className="pt-8 text-center">
                <a href="https://lombard.globalsoft.az/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Visit
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Trafalgar})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Trafalgar
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://aliqasimzade.github.io/Trafalgar/Trafalgar.html"
                  target="_blank"
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
                "url(https://screenshot-proxy.netlify.app/f_jpg,w_336/https://d33wubrfki0l68.cloudfront.net/63122a70484a6c2e09260371/screenshot_2022-09-02-16-08-21-0000.png)",
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Tic-Tac-Toe
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://tic-tac-toe-game-application.netlify.app/"
                  target="_blank"
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
                "url(https://www.saasdesign.io/saas-dashboard-ui-kit/saas-dashboard-ui.png)",
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                SaaS Dashboard
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://aliqasimzade.github.io/SaaS-DashBoard-UI-Kit/#/dashboard"
                  target="_blank"
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
                "url(https://screenshot-proxy.netlify.app/f_jpg,w_336/https://d33wubrfki0l68.cloudfront.net/6310d5e1fb8ed51606f695b4/screenshot_2022-09-01-15-55-19-0000.png)",
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Quiz Game
              </span>
              <div className="pt-8 text-center">
                <a href="https://quiz-timer-app.netlify.app" target="_blank">
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
                "url(https://screenshot-proxy.netlify.app/f_jpg,w_336/https://d33wubrfki0l68.cloudfront.net/62ff50906f076d662243bc48/screenshot_2022-08-19-08-58-00-0000.png)",
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Calculator
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://calculator-vanilla-javascript.netlify.app"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Visit
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Weather})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Weather App
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://aliqasimzade.github.io/Weather-App-React"
                  target="_blank"
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
              backgroundImage: `url(https://screenshot-proxy.netlify.app/f_jpg,w_336/https://d33wubrfki0l68.cloudfront.net/63318db00ecd75009763bb6c/screenshot_2022-09-26-11-32-07-0000.png)`,
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Search Download Gif
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://search-and-download-gif.netlify.app"
                  target="_blank"
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
