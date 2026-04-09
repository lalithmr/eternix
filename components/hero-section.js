import CrownLogo from "./crown-logo";

export default function HeroSection() {
  return (
    <header className="hero">
      <div className="hero-content reveal" id="hero">
        <div className="hero-logo">
          <CrownLogo />
        </div>
        <p className="eyebrow">Doddaballapura's Chess Training Platform</p>
        <h1>ETERNIX</h1>
        <p className="hero-subtitle">The Game Never Ends.</p>
        <p className="hero-copy">
          Chess Training &#8226; Puzzle Solving &#8226; Mindset
        </p>

        <div className="hero-actions">
          <a className="button" href="#cta">
            5-Day Intensive Program – ₹500
          </a>
        </div>
      </div>
    </header>
  );
}
