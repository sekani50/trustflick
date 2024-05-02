import { Button } from "../ui/Button";
import one from "../../assets/png/one1.svg";
import two from "../../assets/png/add-user.svg";
import three from "../../assets/png/coin.svg";
export function Hero() {
  return (
    <>
      <div className="w-full h-[430px] sm:h-[650px] banner-bg ">
        <div className="w-full h-full absolute inset-0 bg-black/70 z-10 px-4 py-8 sm:py-20 sm:px-10">
          <div className="w-full flex flex-col items-center text-gray-50 md:items-start justify-center md:justify-start gap-y-6 ">
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

            <Button className="text-purple-500 bg-white h-14 rounded-[3rem] px-10 sm:px-20 font-semibold">
              Get Started
            </Button>

            <div className="w-full 2xl:w-[80%] text-zinc-700 hidden sm:grid sm:absolute  sm:-bottom-20 mx-auto inset-x-0 xl:rounded-lg gap-5 p-4 sm:py-12 px-8  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-white shadow-lg p-">
              <Widget
                image={two}
                header="Register Account"
                text="Register for an account and get verified. It's totally easy and free"
              />
              <Widget
                image={three}
                header="Deposit and Transact"
                text="Deposit to your account and perform transactions on the fly"
              />
              <Widget
                image={one}
                header="Get Loans"
                text="Apply for loans and get response in less time"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full 2xl:w-[80%] text-zinc-700 sm:hidden grid sm:absolute  sm:-bottom-20 mx-auto inset-x-0 xl:rounded-md gap-5 p-4 sm:py-12 px-8  grid-cols-1  bg-white shadow-lg ">
        <Widget
          image={two}
          header="Register Account"
          text="Register for an account and get verified. It's totally easy and free"
        />
        <Widget
          image={three}
          header="Deposit and Transact"
          text="Deposit to your account and perform transactions on the fly"
        />
        <Widget
          image={one}
          header="Get Loans"
          text="Apply for loans and get response in less time"
        />
      </div>
    </>
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
    <div className="flex items-start gap-x-5 justify-start">
      <img alt="" src={image} className="w-[50px] xl:w-[70px] object-cover" />
      <div className="flex flex-col items-start gap-y-3 justify-start">
        <h2 className="font-semibold text-lg sm:text-xl">{header}</h2>
        <p className="">{text}</p>
      </div>
    </div>
  );
}
