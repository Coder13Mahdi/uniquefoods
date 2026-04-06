import { useState } from "react";
import { menuData } from "../data/menu";

export default function MenuSection() {
  const categories = Object.keys(menuData);
  const [activeCategory, setActiveCategory] = useState(categories[0]);

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
          fontSize: "2.75rem",
          fontWeight: 900,
          marginBottom: "2.5rem",
          textAlign: "center",
          color: "var(--brand-orange-light)",
          textShadow:
            "0 0 20px rgba(255,150,80,0.8), 0 0 20px rgba(150,80,255,0.6)",
        }}
      >
        Our Menu
      </h2>

      {/* Category Tabs */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          flexWrap: "wrap",
          marginBottom: "2.5rem",
        }}
      >
        {categories.map((cat) => {
          const isActive = activeCategory === cat;

          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "0.75rem 1.75rem",
                borderRadius: "30px",
                border: "none",
                cursor: "pointer",
                fontWeight: 700,
                letterSpacing: "0.5px",
                background: isActive
                  ? "linear-gradient(90deg, var(--brand-orange), var(--brand-purple))"
                  : "rgba(255,255,255,0.08)",
                color: isActive ? "#1a0f1f" : "white",
                boxShadow: isActive
                  ? "0 0 20px rgba(255,150,80,0.7), 0 0 20px rgba(150,80,255,0.7)"
                  : "none",
                transition: "0.25s ease",
              }}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Menu Items */}
      <div style={{ display: "grid", gap: "1.5rem" }}>
        {menuData[activeCategory].map((item) => (
          <div
            key={item.name}
            style={{
              padding: "1.5rem",
              borderRadius: "14px",
              background: "rgba(255,255,255,0.06)",
              borderLeft: "4px solid var(--brand-orange)",
              boxShadow:
                "0 0 12px rgba(255,150,80,0.25), 0 0 12px rgba(150,80,255,0.25)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "0.5rem",
              }}
            >
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  color: "var(--brand-orange-light)",
                  textShadow: "0 0 10px rgba(255,150,80,0.5)",
                }}
              >
                {item.name}
              </h3>

              {item.price && (
                <span
                  style={{
                    fontWeight: 700,
                    color: "var(--brand-purple-light)",
                    textShadow: "0 0 10px rgba(150,80,255,0.6)",
                  }}
                >
                  ${item.price}
                </span>
              )}
            </div>

            {item.description && (
              <p style={{ opacity: 0.85, fontSize: "0.95rem" }}>
                {item.description}
              </p>
            )}

            {item.note && (
              <p
                style={{
                  marginTop: "0.35rem",
                  fontSize: "0.85rem",
                  color: "var(--brand-orange)",
                  opacity: 0.9,
                }}
              >
                {item.note}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

