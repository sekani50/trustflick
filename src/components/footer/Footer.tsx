import { Link } from "react-router-dom";
import logo from "../../assets/png/logo.webp";
export function Footer() {
  return (
    <footer className="w-full px-4 py-8 sm:px-8 sm:py-10 bg-[#eeeeee]">
      <div className="grid w-full grid-cols-1 gap-4 items-center md:items-start md:grid-cols-4">
        <div className="flex flex-col items-start justify-start gap-y-14">
        <img src={logo} className="w-[100px] h-[50px] object-cover mix-blend-multiply" alt="logo" />

          <div className="flex items-center gap-x-4">
            <Link to="https://facebook.com/teesasapp">
              <img
                src="https://teesas.com/assets/matric/images/fb-icon.png"
                alt=""
              />
            </Link>
            <Link to="https://instagram.com/teesasapp/">
              <img
                src="https://teesas.com/assets/matric/images/insta-icon.png"
                alt=""
              />
            </Link>
            <Link to="https://twitter.com/teesasapp">
              <img
                src="https://teesas.com/assets/matric/images/x-icon.png"
                alt=""
              />
            </Link>
            <Link to="https://www.linkedin.com/company/72447145/">
              <img
                src="https://teesas.com/assets/matric/images/linked-icon.png"
                alt=""
              />
            </Link>
            <Link to="https://www.youtube.com/channel/UCKUiNZOfRh7ZWWdILQzviOA">
              <img
                src="https://teesas.com/assets/matric/images/youtube-icon.png"
                alt=""
              />
            </Link>
            <Link to="https://www.tiktok.com/@teesas">
              <img
                src="https://teesas.com/assets/matric/images/tiktok-icon.png"
                alt=""
              />
            </Link>
          </div>
        </div>

        <div className="w-full flex flex-col items-center md:col-span-2 md:items-start gap-4">
          <div className="flex flex-wrap items-center font-semibold text-sm sm:text-base md:items-start gap-6">
            <Link to="/"> FAQs</Link>
            <Link to="/"> About Us</Link>
            <Link to="/"> Privacy Policy</Link>
            <Link to="/"> Terms and Condition</Link>
            <Link to="/"> Contact us</Link>
            <Link to="/"> Donate a device</Link>
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <strong className="flex items-center gap-x-2">
              Lagos, Nigeria{" "}
            </strong>
            Izedon Place, 2 Prince Samuel Adedoyin <br /> St, Ikate, Lekki,
            Lagos
          </div>
        </div>

        <div className="">
          <div className="flex items-center gap-x-2">
            <Link to="https://play.google.com/store/apps/details?id=app.teesas">
              <img
                src="https://teesas.com/assets/matric/images/g-btn.png"
                alt=""
              />
            </Link>
            <Link to="">
              <img
                src="https://teesas.com/assets/matric/images/apple-btn.png"
                alt=""
              />
            </Link>
          </div>
        </div>
      </div>

      <p className="text-center md:text-start mt-4 sm:mt-7">{`© ${new Date().getFullYear()}  GoLearn. All Rights Reserved`}</p>
    </footer>
  );
}
