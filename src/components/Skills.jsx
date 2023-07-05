import React from 'react';
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Bootstrap from '../assets/bootstrap.jpg';
import Sass from '../assets/sass.png';
import Next from '../assets/Next.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import MaterialUI from '../assets/Material-UI.png';
import Redux from "../assets/Redux.png"
import Recoil from "../assets/Recoil.png"
import TypeScript from "../assets/typescript.png"
import ReactNative from "../assets/reactnative.png"
import MongoDb from "../assets/mongodb.svg"
import Express from "../assets/express.svg"
import NodeJs from "../assets/nodejs.svg"




const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#231f20] text-gray-300' style={{height:"fit-content"}}>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
          <div>
              <p className='text-4xl font-bold inline border-b-4 border-blue-600 '>Skills</p>
              <p className='py-4'>// These are the technologies I've worked with</p>
          </div>

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='shadow-md shadow-[#2563eb] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='shadow-md shadow-[#2563eb] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='shadow-md shadow-[#2563eb] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='shadow-md shadow-[#2563eb] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={ReactImg} alt="React icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='shadow-md shadow-[#2563eb] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GitHub} alt="GitHub icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='shadow-md shadow-[#2563eb] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Bootstrap} alt="Bootstrap icon" />
                  <p className='my-4'>Bootstrap</p>
              </div>
              <div className='shadow-md shadow-[#2563eb] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={MaterialUI} alt="MaterialUI icon" />
                  <p className='my-4'>Material UI</p>
              </div>
              <div className='shadow-md shadow-[#2563eb] hover:scale-110 duration-500'>
                  <img className='w-30 mx-auto h-20' src={Next} alt="Next icon" />
                  <p className='my-4'>Next js</p>
              </div>
              <div className='shadow-md shadow-[#2563eb] hover:scale-110 duration-500'>
                  <img className='w-30 mx-auto h-20' src={TypeScript} alt="TypeScript icon" />
                  <p className='my-4'>TypeScript</p>
              </div>
              <div className='shadow-md shadow-[#2563eb] hover:scale-110 duration-500'>
                  <img className='w-30 mx-auto h-20' src={ReactNative} alt="ReactNative icon" />
                  <p className='my-4'>React Native</p>
              </div>
              <div className='shadow-md shadow-[#2563eb] hover:scale-110 duration-500'>
                  <img className='w-30 mx-auto h-20' src={Tailwind} alt="Tailwind icon" />
                  <p className='my-4'>Tailwind</p>
              </div>
              <div className='shadow-md shadow-[#2563eb] hover:scale-110 duration-500'>
                  <img className='w-30 mx-auto h-20' src={Sass} alt="Sass icon" />
                  <p className='my-4'>Sass</p>
              </div>
              <div className='shadow-md shadow-[#2563eb] hover:scale-110 duration-500'>
                  <img className='w-30 mx-auto h-20' src={Redux} alt="Redux icon" />
                  <p className='my-4'>Redux</p>
              </div>
              <div className='shadow-md shadow-[#2563eb] hover:scale-110 duration-500'>
                  <img className='w-30 mx-auto h-20' src={Recoil} alt="Recoil icon" />
                  <p className='my-4'>Recoil</p>
              </div>

              <div className='shadow-md shadow-[#2563eb] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={MongoDb} alt="MongoDb icon" />
                  <p className='my-4'>Mongo DB</p>
              </div>
              <div className='shadow-md shadow-[#2563eb] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={Express} alt="Expresss icon" />
                  <p className='my-4'>Express js</p>
              </div>
              <div className='shadow-md shadow-[#2563eb] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={NodeJs} alt="Node icon" />
                  <p className='my-4'>Node js</p>
              </div>
          </div>
      </div>
    </div>
  );
};

export default Skills;
