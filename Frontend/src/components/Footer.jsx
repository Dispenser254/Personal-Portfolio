/* eslint-disable react/jsx-key */
// import React from 'react'
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

export const Footer = () => {
  const footerNavs = [
    {
      href: "#",
      name: "Home",
    },
    {
      href: "#",
      name: "About",
    },
    {
      href: "#",
      name: "Projects",
    },
    {
      href: "#",
      name: "Contact",
    },
  ];

  const socialLinks = [
    {
      href: "#",
      icon: <FaFacebook />,
    },
    {
      href: "#",
      icon: <FaInstagram />,
    },
    {
      href: "#",
      icon: <FaXTwitter />,
    },
    {
      href: "#",
      icon: <FaLinkedin />,
    },
    {
      href: "#",
      icon: <FaGithub />,
    },
  ];
  return (
    <footer className="bg-neutral-300 px-4 mx-auto md:px-8">
      <div className="max-x-lg sm:mx-auto sm:text-center">
        <img
          src="../images/Brand.svg"
          alt="Brand logo"
          className="w-40 sm:mx-auto"
        />
        <p className="leading-relaxed mt-2 text-[15px] text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic nostrum
          dicta qui facilis, impedit odio repellat ratione animi aspernatur
          culpa repudiandae adipisci soluta provident. Illum nulla eius in rem
          facere.
        </p>
      </div>
      <ul className="items-center justify-center mt-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
        {footerNavs.map((item, idx) => (
          <li className="text-sky-500 hover:text-gray-900">
            <a key={idx} href={item.href}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <div className="mt-8 items-center justify-between sm:flex">
        <div className="mt-4 sm:mt-0 font-light text-neutral-500">
          <i>&copy; 2024 FrodenZ Labs. All rights reserved.</i>
        </div>
        <div className="mt-6 sm:mt-0">
          <ul className="flex items-center space-x-4">
            {socialLinks.map((link, id) => (
              <li className="w-10 h-10 border rounded-full flex items-center justify-center hover:text-blue-700">
                <a key={id} href={link.href}>
                  <span className="w-6 h-6">{link.icon}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
