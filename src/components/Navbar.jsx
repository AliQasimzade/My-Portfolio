import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/AQ.webp";
import { Link } from "react-scroll";
import "animate.css";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);
  const handleSetActive = (e) => {
    console.log(e);
    setNav(false);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#231f20] text-gray-300">
      <div style={{ borderRadius: "50%", width: "60px", height: "60px" }}>
        <img
          src={Logo}
          alt="Logo Image"
          style={{ borderRadius: "50%", width: "60px", height: "60px" }}
        />
      </div>
      <ul className="hidden md:flex">
        <li>
          <Link
            className="home"
            to="home"
            smooth={true}
            duration={500}
            activeClass="active"
            spy={true}
            onSetActive={(event) => handleSetActive(event)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className="about"
            to="about"
            smooth={true}
            duration={500}
            activeClass="active"
            spy={true}
            offset={-90}
            onSetActive={(event) => handleSetActive(event)}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className="skills"
            to="skills"
            smooth={true}
            duration={500}
            activeClass="active"
            spy={true}
            offset={-90}
            onSetActive={(event) => handleSetActive(event)}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            className="work"
            to="work"
            smooth={true}
            duration={500}
            activeClass="active"
            spy={true}
            offset={-90}
            onSetActive={(event) => handleSetActive(event)}
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            className="contact"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            activeClass="active"
            offset={-90}
            onSetActive={(event) => handleSetActive(event)}
          >
            Contact
          </Link>
        </li>
      </ul>

      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={
          !nav
            ? "animate__animated animate__bounceOutRight hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#231f20] flex flex-col justify-center items-center animate__animated animate__bounceInRight"
        }
        style={{ zIndex: "9" }}
      >
        <li className="py-6 text-4xl">
          <Link
            className="home"
            to="home"
            smooth={true}
            duration={500}
            activeClass="active"
            spy={true}
            offset={-90}
            onSetActive={(event) => handleSetActive(event)}
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            className="about"
            to="about"
            smooth={true}
            duration={500}
            activeClass="active"
            spy={true}
            offset={-90}
            onSetActive={(event) => handleSetActive(event)}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            className="skills"
            to="skills"
            smooth={true}
            duration={500}
            activeClass="active"
            spy={true}
            offset={-90}
            onSetActive={(event) => handleSetActive(event)}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            className="work"
            to="work"
            smooth={true}
            duration={500}
            activeClass="active"
            spy={true}
            offset={-90}
            onSetActive={(event) => handleSetActive(event)}
          >
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            className="contact"
            to="contact"
            smooth={true}
            duration={500}
            activeClass="active"
            spy={true}
            offset={-90}
            onSetActive={(event) => handleSetActive(event)}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/aligasimzadeh"
              target="_blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/AliQasimzade"
              target="_blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=qasimzadeali4@gmail.com"
              target="_blank"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/aligasimzadeh/details/featured/?profileId=ACoAADRhSgsBHyupHK4q3pT4EfwzSAOk-d_eM4k"
              target="_blank"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
