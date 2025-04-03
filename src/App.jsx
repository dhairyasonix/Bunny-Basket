import AboutUs from "./Components/AboutUs";
import BakingExperts from "./Components/BakingExperts";
import FeaturesSection from "./Components/FeaturesSection";
import LandingPage from "./Components/LandingPage";
import Navbar from "./Components/Navbar";
import LazyLoadedSpecialBakes from "./Components/SpecialBakes";


export default function App() {
  return (
    <div className=" w-full h-screen">
    <Navbar/>
    <LandingPage/>
    <FeaturesSection/>
    <AboutUs/>
    <LazyLoadedSpecialBakes/>
    <BakingExperts/>
    </div>
  );
}
