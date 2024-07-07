import React from "react";

export function Footer() {
  return (
    <section className="relative overflow-hidden py-10 bg-[#2b3359] text-gray-300 text-xs	 ">
      <div className="relative z-10 mx-auto max-w-7xl px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <span className="ml-4 text-sm mb-4 font-bold">
                  UNIVERSITY ADDRESS
                </span>
              </div>
              <div>
                <p className="mb-4  text-base font-medium">
                  The Tailwind CSS Component library
                </p>
                <p className="text-sm text-gray-600">
                  &copy; Copyright 2022. All Rights Reserved by DevUI.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-4  text-sm font-semibold uppercase text-white">
                SOCIAL MEDIA
              </h3>

              <ul>
                <li className="mb-4">
                  <a className="text-xs  hover:text-[#A22430]  " href="#">
                    Facebook
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-xs  hover:text-[#A22430]  " href="#">
                    Instagram
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-xs  hover:text-[#A22430]  " href="#">
                    Twitter
                  </a>
                </li>
                <li>
                  <a className=" text-xs   hover:text-[#A22430] " href="#">
                    Youtube
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
            <div className="h-full">
              <h3 className="tracking-px mb-4  text-sm font-semibold uppercase text-white">
                Quick Links
              </h3>
              <ul>
                <li className="mb-4">
                  <a className=" text-xs hover:text-[#A22430] " href="#">
                    Careers
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-xs hover:text-[#A22430]  " href="#">
                    VTOP
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-xs  hover:text-[#A22430] " href="#">
                    Women Grievance Cell
                  </a>
                </li>
                <li className="mb-4">
                  <a className="text-xs hover:text-[#A22430] " href="#">
                    Anti-Ragging Committee
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-xs hover:text-[#A22430]" href="#">
                    Grievance Redressal Committee
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-xs hover:text-[#A22430] " href="#">
                    NAD/ABC
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-xs hover:text-[#A22430] " href="#">
                    Ordinance
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-xs hover:text-[#A22430]" href="#">
                    Technology and Bhartiya Bhasha
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-xs hover:text-[#A22430] " href="#">
                    ViksitBharat@2047
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-3/12">
            <div className="h-full">
              <h3 className="tracking-px mb-4 text-sm font-semibold uppercase text-white">
                Parents
              </h3>
              <ul>
                <li className="mb-4">
                  <a className=" text-xs hover:text-[#A22430] " href="#">
                    How to Reach
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-xs hover:text-[#A22430] " href="#">
                    Hotels in Bhopal & Indore
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-xs hover:text-[#A22430] " href="#">
                    Parents Login
                  </a>
                </li>
                <li className="mb-4">
                  <a className=" text-xs hover:text-[#A22430] " href="#">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
