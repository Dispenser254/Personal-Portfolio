/* eslint-disable react/jsx-key */
// import React from 'react'
import { IoMailOutline } from "react-icons/io5";
import { MdOutlineLocationOn, MdPhone } from "react-icons/md";

function ContactDetails() {
  const contactMethods = [
    {
      icon: <IoMailOutline />,
      contact: "stevensonkibs55@gmail.com",
    },
    {
      icon: <MdPhone />,
      contact: " +254 (768) 793190",
    },
    {
      icon: <MdOutlineLocationOn />,
      contact: "Nairobi, Kenya",
    },
  ];
  return (
    <div className="flex px-4 text-gray-600 md:px-8 mx-16 my-12 rounded-2xl bg-[url(images/contact.jpg)] bg-no-repeat bg-cover bg-blend-saturation">
      <div className="flex-1 space-y-3 sm:text-center flex items-center flex-col place-content-center">
        <div className="bg-slate-300 rounded-3xl p-6">
          <p className="text-green-500 text-3xl font-semibold sm:text-4xl">
            Get in touch
          </p>
          <p className="text-black font-light mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime non
            consequuntur pariatur atque laudantium earum minima, animi
            assumenda. Nesciunt, labore similique. Iure alias tenetur ad.
            Accusantium excepturi dicta blanditiis omnis!
          </p>
        </div>
        <div className="bg-slate-300 rounded-3xl p-6">
          <ul className="flex flex-wrap gap-x-10 gap-y-6 items-center">
            {contactMethods.map((item, id) => (
              <li key={id} className="flex items-center gap-y-3">
                <div className="flex-none text-gray-700 p-2">{item.icon}</div>
                <p className="text-gray-700">{item.contact}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex flex-1 m-6 max-w-lg bg-slate-300 p-10 rounded-2xl">
        <form action="" className="space-y-5">
          <div className="flex flex-col items-center gap-y-5 gap-x-6 sm:flex-row">
            <div>
              <label className="font-medium">First Name</label>
              <input
                type="text"
                className="w-full mt-2 px-3 py-2 text-gray-900 bg-gray-200 outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                required
              />
            </div>
            <div>
              <label className="font-medium">Last Name</label>
              <input
                type="text"
                className="w-full mt-2 px-3 py-2 text-gray-900 bg-gray-200 outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                required
              />
            </div>
          </div>
          <div>
            <label className="font-medium">Email</label>
            <input
              type="email"
              className="w-full mt-2 px-3 py-2 text-gray-900 bg-gray-200 outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              required
            />
          </div>
          <div>
            <label className="font-medium">Phone Number</label>
            <input
              type="text"
              className="w-full mt-2 px-3 py-2 text-gray-900 bg-gray-200 outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              required
            />
          </div>
          <div>
            <label className="font-medium">Message</label>
            <textarea
              className="w-full mt-2 px-3 py-2 h-25 resize-none text-gray-900 bg-gray-200 outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full mt-2 px-3 py-2 text-white font-medium outline-none border bg-indigo-600 focus:border-indigo-500 active:bg-indigo-600 shadow-sm rounded-lg duration-150"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactDetails;
