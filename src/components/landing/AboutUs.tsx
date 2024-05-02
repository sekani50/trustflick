
import { Button } from "../ui/Button";

export function AboutUs() {
  return (
    <div className="w-full px-4 py-8  sm:py-10 sm:px-8 my-8 backg sm:my-12">
      <div className="w-full flex xl:flex-row flex-col items-start justify-start gap-6">
        <div className="flex text-white flex-col items-start justify-start gap-y-4 sm:gap-y-6 w-full xl:w-[65%]">
          <h1 className="text-xl sm:text-4xl font-semibold">
            What Makes Us Different
          </h1>
          <p>
            Unlock a new frontier in modern banking with our revolutionary
            platform. We've reimagined financial services from the ground up,
            blending cutting-edge technology with a user-first approach to
            deliver an experience that shatters expectations. Say goodbye to
            hidden fees, convoluted processes, and impersonal transactions. Our
            platform puts you squarely in control with transparent,
            straightforward banking tailored to your lifestyle.
          </p>

          <p>
            What truly sets us apart is our commitment to meeting you wherever
            your financial needs arise. Whether managing money through our sleek
            mobile apps or the desktop platform, our intuitive interfaces ensure
            banking is finally effortless. Instantly split bills with friends,
            smartly budget and save towards goals, and even trade
            cryptocurrencies - all from a unified hub. And when the moment calls
            for human support, our best-in-class customer service is just a tap
            away. It's time to experience banking without the bankers, only
            better.
          </p>

          <p className="italic">Banking evolved. For life in hyperspeed.</p>

          <Button className="rounded-[3rem] text-purple-500 bg-white h-12 sm:h-14 px-8 sm:px-10">Get Started Now</Button>
        </div>
        <div className="w-full max-w-2xl xl:w-[35%]">
            <img src="https://trustflick.com/assets/landing/img/about-img1.jpg" alt="flick" className="w-full h-fit" />
        </div>
      </div>
    </div>
  );
}


