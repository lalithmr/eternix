const stats = [

  {
    type: "label",
    value: "Expert",
    label: "Coaching",
  },
  {
    type: "label",
    value: "10+",
    label: "Daily puzzles",
  },
];

export default function AboutSection() {
  return (
    <section className="section about" id="about">
      <div className="section-intro reveal">
        <p className="eyebrow">About Eternix</p>
        <h2>Built for players who want discipline, confidence, and edge.</h2>
        <p>
          Eternix helps students in Bengaluru sharpen calculation, pattern
          recognition, and decision-making through modern coaching,
          structured practice, and a high-performance learning environment.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-copy reveal reveal-left">
          <div className="glass-panel">
            <p>
              Every session is designed to feel intentional: fewer
              distractions, stronger fundamentals, deeper tactical awareness,
              and a mindset that holds under pressure.
            </p>
            <p>
              From first-time learners to ambitious tournament players, our
              training system blends classic chess discipline with a modern,
              premium experience.
            </p>
          </div>
        </div>

        <div className="stats-grid">
          {stats.map((stat) => (
            <article className="stat-card reveal reveal-right" key={stat.label}>
              {stat.type === "count" ? (
                <div>
                  <span className="stat-number" data-target={stat.value}>
                    0
                  </span>
                  <span className="stat-suffix">{stat.suffix}</span>
                </div>
              ) : (
                <span className="stat-label">{stat.value}</span>
              )}
              <p>{stat.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
