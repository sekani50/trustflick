import { Footer } from "../footer/Footer";
import { TopNav } from "../topNav/TopNav";
import { Activities } from "./Activities";
import { Hero } from "./Hero";
export default function Landing() {



  return (
    <main className="w-full h-full ">
    <TopNav/>
    <Hero/>
    <Activities/>

   
      <Footer />
    </main>
  );
}
