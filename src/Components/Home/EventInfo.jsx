import React from "react";
import { WobbleCard } from "../ui/wobble-card";
import feesTable from "../../assets/fees-table.png";
import importantDates from "../../assets/important-dates.png";

export function EventInfo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full bg-black py-20">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-pink-800 md:min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="w-full md:h-full">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            IMPORTANT DATES
          </h2>
          <img
            src={importantDates}
            alt="Important Dates"
            className="rounded-2xl w-full"
          />
        </div>
        {/* <img
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl"
        /> */}
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px] flex justify-center ">
        <h2 className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white ">
          ACCOUNT DETAILS
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-white">
          Account Holder : SASL VIT Bhopal
        </p>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-white">
          IFSC Code : IDIB000V143
        </p>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-white">
          Bank Name : Indian Bank
        </p>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-white">
          Account Number : 6994648311
        </p>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-white">
          Branch Code : 2953
        </p>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-white">
          Swift Code : IDIBINBBMAS
        </p>
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        
        <div className="w-full flex flex-col md:flex-row md:justify-around space-y-4 md:space-y-0">
          <div>
          <h2 className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            REGISTER NOW !
          </h2>
          </div>
          <img
            src={feesTable}
            alt=""
            width={700}
            height={700}
            className="rounded-2xl"
          />
        </div>
        {/* <img
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
        /> */}
      </WobbleCard>
      <a href="https://cmt3.research.microsoft.com/ICIPMSL2024/Submission/Index">
      <button
              type="button"
              className="rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-sm bg-[#f2b705] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black transition-all ease-in-out duration-300 hover:text-black w-full "
              
            >
              Register
            </button>
      </a>
    </div>
  );
}
