import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import LOGO from "../assets/effect.png";
import { useState } from "react";
import { Link } from "react-scroll";

export const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false);

  const handleNav = () => setNav((prev: boolean) => !prev);

  return (
    <div className=" h-24 text-black flex justify-between items-center mx-auto max-w-325">
      <a href="" className="ml-4 max-w-25">
        {" "}
        <img src={LOGO} alt="logo" />{" "}
      </a>
      <ul className="hidden md:flex  font-semibold">
        <li className="p-5 cursor-pointer">
          <Link to="about" smooth offset={50} duration={500}>
            {" "}
            About{" "}
          </Link>
        </li>
        <li className="p-5 cursor-pointer">
          <Link to="work" smooth offset={50} duration={500}>
            {" "}
            Work{" "}
          </Link>
        </li>
        <li className="p-5 cursor-pointer">
          <Link to="experience" smooth offset={50} duration={500}>
            {" "}
            Experience{" "}
          </Link>
        </li>
        <li className="p-5 cursor-pointer">
          <Link to="contact" smooth offset={50} duration={500}>
            {" "}
            Contact{" "}
          </Link>
        </li>
      </ul>
      <>
        <div className="block md:hidden px-4 z-20" onClick={handleNav}>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        <div
          className={`
            h-screen fixed  top-0 bg-linear-to-r from-gray-500 via-gray-700 to-gray-900  z-10
            ${
              nav
                ? " md:-left-full text-gray-300  left-0 w-[60%] border-r ease-in-out duration-500"
                : "-left-full   duration-1000"
            }`}
        >
          <a href="" className={nav ? " max-w-25 " : "hidden"}>
            {" "}
            <img src={LOGO} alt="logo" className="h-24 " />{" "}
          </a>
          <ul className="font-semibold">
            <li className="p-5 cursor-pointer">
              <Link to="about" smooth offset={50} duration={500}>
                {" "}
                About{" "}
              </Link>
            </li>
            <li className="p-5 cursor-pointer">
              <Link to="work" smooth offset={50} duration={500}>
                {" "}
                Work{" "}
              </Link>
            </li>
            <li className="p-5 cursor-pointer">
              <Link to="experience" smooth offset={50} duration={500}>
                {" "}
                Experience{" "}
              </Link>
            </li>
            <li className="p-5 cursor-pointer">
              <Link to="contact" smooth offset={50} duration={500}>
                {" "}
                Contact{" "}
              </Link>
            </li>
          </ul>
        </div>
      </>
    </div>
  );
};
