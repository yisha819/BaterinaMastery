import { useState } from 'react';

import type { FormEvent } from 'react';

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.currentTarget.reset();
    setSent(true);
    window.setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact Information</h2>
      <div className="contact-container">
        <div className="contact-info">
          <div className="info-item">
            <h3>Email</h3>
            <p>Gmail: ayisha.baterina@gmail.com</p>
            <p>School Email: alb3472@students.uc-bcf.edu.ph</p>
          </div>
          <div className="info-item">
            <h3>Location</h3>
            <p>La Trinidad, Benguet</p>
          </div>
          <div className="info-item">
            <h3>Github</h3>
            <a
              href="https://github.com/yisha819"
              target="_blank"
              rel="noreferrer"
              className="github"
              aria-label="GitHub profile"
            >
              <svg
                viewBox="0 0 24 24"
                width="28"
                height="28"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email Address" required />
          <textarea placeholder="Your Message" required />
          <button type="submit" style={sent ? { background: 'var(--accent-green)' } : undefined}>
            {sent ? 'Message Sent! ✓' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}
