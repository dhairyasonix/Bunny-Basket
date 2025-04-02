import AboutUs from "./Components/AboutUs";
import FeaturesSection from "./Components/FeaturesSection";
import LandingPage from "./Components/LandingPage";
import Navbar from "./Components/Navbar";

export default function App() {
  return (
    <div className=" w-full h-screen">
    <Navbar/>
    <LandingPage/>
    <FeaturesSection/>
    <AboutUs/>
    </div>
  );
}
