"use client";

const coaches = [
    {
        name: "Lalith Kumar",
        title: "FIDE Rated Player",
        experience: "10+ Years",
        rating: "4.9",
        students: "200+",
        image: "/coach1.jpg",
        profileLink: "https://ratings.fide.com/profile/25690280"
    },
];

export default function CoachSection() {
    return (
        <section className="section coach" id="coach">
            <div className="container">

                {/* HEADER */}
                <div className="section-intro">
                    <p className="eyebrow">Our Coach</p>
                    <h2>Meet Our Expert</h2>
                    <p>Learn from experienced and passionate chess professional.</p>
                </div>

                {/* CARDS */}
                <div className="coach-grid">
                    {coaches.map((coach, index) => (
                        <a
                            href={coach.profileLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="coach-card glass-panel"
                            key={index}
                        >

                            <img src={coach.image} alt={coach.name} />

                            <h3>{coach.name}</h3>
                            <p className="title">{coach.title}</p>

                            <p className="experience">🏆 {coach.experience}</p>

                            <div className="stats">
                                <span>⭐ {coach.rating}</span>
                                <span>👨‍🎓 {coach.students}</span>
                            </div>

                        </a>
                    ))}
                </div>

            </div>
        </section>
    );
}