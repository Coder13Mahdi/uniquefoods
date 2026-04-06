export default function Footer() {
  return (
    <footer
      style={{
        marginTop: "4rem",
        padding: "3rem 2rem",
        background: "linear-gradient(180deg, #1a0f1f, var(--brand-purple-deep))",
        borderTop: "2px solid var(--brand-orange)",
        boxShadow:
          "0 -5px 25px rgba(255,150,80,0.25), 0 -5px 25px rgba(150,80,255,0.25)",
      }}
    >
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
          color: "white",
        }}
      >
        {/* Brand Name */}
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: 900,
            marginBottom: "1rem",
            color: "var(--brand-orange-light)",
            textShadow:
              "0 0 20px rgba(255,150,80,0.8), 0 0 20px rgba(150,80,255,0.6)",
          }}
        >
          Unique Soulfood N Sandwiches
        </h2>

        {/* Phone */}
        <p
          style={{
            fontSize: "1.25rem",
            fontWeight: 700,
            marginBottom: "1rem",
            color: "var(--brand-purple-light)",
            textShadow: "0 0 10px rgba(150,80,255,0.6)",
          }}
        >
          Call to Order: <span style={{ color: "var(--brand-orange)" }}>803‑757‑5224</span>
        </p>

        {/* Delivery */}
        <p
          style={{
            marginBottom: "1.5rem",
            fontSize: "1rem",
            opacity: 0.9,
          }}
        >
          Delivery Available — <strong>$3 and up</strong>
        </p>

        {/* Hours */}
        <div style={{ marginBottom: "1.5rem" }}>
          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              marginBottom: "0.5rem",
              color: "var(--brand-orange-light)",
            }}
          >
            Hours
          </h3>
          <p style={{ opacity: 0.85 }}>Monday – Thursday: 11AM – 8PM</p>
          <p style={{ opacity: 0.85 }}>Friday – Saturday: 11AM – 9PM</p>
          <p style={{ opacity: 0.85 }}>Closed Sunday</p>
        </div>

        {/* Location */}
        <div style={{ marginBottom: "1.5rem" }}>
          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: 700,
              marginBottom: "0.5rem",
              color: "var(--brand-orange-light)",
            }}
          >
            Location
          </h3>
          <p style={{ opacity: 0.85 }}>Columbia, South Carolina</p>
        </div>

        {/* Copyright */}
        <p
          style={{
            marginTop: "2rem",
            fontSize: "0.85rem",
            opacity: 0.6,
          }}
        >
          © {new Date().getFullYear()} Unique Soulfood N Sandwiches. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

