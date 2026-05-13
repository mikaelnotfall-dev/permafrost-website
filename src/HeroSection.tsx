import "./HeroSection.css";

import Button from "./Button";

function HeroSection() {
  return (
    <section className="hero fade-in">
      <h1>Fast. Lightweight. <br />Permafrost.</h1>
      <p>C++23 Minecraft: Java Edition server implementation dedicated for maximum performance and low latency.</p>
      <div style={{ display: "flex", gap: "15px" }}>
        <Button caption="Download Latest" link="#" />
      </div>
    </section>
  );
}

export default HeroSection;
