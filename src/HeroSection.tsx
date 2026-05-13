import "./HeroSection.css";

import Button from "./Button";

function HeroSection() {
  return (
    <section className="hero">
      <span className="hero-contents fade-in">
        <h1>Fast. Lightweight. <br />Permafrost.</h1>
        <p>C++23 Minecraft: Java Edition server implementation dedicated for maximum performance and low latency.</p>
        <Button caption="Download Latest" link="#" />
      </span>
    </section>
  );
}

export default HeroSection;
