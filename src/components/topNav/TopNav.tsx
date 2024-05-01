import { cn } from "../../lib/utils";
import { useNavigate, Link, useLocation } from "react-router-dom";
import logo from "../../assets/png/logo.webp";
import { Button } from "../ui/Button";
export function TopNav() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <nav className="w-full flex items-center z-[100] sticky top-0 inset-x-0 justify-between backg px-4 sm:px-8 py-4">
      <button onClick={() => navigate("/")}>
        <img
          src={logo}
          className="w-[150px] h-[40px] object-cover"
          alt="logo"
        />
      </button>
      <div className="flex items-center md:text-base font-semibold text-gray-50  gap-x-6">
        <div className="flex items-center gap-x-5">
          <Link
            className={cn("hover:underline", pathname === "/" && "underline")}
            to="/"
          >
            Home
          </Link>
          <Link
            className={cn("hover:underline ", pathname === "" && "underline ")}
            to=""
          >
            About Us
          </Link>
          <Link
            className={cn("hover:underline ", pathname === "" && "underline")}
            to=""
          >
            Our Loans
          </Link>
          <Link
            className={cn("hover:underline ", pathname === "" && "underline ")}
            to=""
          >
            Pages
          </Link>
          <Link
            className={cn("hover:underline", pathname === "" && "underline ")}
            to=""
          >
            Contact
          </Link>
        </div>

        <Button className="rounded-[3rem] px-6 border-gray-50 border-2  font-semibold backg">
          Sign Up
        </Button>
      </div>
    </nav>
  );
}
