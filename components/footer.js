import CrownLogo from "./crown-logo";

const whatsappUrl =
  "https://wa.me/919591123773?text=Hi%20ETERNIX%2C%20I%20want%20to%20enroll%20in%20the%205-Day%20Intensive%20Program.";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-grid">
        <div className="footer-block reveal">
          <a className="brand-mini" href="#hero">
            <CrownLogo className="brand-mark" />
            <span>ETERNIX</span>
          </a>
          <p className="footer-tagline">The Game Never Ends.</p>
        </div>

        <div className="footer-block reveal">
          <h3>Links</h3>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#programs">Programs</a>
            </li>
          </ul>
        </div>

        <div className="footer-block reveal">
          <h3>Contact</h3>
          <ul>
            <li>Doddaballapura, India</li>
            <li>
              <a href={whatsappUrl} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/eternix.chess"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
