const programs = [
  {
    tier: "Beginner",
    title: "Foundation Track",
    description:
      "Learn piece activity, opening principles, basic tactics, and a steady thinking process from day one.",
  },
  {
    tier: "Intermediate",
    title: "Competitive Track",
    description:
      "Strengthen calculation, tactical vision, game review habits, and practical tournament strategy.",
  },
  {
    tier: "Advanced",
    title: "Performance Track",
    description:
      "Push into deeper preparation, psychological resilience, and elite-level decision-making under time pressure.",
  },
];

const whatsappUrl =
  "https://wa.me/919591123773?text=Hi%20ETERNIX%2C%20I%20want%20to%20enroll%20in%20the%205-Day%20Intensive%20Program.";

export default function ProgramsSection() {
  return (
    <section className="section programs" id="programs">
      <div className="section-intro reveal">
        <p className="eyebrow">Programs</p>
        <h2>Training tracks that grow with your game.</h2>
      </div>

      <div className="program-grid">
        {programs.map((program) => (
          <article className="program-card reveal" key={program.title}>
            <p className="program-tier">{program.tier}</p>
            <h3>{program.title}</h3>
            <p>{program.description}</p>
            <a
              className="button"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              Enroll Now
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
