import AboutUs from "./AboutUs"
import BakingExperts from "./BakingExperts";
import CustomerReview from "./CustomerReview";
import FeaturesSection from "./FeaturesSection";
import LandingPage from "./LandingPage";
import LazyLoadedSpecialBakes from "./SpecialBakes";

const Home = () => {
  return (
    <div>
<LandingPage/>
    <FeaturesSection/>
    <AboutUs/>
    <LazyLoadedSpecialBakes/>
    <BakingExperts/>
    <CustomerReview/>


    </div>
  )
}

export default Home