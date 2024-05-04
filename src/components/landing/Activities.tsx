import diploma from "../../assets/png/diploma.svg";
import solar from "../../assets/png/shield.svg";
import world from "../../assets/png/worldwide.svg";
import blockchain from "../../assets/png/blockchain.svg";
import one from "../../assets/png/one1.svg";
import two from "../../assets/png/add-user.svg";
import three from "../../assets/png/coin.svg";
import { Link } from "react-router-dom";
export function Activities() {
  return (
    <div className="w-full   ">
      <div className="w-full py-6 backg mb-8 sm:mb-12 text-white">
        <h2 className="text-lg sm:text-3xl text-white font-semibold mb-6 w-full  text-center sm:mb-10">
          How it Works
        </h2>
        <div className="w-full 2xl:w-[80%]  grid  mx-auto gap-5 p-4 sm:py-12 px-8  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
          <HowWidget
            image={two}
            header="Online Application"
            text=" Complete our straightforward online application form, providing basic details about yourself and your financial situation. It's quick and easy!"
          />
          <HowWidget
            image={three}
            header="Approval in a Flash"
            text="Once you submit your application, our advanced system swiftly reviews your information, delivering an instant decision on your loan approval."
          />
          <HowWidget
            image={one}
            header="Funds Delivered Directly"
            text=" Upon approval, your funds will be deposited directly into your bank account within 24 hours. Simple, convenient, and hassle-free!"
          />
        </div>

        <p className="text-center mb-4 italic text-sm sm:text-lg font-semibold">
          {" "}
          <Link to="/loan" className="text-[#f49917]">
            Apply Now
          </Link>{" "}
          and Experience the TrustFlick Advantage!
        </p>

        <p className="text-center max-w-2xl mx-auto text-sm sm:text-lg font-semibold">
          Don't let financial obstacles hold you back. Take charge of your
          finances today with TrustFlick Loans. Apply now to unlock the
          financial support you need, accompanied by the convenience and
          flexibility you deserve.
        </p>
      </div>

      <div className="w-full px-4 sm:px-8 mb-8 sm:mb-12 text-zinc-700 grid grid-cols-1 items-start lg:grid-cols-2 gap-6">
        <h2 className="font-semibold text-center w-full col-span-full mb-6 sm:mb-8 text-lg sm:text-3xl">
          What set
          <span className="text-[#0e8233] italic mx-1 font-[kalam]">
            TrustFlick
          </span>{" "}
          Apart?
        </h2>
        <div className="w-full flex flex-col gap-y-4">
          <ul className="w-full flex flex-col items-start justify-start gap-y-3">
            <li className="flex flex-col gap-y-2">
              <p className="font-semibold text-base sm:text-lg">
                Personalized Approach
              </p>
              <p>
                We understand that each financial situation is unique. That's
                why we take the time to listen to your needs and tailor our
                solutions accordingly. Whether you're a seasoned entrepreneur or
                a first-time borrower, TrustFlick is dedicated to finding the
                perfect lending option for you.
              </p>
            </li>
            <li className="flex flex-col gap-y-2">
              <p className="font-semibold text-base sm:text-lg">
                Transparency and Integrity
              </p>
              <p>
                We believe in honest, transparent communication. You'll never
                encounter hidden fees or confusing terms with TrustFlick. Our
                commitment to integrity ensures that you know exactly what to
                expect throughout the loan process, from application to
                repayment.
              </p>
            </li>
            <li className="flex flex-col gap-y-2">
              <p className="font-semibold text-base sm:text-lg">
                Lightning-Fast Approval
              </p>
              <p>
                Say goodbye to lengthy approval processes. With TrustFlick,
                you'll receive a decision on your loan application in record
                time, often within minutes. We understand that time is of the
                essence when you're in need of financial assistance, and we're
                here to deliver prompt solutions.
              </p>
            </li>
          </ul>
        </div>
        {/**   */}
        <div className="w-full flex flex-col gap-y-4">
          <ul className="w-full flex flex-col items-start justify-start gap-y-3">
            <li className="flex flex-col gap-y-2">
              <p className="font-semibold text-base sm:text-lg">
                Accessibility for All
              </p>
              <p>
                Whether you have excellent credit, a few blemishes on your
                record, or are just starting to build credit, TrustFlick
                welcomes applicants from all financial backgrounds. We believe
                that everyone deserves access to fair and flexible lending
                options, regardless of their credit score.
              </p>
            </li>
            <li className="flex flex-col gap-y-2">
              <p className="font-semibold text-base sm:text-lg">
                Comprehensive Support
              </p>
              <p>
                Our commitment to your financial success doesn't end once your
                loan is approved. The TrustFlick team is here to support you
                every step of the way, providing expert guidance and assistance
                whenever you need it. From answering your questions to exploring
                repayment options, we're dedicated to helping you thrive.
              </p>
            </li>
            <li className="flex flex-col gap-y-2">
              <p className="font-semibold text-base sm:text-lg">
                Cutting-Edge Technology
              </p>
              <p>
                TrustFlick leverages advanced technology to streamline the
                lending process and enhance your experience. Our user-friendly
                online platform makes it easy to apply for a loan, upload
                documents, and track your application status from anywhere, at
                any time.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function Widget({
  image,
  header,
  text,
}: {
  image: string;
  header: string;
  text: string;
}) {
  return (
    <div className="grid grid-cols-5 items-start sm:gap-5 justify-start">
      <div className="flex items-center backg rounded-full box-shade justify-center w-[60px] h-[60px] ">
        <div className="w-[30px] h-[30px]">
          <img alt="" src={image} className="w-full h-full" />
        </div>
      </div>
      <div className="col-span-4 flex flex-col items-start gap-y-3 justify-start">
        <h2 className="font-semibold text-lg sm:text-xl">{header}</h2>
        <p className="">{text}</p>
      </div>
    </div>
  );
}

function HowWidget({
  image,
  header,
  text,
}: {
  image: string;
  header: string;
  text: string;
}) {
  return (
    <div className="flex font-medium items-start gap-x-5 justify-start">
      <img alt="" src={image} className="w-[50px] xl:w-[70px] object-cover" />
      <div className="flex flex-col items-start gap-y-3 justify-start">
        <h2 className="font-semibold text-lg sm:text-xl">{header}</h2>
        <p className="">{text}</p>
      </div>
    </div>
  );
}

/**
   <div className="w-full  grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-10 lg:gap-6">
          <Widget
            image={solar}
            header="Multiple Payment options"
            text="We support multiple payment methods: Visa, MasterCard, Bank Transfer, Cryptocurrency and lots more"
          />
          <Widget
            image={diploma}
            header="Incredible Transaction Fee"
            text="Our transaction fees and rates are incredibly low for all customers and all market makers"
          />
          <Widget
            image={blockchain}
            header="Strong Security"
            text="We offer you an unbeatable protection against DDoS attacks with full data encryption for all your transactions."
          />
          <Widget
            image={world}
            header="World Coverage"
            text="We provide services in 80% countries around all the globe located in various continents."
          />
        </div>
 */
