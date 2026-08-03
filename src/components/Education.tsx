import { education } from '../data/portfolio';

export default function Education() {
  return (
    <section id="education" className="section">
      <h2 className="section-title">Education &amp; Honors</h2>
      <div className="education-timeline">
        {education.map((item) => (
          <div className="info-card" key={`${item.school}-${item.badge}`}>
            <span className="date-badge">{item.badge}</span>
            <h3>{item.school}</h3>
            <p className="edu-sub">
              <strong>{item.degree}</strong> {item.major}
            </p>
            <p className="edu-loc">{item.location}</p>
            {item.highlight && <span className="highlight-text">{item.highlight}</span>}
          </div>
        ))}
      </div>
    </section>
  );
}
