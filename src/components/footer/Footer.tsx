import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/png/logo.webp";
import { Input } from "../ui/Input";
import { Button } from "../ui/Button";

export function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="w-full">
      <div className="w-full grid grid-cols-1 gap-6 md:grid-cols-3 xl:grid-cols-6 bg-[#111] px-4 sm:px-8  py-8 lg:py-10">
        <div className="w-full flex flex-col gap-y-6 items-start justify-start md:col-span-2">
          <button onClick={() => navigate("/")}>
            <img
              src={logo}
              className="w-[150px] h-[40px] object-cover"
              alt="logo"
            />
          </button>

          <p className="text-gray-400 italic">Where business meets family</p>
        </div>

        <div className="flex flex-col gap-y-6 items-start justify-start">
          <h2 className="font-semibold text-white text-lg sm:text-2xl">
            Useful Links
          </h2>

          <div className="flex flex-col items-start justify-start gap-y-2">
            <Link to="/" className="text-gray-400">
              Home
            </Link>
            <Link to="/our-loans" className="text-gray-400">
              Our Loans
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:col-span-3 gap-y-6 items-start justify-start">
          <h2 className="font-semibold text-white text-lg sm:text-2xl">
            Subscribe to Our NewsLetter
          </h2>

          <div className="w-full flex flex-col gap-y-5 items-start justify-start">
            <Input
            type="email"
            placeholder="Enter your email address"
            className="w-full rounded-none bg-transparent placeholder:text-gray-500  h-12 border-x-0 border-t-0  border-b border-purple-600" />

            <Button className="backg h-12 rounded-[3rem] text-white">
              Subscribe
            </Button>

            <p className="text-gray-400">
              Stay in the loop on the latest finance tips, product updates, and
              exclusive offers. Subscribe to our newsletter today!
            </p>
          </div>
        </div>
      </div>
      <div className="w-full text-white flex items-center justify-center bg-zinc-800 p-4 sm:p-6">
        <p>
          Copyright © <span className="text-purple-600"> Trustflick </span>-{" "}
          <span>{`${new Date().getFullYear()}.`}</span>{" "}
          <span>All Rights Reserved</span>
        </p>
      </div>
    </footer>
  );
}
