import { Button } from "../ui/Button";
import shake from "../../assets/png/check-image.png";
export function AboutUs() {
  return (
    <div className="w-full px-4 py-8  sm:py-10 sm:px-8 my-8 backg sm:my-12">
      <div className="w-full flex xl:flex-row flex-col items-start justify-start gap-6">
        <div className="flex text-white flex-col items-start justify-start gap-y-4 sm:gap-y-6 w-full xl:w-[65%]">
          <h1 className="text-xl sm:text-4xl font-semibold">
            What Makes Us Different
          </h1>
          <p>
            At TrustFlick Loans, we stand out from the crowd by prioritizing
            your financial well-being and delivering unmatched service every
            step of the way. Here's why thousands of customers choose TrustFlick
            for their lending needs:
          </p>

          <p>
            Experience the TrustFlick difference for yourself. Apply now and
            discover a new standard of excellence in lending.
          </p>

          <p className="italic">Banking evolved. For life in hyperspeed.</p>

          <Button className="rounded-[3rem] text-[#0e8233] bg-white h-12 sm:h-14 px-8 sm:px-10">
            Get Started Now
          </Button>
        </div>
        <div className="w-full max-w-2xl xl:w-[35%]">
          <img
            src={shake}
            alt="flick"
            className="w-full h-[400px] rounded-md"
          />
        </div>
      </div>
    </div>
  );
}
