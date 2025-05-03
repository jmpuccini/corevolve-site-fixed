import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: "2rem", textAlign: "center" }}>
      <h1>We help growing businesses keep their soul while they scale.</h1>
      <p>Aligning leadership, culture, and purpose to unlock sustainable growth.</p>

      <Link href="/survey">
        <button
          style={{
            marginTop: "2rem",
            padding: "1rem 2rem",
            fontSize: "1.2rem",
            backgroundColor: "#007b7f",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Start Your Discovery Process
        </button>
      </Link>
    </main>
  );
}
