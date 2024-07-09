import React from "react";
import { Highlight } from "../ui/hero-highlight";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

function Contact() {
  const contactDetails = {
    email: "icpcmsldemo@vitbhopal.ac.in",
    mobile1: "0123456789",
    mobile2: "0123456789",
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 flex flex-col items-center">
      <Highlight className="text-yellow-300 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-9">
        GET IN TOUCH
      </Highlight>
      <div className="p-4 sm:p-6 md:p-8">
        <HoverBorderGradient
          containerClassName="rounded-lg"
          className="text-white flex flex-col items-center space-y-2 text-center"
        >
          <p className="text-lg sm:text-xl md:text-2xl font-bold">Reach Us:</p>
          <div className="mt-2">
            <p className="text-white mb-2 text-sm sm:text-base md:text-lg">
              Email –{" "}
              <a
                href={`mailto:${contactDetails.email}`}
                className="text-blue-500"
              >
                {contactDetails.email}
              </a>
            </p>
            <p className="text-white mr-4 text-sm sm:text-base md:text-lg">
              Mobile: {contactDetails.mobile1} / {contactDetails.mobile2}
            </p>
            <p className="text-white mt-1 mr-20 md:mr-24 text-sm sm:text-base md:text-lg">
              Timings: 10 AM to 4 PM
            </p>
          </div>
        </HoverBorderGradient>
      </div>
    </div>
  );
}

export default Contact;
