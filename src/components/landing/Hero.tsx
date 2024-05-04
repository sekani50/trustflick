import { useNavigate } from "react-router-dom";
import { Button } from "../ui/Button";

export function Hero() {
  const navigate = useNavigate()
  return (
    <>
      <div className="w-full h-[500px] sm:h-[650px] banner-bg ">
        <div className="w-full h-full absolute inset-0 bg-black/70 z-10 px-4 py-8 sm:py-20 sm:px-10">
          <div className="w-full flex flex-col items-center text-gray-50 lg:items-start justify-center lg:justify-start gap-y-6 ">
            <p className="text-base sm:text-xl lg:text-2xl">
              {" "}
              <span className="text-[#f49917]">21 CENTURY</span> AND STILL
              COUNTING
            </p>
            <h2 className="text-base sm:text-3xl lg:text-5xl font-bold">
              FAST AND STABLE BANKING
            </h2>
            <p className="text-sm sm:text-base lg:text-xl w-full text-center lg:text-start">
              trustflick.com is the best and secured way of performing
              transactions to people all over the world. No matter where you are
              in the world, you can save and transact with people conveniently
              and confidently
            </p>

            <p className="text-sm sm:text-base lg:text-xl w-full text-center lg:text-start">
              Join over 70,000 users from all over the world satisfied with our
              services. A place where everyone performs transactions with
              confidence. Even with a history of hefty technological investments
              and an even larger donations, consumer and investor confidence has
              never waned.
            </p>

            <Button
            onClick={() => navigate("/loan")}
            className="text-[#0e8233] bg-white h-12 sm:h-14 rounded-[3rem] px-10 sm:px-20 font-semibold">
              Apply for Loan
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

