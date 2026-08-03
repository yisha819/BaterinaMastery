import { seminars, technicalProgression } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="section section-soft">
      <h2 className="section-title">Professional Growth &amp; Seminars</h2>

      <div className="timeline-split">
        <div className="timeline-col">
          <h3 className="subsection-header">Technical Progression</h3>
          {technicalProgression.map((item) => (
            <div className="info-card" key={item.title}>
              <h4>{item.title}</h4>
              <p className="role-desc">
                <strong>{item.role}</strong>
              </p>
              {item.meta && <span className="highlight-text">{item.meta}</span>}
              {item.body && <p className="prog-text">{item.body}</p>}
              {item.bulletPoints && (
                <ul className="exp-list">
                  {item.bulletPoints.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="timeline-col">
          <h3 className="subsection-header">Seminars &amp; Research Events</h3>
          <div className="seminar-grid">
            {seminars.map((seminar) => (
              <div className="seminar-item" key={seminar.title}>
                <span className="seminar-date">{seminar.date}</span>
                <h5>{seminar.title}</h5>
                <p className="seminar-meta">{seminar.meta}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
