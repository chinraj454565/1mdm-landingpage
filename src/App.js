import {CallToActionBanner} from "./components/CallToActionBanner";
import { FeaturesSection} from "./components/FeaturesSection";
import { HeroSection} from "./components/HeroSection";
import { SuccessStories} from "./components/SuccessStories";
import { VideoandText} from "./components/VideoandText";
import { AcheivementsSection} from "./components/AcheivementsSection";



import {Header} from "./pages/Hero";
import {Footer} from "./pages/Footer";



const App = () => {
 

  return (
    <div className="landing-page">
     <Header />
      <main>
        <HeroSection />
        <VideoandText />
        <AcheivementsSection />
        <FeaturesSection />
        <SuccessStories />
        <CallToActionBanner />
      </main>
      <Footer />
    </div>
  );
};

export default App;
