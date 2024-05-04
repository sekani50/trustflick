import { useNavigate } from "react-router-dom";
import { Button } from "../ui/Button";

export function Hero() {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full h-[500px] sm:h-[650px] banner-bg ">
        <div className="w-full h-full absolute inset-0 bg-black/70 z-10 px-4 py-8 sm:py-20 sm:px-10">
          <div className="w-full max-w-4xl flex flex-col items-center text-gray-50 lg:items-start justify-center lg:justify-start gap-y-6 md:gap-y-8 ">
            <h2 className="text-base sm:text-3xl lg:text-5xl italic font-bold">
              <span className="text-[#f49917]">
                Welcome to TrustFlick Loans
              </span>{" "}
             
            </h2>
            <h2 className="text-base sm:text-3xl lg:text-3xl font-bold">
               Your Reliable Path to Financial Freedom
            </h2>
            <p className="text-sm sm:text-base lg:text-xl w-full text-center lg:text-start">
              Looking for a trustworthy partner to navigate your financial
              journey? Look no further than TrustFlick! We are committed to
              providing you with seamless lending solutions tailored to your
              unique needs, ensuring you have the financial support you need,
              precisely when you need it.
            </p>

            <p className="text-sm sm:text-base lg:text-xl w-full text-center lg:text-start">
              Whether you're facing unexpected expenses, planning a dream
              vacation, or consolidating debt, TrustFlick has your back.
            </p>

            <Button
              onClick={() => navigate("/loan")}
              className="text-[#0e8233] bg-white h-12 sm:h-14 rounded-[3rem] px-10 sm:px-20 font-semibold"
            >
              Apply for Loan
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
