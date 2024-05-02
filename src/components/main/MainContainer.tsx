import { Outlet } from "react-router-dom";
import { Footer } from "../footer/Footer";
import { TopNav } from "../topNav/TopNav";

export default function MainContainer() {
  return (
    <main className="w-full h-full ">
      <TopNav />

      <Outlet />

      <Footer />
    </main>
  );
}
