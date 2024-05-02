import { Button } from "../ui/Button";
export function WhatWeDo() {
  return (
    <div className="w-full px-4 py-8  sm:py-10 sm:px-8 my-8 backg sm:my-12 backg flex items-start justify-start flex-col xl:flex-row gap-8">
      <div className="flex text-white flex-col items-start justify-start gap-y-4 sm:gap-y-6 w-full xl:w-[70%]">
        <h1 className="text-xl sm:text-4xl font-semibold">
          We Accept Local Currency, Also CryptoCurrencies
        </h1>
        <p>
          Our platform is designed to meet the evolving needs of modern
          consumers and businesses in an increasingly digital world. We
          understand that financial transactions can span across traditional
          boundaries, which is why we offer a versatile solution that allows for
          seamless payments in both local fiat currencies and cryptocurrencies
        </p>

        <p>
          For those operating within conventional financial systems, we provide
          robust support for all major fiat currencies, enabling you to securely
          send and receive payments in your local currency. Our platform
          integrates with established payment gateways and banking networks,
          ensuring a smooth experience aligning with existing financial
          infrastructures.
        </p>
        <p>
          At the same time, we recognize the growing adoption of
          cryptocurrencies and the potential they hold for transforming global
          finance. As an early adopter in this space, our platform natively
          supports a wide range of popular cryptocurrencies like Bitcoin,
          Ethereum, and others. This allows our users to take advantage of the
          speed, security, and decentralized nature of blockchain technology for
          their financial transactions.
        </p>

        <p>
          Whether you prefer the stability of fiat currencies or the innovative
          capabilities of cryptocurrencies, our platform offers a comprehensive
          solution tailored to your needs. With robust security measures,
          transparent pricing, and user-friendly interfaces, we empower
          individuals and businesses to seamlessly navigate the evolving
          financial landscape without being constrained by outdated systems or
          technological barriers.
        </p>
      </div>

      <div className="max-w-xl xl:w-[30%] ">
        <div className="w-full h-[300px] rounded-xl flex pb-3 px-3 bg-white flex-col items-start justify-start">
          <h2 className="font-semibold text-base sm:text-xl border-b-2 border-zinc-700 py-3">
            For CryptoCurrency Payment
          </h2>
          <div className="w-full h-[250px] p-3">
            <img
              src="https://trustflick.com/assets/landing/img/crypto-currency.png"
              className="w-full h-full object-contain"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}
