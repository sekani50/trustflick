import { cn } from "../../lib/utils";
import world from "../../assets/png/worldwide.svg";
import customer from "../../assets/png/customer-service.svg";
import withdraw from "../../assets/png/withdraw.svg";
import shield from "../../assets/png/shield.svg";
import referral from "../../assets/png/referral.svg";
import affiliate from "../../assets/png/affiliate-marketing.svg";
export function WhyUs() {
  return (
    <div className="mb-8 sm:mb-12  ">
      <h2 className="font-semibold text-lg text-[#0e8233] sm:text-3xl mb-3 text-center w-full">
        Why Trust TrustFlick?
      </h2>
      <p className="font-semibold px-4 sm:px-8 text-center w-full text-base sm:text-xl mb-6 md:mb-12">
        Here are some of the many features that define our uniqueness
      </p>
      <div className=" px-4 sm:px-8 w-full grid grid-cols-1 relative mx-auto gap-4 md:gap-10 md:w-10/12 items-center justify-center  md:grid-cols-2 ">
        <div className="w-full grid grid-cols-1 gap-6 items-center justify-center md:items-start md:justify-start  h-full">
          <Widget
            image={withdraw}
            header="Swift Approval Process"
            text="Bid farewell to long waiting periods. Our efficient application process ensures you receive a prompt decision on your loan request, often within minutes."
          />
          <Widget
            image={shield}
            header="Customized Loan Solutions"
            text="We understand that one size doesn’t fit all. That’s why we offer a range of loan options with flexible terms, empowering you to choose the solution that aligns perfectly with your financial goals."
          />
          <Widget
            image={affiliate}
            header="Credit Challenges? No Sweat!"
            text="Your credit score shouldn’t dictate your financial future. Even if you have less-than-perfect credit, TrustFlick welcomes your application, offering personalized solutions to suit your needs."
          />
        </div>

        <div className="w-full  grid grid-cols-1 gap-6 items-center justify-center md:items-start md:justify-start  h-full">
          <Widget
            image={withdraw}
            textBoxStyle=""
            header="Competitive Interest Rates"
            textAlign=""
            text="At TrustFlick, we believe in fair and transparent pricing. Benefit from competitive interest rates and clear terms, ensuring you get the best value for your money."
          />
          <Widget
            image={referral}
            textBoxStyle=""
            header="Exceptional Customer Care"
            textAlign=""
            text="Our dedicated team of financial experts is here to support you every step of the way. Whether you need guidance during the application process or assistance with repayment options, count on us to provide attentive and personalized service."
          />
          <Widget
            image={customer}
            textBoxStyle=""
            header="24/7 Friendly Support"
            textAlign=""
            text="Our customer care service is available at all time to attend to you and also offer solutions to all your needs"
          />
        </div>
      </div>
    </div>
  );
}

function Widget({
  image,
  header,
  text,
  className,
  textBoxStyle,
  textAlign,
}: {
  image: string;
  header: string;
  text: string;
  className?: string;
  textBoxStyle?: string;
  textAlign?: string;
}) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-5  items-start sm:gap-5 justify-start",
        className
      )}
    >
      <div className=" items-center backg rounded-full flex justify-center w-[60px] h-[60px] ">
        <div className="w-[30px] h-[30px]">
          <img alt="" src={image} className="w-full h-full" />
        </div>
      </div>
      <div
        className={cn(
          "md:col-span-4 flex flex-col items-start gap-y-3 justify-start",
          textBoxStyle
        )}
      >
        <h2 className="font-semibold text-xl sm:text-2xl">{header}</h2>
        <p className={cn("w-full text-sm sm:text-lg", textAlign)}>{text}</p>
      </div>
    </div>
  );
}
