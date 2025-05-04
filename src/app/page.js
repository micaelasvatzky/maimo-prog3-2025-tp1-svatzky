import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import HomeContainer from "@/app/components/HomeContainer";
import HeroSection from "./components/HeroSection";

const title = "welcome to maimo";


export default function Home() {
  return (
    <div>
     <Navbar/>
     <HeroSection/>
     <HomeContainer/>
     <Footer/>
    </div>
  );
}

