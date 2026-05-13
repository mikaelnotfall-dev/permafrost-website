import "./FeaturesSection.css";

import Card from "./Card";
import { FaMemory, FaNewspaper } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";

function FeaturesSection() {
  return (
    <section className="features-section">
      <Card icon={FaMemory} title="C++23 Core"
        desc="Language that powers popular browsers, operating systems and game engines and is used for maximum speed and minimum overhead." />
      <Card icon={FaComputer} title="Slow Devices Support"
        desc="Designed specifically to run on old, low-end hardware to utilize it and bring to life again." />
      <Card icon={FaNewspaper} title="MIT License"
        desc="The project is fully open source and available for all to contribute to!" />
    </section>
  );
}

export default FeaturesSection;
