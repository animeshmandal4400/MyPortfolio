import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import { HiHome } from "react-icons/hi";
import { Link } from "react-router-dom";
import { CiLinkedin } from "react-icons/ci";
import { FiGithub } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { AiOutlineHome } from "react-icons/ai";
import { TbSettings } from "react-icons/tb";
import { RiProjectorLine } from "react-icons/ri";
import { IoIosContact } from "react-icons/io";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="nav">
      <div className="nav_logo">
        <Link>
          <img className="logo" src={logo} />
        </Link>
      </div>
      <div className={`nav_menu ${isOpen && "open"}`}>
        <ul className="section_menu">
          <li>
            <a href="">
              <AiOutlineHome className="icon" />
              Home
            </a>
          </li>
          <li>
            <a href="">
              <TbSettings className="icon" />
              Skills
            </a>
          </li>
          <li>
            <a href="">
              <RiProjectorLine className="icon" />
              Projects
            </a>
          </li>
          <li>
            <a href="">
              <IoIosContact className="icon" />
              Contact
            </a>
          </li>
        </ul>

        <ul className="socials_menu">
          <li>
            {" "}
            <a href="">
              <CiLinkedin />
            </a>
          </li>
          <li>
            <a href="">
              <FiGithub />
            </a>
          </li>
          <li>
            {" "}
            <a href="">
              <AiOutlineInstagram />
            </a>
          </li>
          <li>
            <a href="">
              <CiTwitter />
            </a>
          </li>
        </ul>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;
