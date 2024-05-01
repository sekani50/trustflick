import diploma from "../../assets/png/diploma.svg";
import solar from "../../assets/png/shield.svg";
import world from "../../assets/png/worldwide.svg";
import blockchain from "../../assets/png/blockchain.svg";
export function Activities() {
  return (
    <div className="w-full px-4 sm:px-8 mb-8 sm:mb-12 sm:mt-32">
      <div className="w-full text-zinc-700 grid grid-cols-1 items-start lg:grid-cols-2 gap-6">
        <div className="w-full flex flex-col gap-y-4">
          <div className=" w-full space-y-2">
            <h2 className="font-semibold text-lg sm:text-3xl">
              Here is the{" "}
              <span className="text-purple-600 italic font-[kalam]">
                right place{" "}
              </span>{" "}
              for you to save money
            </h2>
            <p>
              The goal of Trustflick is to provide its users a unique, safe and
              secured platform for transactions in the field of finance and
              fintech.
            </p>
          </div>

          <ul className="w-full flex flex-col items-start justify-start gap-y-3">
            <li className="flex flex-col gap-y-2">
              <p className="font-semibold text-base sm:text-lg">
                Personal Banking
              </p>
              <p>Customer can enjoy the convenience of banking service.</p>
            </li>
            <li className="flex flex-col gap-y-2">
              <p className="font-semibold text-base sm:text-lg">
                Corporate Banking
              </p>
              <p>Get it on PC or Mobile to create, send and receive funds.</p>
            </li>
            <li className="flex flex-col gap-y-2">
              <p className="font-semibold text-base sm:text-lg">SME Banking</p>
              <p>
                For availing SME loan it is required to mortgage
                collateral/security.
              </p>
            </li>
            <li className="flex flex-col gap-y-2">
              <p className="font-semibold text-base sm:text-lg">
                Personal Loans
              </p>
              <p>
                Trustflick Bank offers a wide range of loans to suit your needs.
              </p>
            </li>
          </ul>

          <p>
            This is why we have used cutting-edge platform with extensive
            infrastructure intended to make things more convenient for our
            users.
          </p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-10 lg:gap-6">
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
      <div className="flex items-center backg rounded-full box-shade justify-center h-[80px] w-[80px] sm:w-[60px] sm:h-[60px] lg:w-[80px] lg:h-[80px]">
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
