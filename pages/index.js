import Link from 'next/link';

export default function Home() {
  return (
    <div>
      {/* 🧭 Navigation */}
      <nav style={{
  position: 'sticky',
  top: 0,
  backgroundColor: 'var(--color-background)',
  padding: '1rem 2rem',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  zIndex: 1000,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center'
}}>
  <div>
    <img src="/logo.png" alt="Corevolve Logo" style={{ height: '40px' }} />
  </div>
  <ul style={{
    display: 'flex',
    listStyle: 'none',
    gap: '2rem',
    margin: 0,
    padding: 0,
    fontSize: '1rem'
  }}>
    <li><a href="#hero">Home</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#method">Method</a></li>
    <li><a href="#case-stories">Case Stories</a></li>
    <li><a href="/survey">Start Now</a></li>
  </ul>
</nav>

      {/* 🏠 Hero Section */}
      <section id="hero" style={{ padding: '8rem 2rem', textAlign: 'center' }}>
        <h1>We help growing businesses keep their soul while they scale.</h1>
        <p>Aligning leadership, culture, and purpose to unlock sustainable growth.</p>
        <Link href="/survey">
          <button style={{ marginTop: '2rem', padding: '1rem 2rem', fontSize: '1.2rem', backgroundColor: '#007b7f', color: 'white', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
            Start Your Discovery Process
          </button>
        </Link>
      </section>

      {/* 🧭 About Corevolve */}
     <section id="about" style={{ padding: '7rem 2rem' }} data-aos="fade-up">
        <h2>About Corevolve</h2>
        <p>To help organizations evolve without losing their core.</p>
        <ul>
          <li>Core truth first</li>
          <li>Evolution with intention</li>
          <li>Real over right</li>
          <li>With, not to</li>
          <li>Purpose in action</li>
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
      <section id="method" style={{ padding: '7rem 2rem' }} data-aos="fade-up">
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
      <section id="case-stories" style={{ padding: '7rem 2rem' }} data-aos="fade-up">
        <h2>Case Stories</h2>
        <p>“They were scaling fast, but something felt off…”</p>
        <p>[Case study placeholders with quote, before/after and results]</p>
      </section>
<footer style={{
  backgroundColor: 'var(--color-primary)',
  color: 'white',
  textAlign: 'center',
  padding: '2rem',
  fontSize: '0.9rem'
}}>
  <p>© {new Date().getFullYear()} Corevolve. All rights reserved.</p>
  <p>Website designed with care to align culture, leadership, and purpose.</p>
</footer>

    </div>
  );
}
