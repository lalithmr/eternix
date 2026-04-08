const whatsappUrl =
  "https://wa.me/919591123773?text=Hi%20ETERNIX%2C%20I%20want%20to%20enroll%20in%20the%205-Day%20Intensive%20Program.";

export default function CtaSection() {
  return (
    <section className="section cta-band reveal" id="cta">
      <p className="eyebrow">Accelerated Training</p>
      <h2>Elevate Your Standard.</h2>
      <p>Commit to the 5-Day Intensive Chess Program.</p>
      <a className="button button-shimmer" href={whatsappUrl}>
        Enroll Now
      </a>
    </section>
  );
}
