import { cn } from "../../lib/utils";
import world from "../../assets/png/worldwide.svg";
import customer from "../../assets/png/customer-service.svg"
import withdraw from "../../assets/png/withdraw.svg"
import shield from "../../assets/png/shield.svg"
import referral from "../../assets/png/referral.svg"
import affiliate from "../../assets/png/affiliate-marketing.svg"
export function WhyUs() {
  return (
    <div className="mb-8 sm:mb-12  ">
      <h2 className="font-semibold text-lg text-[#0e8233] sm:text-3xl mb-3 text-center w-full">
        Why Us?
      </h2>
      <p className="font-semibold px-4 sm:px-8 text-center w-full text-base sm:text-xl mb-6 md:mb-12">
        Here are some of the many features that define our uniqueness
      </p>
      <div className=" px-4 sm:px-8 w-full grid grid-cols-1 relative mx-auto gap-4 md:gap-10 md:w-10/12 items-center justify-center  md:grid-cols-2 ">
    
        <div className="w-full grid grid-cols-1 gap-6 items-center justify-center md:items-start md:justify-start  h-full">
          <Widget
            image={withdraw}
        
            header="Seamless Payment Option"
            text="We support multiple payment methods: Visa, MasterCard, bank transfer, cryptocurrency and lots more"
          />
          <Widget
            image={referral}
           
            header="Secured Transactions"
            text="Your finance is secured with our advanced technologies that protect you against digital thefts and hacks."
          />
          <Widget
            image={affiliate}
          
            header="Attractive Interest Rates"
            text="We understand the needs of our customers very much that our interest rates are attractive."
          />
      
        </div>
    

        <div className="w-full  grid grid-cols-1 gap-6 items-center justify-center md:items-start md:justify-start  h-full">
          <Widget
            image={world}
           
            textBoxStyle=""
            header="World Coverage"
            textAlign=""
            text="We provide services in 80% countries around all the globe located in various continents."
          />
          <Widget
            image={shield}
         
            textBoxStyle=""
            header="SSL Security"
            textAlign=""
            text="We offer you an unbeatable protection against DDoS attacks with full data encryption for all your transactions."
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
      <div
        className=
          " items-center backg rounded-full flex justify-center w-[60px] h-[60px] "
      
      >
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
