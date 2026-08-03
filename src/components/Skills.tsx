import { skillCards } from '../data/portfolio';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <h2 className="section-title">Technical Capabilities</h2>
      <div className="skill-grid">
        {skillCards.map((card) => (
          <div className={`skill-card ${card.className}`} key={card.title}>
            <h3>{card.title}</h3>
            <ul className="skill-details">
              {card.details.map((detail) => (
                <li key={detail.label}>
                  <strong>{detail.label}</strong> {detail.text}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
