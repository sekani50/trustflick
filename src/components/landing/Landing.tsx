import { Activities } from "./Activities";
import { Hero } from "./Hero";
import transaction from "../../assets/png/money-transfering.svg";
import investor from "../../assets/png/investor.svg";
import withdraw from "../../assets/png/withdraw (1).svg";
import { AboutUs } from "./AboutUs";
import { WhyUs } from "./whyUs";
import { WhatWeDo } from "./WhatWeDo";
export default function Landing() {
  return (
    <>
      <Hero />
      <Activities />
      <div className="w-full text-white h-fit grid grid-cols-1 gap-6 md:gap-0 md:grid-cols-3 backg px-4 sm:px-8 lg:px-10 py-8 sm:py-10">
        <div className="w-full h-full flex items-start md:items-center gap-x-3 justify-start md:justify-center">
          <img src={investor} alt="" className="w-[50px] md:w-[60px]" />
          <div className="flex items-start justify-start flex-col gap-y-2">
            <h2 className="text-lg sm:text-4xl">23k+</h2>
            <p>Over Users</p>
          </div>
        </div>
        <div className="w-full border-x-0 md:border-x border-dashed h-full flex items-start md:items-center gap-x-3 justify-start md:justify-center">
          <img src={withdraw} alt="" className="w-[50px] md:w-[60px]" />
          <div className="flex items-start justify-start flex-col gap-y-2">
            <h2 className="text-lg sm:text-4xl">176k+</h2>
            <p>Total Transactions</p>
          </div>
        </div>
        <div className="h-full w-full flex items-start md:items-center gap-x-3 justify-start md:justify-center">
          <img src={transaction} alt="" className="w-[50px] md:w-[60px]" />
          <div className="flex items-start justify-start flex-col gap-y-2">
            <h2 className="text-lg sm:text-4xl">$265M+</h2>
            <p>Amounted in Transactions</p>
          </div>
        </div>
      </div>
      <AboutUs />
      <WhyUs />
      <WhatWeDo />
    </>
  );
}
