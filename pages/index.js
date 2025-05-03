import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* 🧭 Navigation */}
      <nav style={{ position: 'sticky', top: 0, backgroundColor: '#fff', padding: '1rem', borderBottom: '1px solid #ccc', zIndex: 10 }}>
        <ul style={{ display: 'flex', listStyle: 'none', justifyContent: 'center', gap: '2rem', margin: 0, padding: 0 }}>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#method">Method</a></li>
          <li><a href="#case-stories">Case Stories</a></li>
          <li><a href="#survey">Start Now</a></li>
        </ul>
      </nav>

      {/* 🏠 Hero Section */}
      <section id="hero" style={{ padding: '5rem 2rem', textAlign: 'center' }}>
        <h1>We help growing businesses keep their soul while they scale.</h1>
        <p>Aligning leadership, culture, and purpose to unlock sustainable growth.</p>
        <Link href="/survey">
          <button style={{ marginTop: '2rem', padding: '1rem 2rem', fontSize: '1.2rem', backgroundColor: '#007b7f', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
            Start Your Discovery Process
          </button>
        </Link>
      </section>

      {/* 🧭 About Corevolve */}
      <section id="about" style={{ padding: '4rem 2rem', backgroundColor: '#f7f9fb' }}>
        <h2>About Corevolve</h2>
        <p>To help organizations evolve without losing their core.</p>
        <ul>
          <li>🔹 Core truth first</li>
          <li>🔹 Evolution with intention</li>
          <li>🔹 Real over right</li>
          <li>🔹 With, not to</li>
          <li>🔹 Purpose in action</li>
        </ul>
        <div>
          <h3>Where We Come From</h3>
          <p>[Story placeholder]</p>
          <h3>What We Stand For</h3>
          <p>[Story placeholder]</p>
          <h3>Where We’re Going</h3>
          <p>[Story placeholder]</p>
        </div>
      </section>

      {/* ⚙️ Method + Services */}
      <section id="method" style={{ padding: '4rem 2rem' }}>
        <h2>The Corevolve 4-Phase Approach</h2>
        <ol>
          <li><strong>Reveal:</strong> Discovery and diagnosis</li>
          <li><strong>Align:</strong> Strategic leadership alignment</li>
          <li><strong>Embed:</strong> Behaviors and systems integration</li>
          <li><strong>Sustain:</strong> Ongoing measurement and iteration</li>
        </ol>
        <h3>Our Services</h3>
        <ul>
          <li>Stakeholder Interviews</li>
          <li>Core Narrative Builder</li>
          <li>Culture Behavior Mapping</li>
          <li>90-Day Culture Roadmap</li>
          <li>Leadership Alignment Playbook</li>
          <li>Narrative Pulse Survey</li>
        </ul>
      </section>

      {/* 📚 Case Stories */}
      <section id="case-stories" style={{ padding: '4rem 2rem', backgroundColor: '#f7f9fb' }}>
        <h2>Case Stories</h2>
        <p>“They were scaling fast, but something felt off…”</p>
        <p>[Case study placeholders with quote, before/after and results]</p>
      </section>

      {/* 📝 Embedded Survey */}
      <section id="survey" style={{ padding: '4rem 2rem' }}>
        <h2>Client Discovery Survey</h2>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfypj-fj6lUjWK-AOLLgpGyvqRuInGiqWqHkQr9GOzbIkN8Ng/viewform?embedded=true"
          width="100%"
          height="1000"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          title="Corevolve Survey"
        >
          Loading…
        </iframe>
        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          <p style={{ fontSize: "1.2rem" }}>✅ Great! You just started your discovery journey!</p>
          <a
            href="https://calendly.com/your-link"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              marginTop: "1rem",
              padding: "0.8rem 1.5rem",
              backgroundColor: "#007b7f",
              color: "white",
              borderRadius: "6px",
              textDecoration: "none",
              fontSize: "1rem"
            }}
          >
            Schedule Your Discovery Call
          </a>
        </div>
      </section>
    </div>
  );
}
