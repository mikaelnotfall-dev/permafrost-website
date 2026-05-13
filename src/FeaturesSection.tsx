import "./FeaturesSection.css";

import Card from "./Card";
import { FaMemory, FaNewspaper } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";

function FeaturesSection() {
  return (
    <section className="features-section">
      <Card icon={FaMemory} title="C++23 Core"
        desc="Language, that powers browsers, operating systems and game engines, is used for maximum speed with minimum overhead." />
      <Card icon={FaComputer} title="Support for Low-End Devices"
        desc="Designed specifically to run on slow hardware to utilize it and bring to life again." />
      <Card icon={FaNewspaper} title="MIT License"
        desc="The project is fully open source and available for all to contribute to!" />
    </section>
  );
}

export default FeaturesSection;
