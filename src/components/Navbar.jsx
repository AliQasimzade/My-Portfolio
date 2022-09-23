import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/AQ.webp";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [linkOne, setLinkOne] = useState(true);
  const [linkTwo, setLinkTwo] = useState(false);
  const [linkThree, setLinkThree] = useState(false);
  const [linkFour, setLinkFour] = useState(false);
  const [linkFive, setLinkFive] = useState(false);
  const handleClick = () => setNav(!nav)


  const handleChangeOne = () => {
    setLinkOne(true);
    setLinkTwo(false);
    setLinkThree(false);
    setLinkFour(false);
    setLinkFive(false)
  };
  const handleChangeTwo = () => {
    setLinkOne(false);
    setLinkTwo(true);
    setLinkThree(false);
    setLinkFour(false);
    setLinkFive(false)
  };
  const handleChangeThree = () => {
    setLinkOne(false);
    setLinkTwo(false);
    setLinkThree(true);
    setLinkFour(false);
    setLinkFive(false)
  };
  const handleChangeFour = () => {
    setLinkOne(false);
    setLinkTwo(false);
    setLinkThree(false);
    setLinkFour(true);
    setLinkFive(false)
  };

  const handleChangeFive = () => {
    setLinkOne(false);
    setLinkTwo(false);
    setLinkThree(false);
    setLinkFour(false);
    setLinkFive(true)
  };

const changeOne = () => {
  setLinkOne(true)
  setLinkTwo(false)
  setLinkThree(false)
  setLinkFour(false)
  setLinkFive(false)
  setNav(!nav)
 
}
const changeTwo = () => {
  setLinkOne(false)
  setLinkTwo(true)
  setLinkThree(false)
  setLinkFour(false)
  setNav(!nav)
}
const changeThree = () => {
  setLinkOne(false)
  setLinkTwo(false)
  setLinkThree(true)
  setLinkFour(false)
  setLinkFive(false)
  setNav(!nav)
}
const changeFour = () => {
  setLinkOne(false)
  setLinkTwo(false)
  setLinkThree(false)
  setLinkFour(true)
  setLinkFive(false)
  setNav(!nav)
}

const changeFive = () => {
  setLinkOne(false)
  setLinkTwo(false)
  setLinkThree(false)
  setLinkFour(false)
  setLinkFive(true)
  setNav(!nav)
}

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
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
            to="home"
            smooth={true}
            duration={500}
            style={linkOne ? { color: "#db2777" } : null}
            onClick={handleChangeOne}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            style={linkTwo ? { color: "#db2777" } : null}
            onClick={handleChangeTwo}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            style={linkThree ? { color: "#db2777" } : null}
            onClick={handleChangeThree}
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="work"
            smooth={true}
            duration={500}
            style={linkFour ? { color: "#db2777" } : null}
            onClick={handleChangeFour}
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            style={linkFive ? { color: "#db2777" } : null}
            onClick={handleChangeFive}
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
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link
            to="home"
            smooth={true}
            duration={500}
            style={linkOne ? { color: "#db2777" } : null}
            onClick={changeOne}
          >
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            to="about"
            smooth={true}
            duration={500}
            style={linkTwo ? { color: "#db2777" } : null}
            onClick={changeTwo}
          >
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            to="skills"
            smooth={true}
            duration={500}
            style={linkThree ? { color: "#db2777" } : null}
            onClick={changeThree}
          >
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            to="work"
            smooth={true}
            duration={500}
            style={linkFour ? { color: "#db2777" } : null}
            onClick={changeFour}
          >
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            style={linkFive ? { color: "#db2777" } : null}
            onClick={changeFive}
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
              href="https://www.linkedin.com/in/ali-gasimzadeh-86337b206/"
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
              href="https://www.linkedin.com/in/aligasimzadeh/details/featured/1635502778419/single-media-viewer/"
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
