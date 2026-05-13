import "./App.css";

import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";

const currentYear: string = new Date().getFullYear().toString();

function App() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <FeaturesSection />

      <footer>
        &copy; {currentYear} Permafrost Project. Not affiliated with Mojang AB.
      </footer>
    </>
  );
}

export default App;
