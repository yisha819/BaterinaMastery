export default function About() {
  return (
    <section id="about" className="section section-soft">
      <h2 className="section-title">About Me</h2>
      <div className="about-grid">
        <div className="photo-placeholder">
          <img
            src="/images/2x2%20ID%20PIC-Baterina%20(5).png"
            alt="Ayisha Baterina"
            className="profile-img"
          />
        </div>
        <div className="bio-content">
          <p className="section-text">
            Hi! I’m Ayisha. I’m a third-year <strong>Information Technology</strong> major at the{' '}
            <strong>University of the Cordilleras</strong>, specializing in systems design,
            full-stack engineering, and secure network infrastructures.
          </p>
          <p className="section-text">
            My technical journey focuses on building robust backend systems, automating technical
            workflows, and exploring <strong>intelligent data technologies</strong>. With hands-on
            proficiency in Python data systems, CCNA-certified networks, and Linux server
            operations, I am driven by the intersection of{' '}
            <strong>systems engineering and AI research</strong>. This portfolio showcases my
            analytical problem-solving and the engineering projects I have built.
          </p>
        </div>
      </div>
    </section>
  );
}
