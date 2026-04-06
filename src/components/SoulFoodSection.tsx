export default function SoulFoodSection() {
  return (
    <section
      style={{
        padding: "4rem 2rem",
        maxWidth: "900px",
        margin: "0 auto",
      }}
    >
      <h2
        style={{
          fontSize: "2.5rem",
          fontWeight: 900,
          marginBottom: "1rem",
          textAlign: "center",
          color: "var(--brand-orange-light)",
          textShadow:
            "0 0 20px rgba(255,150,80,0.8), 0 0 20px rgba(150,80,255,0.6)",
        }}
      >
        Soul Food Specials
      </h2>

      <p
        style={{
          textAlign: "center",
          marginBottom: "2.5rem",
          fontSize: "1.1rem",
          opacity: 0.9,
          color: "var(--brand-purple-light)",
          textShadow: "0 0 10px rgba(150,80,255,0.5)",
        }}
      >
        Available Monday – Thursday
      </p>

      <div
        style={{
          padding: "2rem",
          borderRadius: "14px",
          background: "rgba(255,255,255,0.06)",
          borderLeft: "4px solid var(--brand-purple)",
          boxShadow:
            "0 0 15px rgba(255,150,80,0.25), 0 0 15px rgba(150,80,255,0.25)",
        }}
      >
        <p
          style={{
            fontSize: "1.1rem",
            lineHeight: 1.6,
            opacity: 0.9,
          }}
        >
          Enjoy home‑style southern cooking with rotating daily specials.  
          Plates include classic soul food favorites prepared fresh with love.
        </p>

        <p
          style={{
            marginTop: "1rem",
            fontSize: "0.95rem",
            opacity: 0.75,
            fontStyle: "italic",
          }}
        >
          *Ask about today’s special when you call your order in.
        </p>
      </div>
    </section>
  );
}
