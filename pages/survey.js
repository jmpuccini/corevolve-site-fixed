export default function SurveyPage() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Client Discovery Survey</h1>

      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfypj-fj6lUjWK-AOLLgpGyvqRuInGiqWqHkQr9GOzbIkN8Ng/viewform?embedded=true"
        width="100%"
        height="800"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
        title="Corevolve Survey"
      >
        Loading…
      </iframe>

      <div style={{ marginTop: "2rem", textAlign: "center" }}>
        <p>✅ Thank you for completing the discovery survey!</p>
        <a
          href="https://calendly.com/mendozasabbagh/30min"
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
          }}
        >
          Book a Call with Us
        </a>
      </div>
    </div>
  );
}
