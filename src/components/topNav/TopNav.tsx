import { cn } from "../../lib/utils";
import { useNavigate, Link, useLocation } from "react-router-dom";
import logo from "../../assets/png/logo.webp";
import { Button } from "../ui/Button";
import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
type TUser = {
  id: string;
  email: string;
  token: string;
};
export function TopNav() {
  const navigate = useNavigate();

  const { pathname } = useLocation();
  const [isOpen, setOpen] = useState(false);
  const user = localStorage.getItem("trustUser");
  const [userData, setUserData] = useState({} as TUser);

  useEffect(() => {
    if (user) {
      setUserData(JSON.parse(user));
    }
  }, [user]);

  function logOut() {
    localStorage.removeItem("trustUser");
    //navigate("/login");
  }

  function onClose() {
    setOpen((prev) => !prev);
  }
  return (
    <nav className="w-full flex items-center z-[100] sticky top-0 border-b border-gray-500 inset-x-0 justify-between backg px-4 sm:px-8 py-4">
      <div className="flex items-center gap-x-2">
        <button
          onClick={onClose}
          className="block md:hidden rounded-md text-white border-white border"
        >
          <FiMenu className="text-[22px]" />
        </button>
        <button onClick={() => navigate("/")}>
          <img
            src={logo}
            className="w-[150px] h-[40px] object-cover"
            alt="logo"
          />
        </button>
      </div>
      <div className="flex items-center md:text-base font-semibold text-gray-50  gap-x-6">
        <div className="hidden md:flex items-center gap-x-5">
          <Link
            className={cn("hover:underline ", pathname === "/" && "underline")}
            to="/"
          >
            Home
          </Link>
          <Link
            className={cn(
              "hover:underline ",
              pathname === "/loan" && "underline"
            )}
            to="/loan"
          >
            Apply for Loan
          </Link>
        </div>

        {!userData || !userData?.token ? (
          <Button
            onClick={() => navigate("/register")}
            className="rounded-[3rem] px-6 border-gray-50 border-2  font-semibold backg"
          >
            Sign Up
          </Button>
        ) : (
          <Button
            onClick={logOut}
            className="rounded-[3rem] px-6 border-gray-50 border-2  font-semibold backg"
          >
            Log Out
          </Button>
        )}
      </div>

      {isOpen && (
        <div className="text-white fixed font-medium text-sm sm:text-lg inset-0 w-full h-full flex flex-col items-center justify-start gap-y-5 md:hidden pt-20  z-[200] backg">
          <button onClick={onClose} className="absolute top-4 left-4">
            <MdClose className="text-[22px]" />
          </button>

          <button
            onClick={() => {
              navigate("/");
              onClose();
            }}
          >
            Home
          </button>
          <button
            onClick={() => {
              navigate("/");
              onClose();
            }}
          >
            Apply for Loan
          </button>

          {!userData || !userData?.token ? (
            <Button
              onClick={() => {
                navigate("/register");
                onClose();
              }}
              className="rounded-[3rem] px-6 border-gray-50 border-2  font-semibold backg"
            >
              Sign Up
            </Button>
          ) : (
            <Button
              onClick={() => {
                logOut();
                onClose();
              }}
              className="rounded-[3rem] px-6 border-gray-50 border-2  font-semibold backg"
            >
              Log Out
            </Button>
          )}
        </div>
      )}
    </nav>
  );
}
