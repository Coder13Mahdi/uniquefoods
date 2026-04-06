import { useEffect, useRef } from "react";

export default function Hero() {
  const collageRef = useRef<HTMLDivElement>(null);

  // PARALLAX EFFECT
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!collageRef.current) return;

      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20; // horizontal tilt
      const y = (e.clientY / innerHeight - 0.5) * 20; // vertical tilt

      collageRef.current.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        height: "85vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        background: "linear-gradient(180deg, #ffb86c 0%, #ff7f50 40%, #1a0f1f 100%)",
        padding: "2rem 1rem",
        textAlign: "center",
      }}
    >
      {/* === GLOW PULSE BEHIND COLLAGE === */}
      <div
        style={{
          position: "absolute",
          top: "15%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,150,80,0.35), rgba(150,80,255,0.25), transparent 70%)",
          filter: "blur(60px)",
          animation: "pulseGlow 6s ease-in-out infinite",
          zIndex: 0,
        }}
      />

      {/* === COLLAGE LAYER WITH PARALLAX === */}
      <div
        ref={collageRef}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "900px",
          height: "260px",
          marginBottom: "1.5rem",
          transition: "transform 0.15s ease-out",
          zIndex: 2,
        }}
      >
        {/* Wings */}
        <img
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=600"
          style={{
            position: "absolute",
            top: "10%",
            left: "5%",
            width: "180px",
            borderRadius: "12px",
            boxShadow:
              "0 0 25px rgba(255,150,80,0.6), 0 0 25px rgba(150,80,255,0.6)",
            transform: "rotate(-6deg)",
          }}
        />

        {/* Burger */}
        <img
          src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=600"
          style={{
            position: "absolute",
            top: "0%",
            right: "5%",
            width: "200px",
            borderRadius: "12px",
            boxShadow:
              "0 0 25px rgba(255,150,80,0.6), 0 0 25px rgba(150,80,255,0.6)",
            transform: "rotate(5deg)",
          }}
        />

        {/* Fish Sandwich */}
<img
  src="/images/philly.png"
  style={{
    position: "absolute",
    bottom: "0%",
    left: "25%",
    width: "220px",
    borderRadius: "12px",
    boxShadow:
      "0 0 25px rgba(255,150,80,0.6), 0 0 25px rgba(150,80,255,0.6)",
    transform: "rotate(3deg)",
  }}
/>
{/* Fries */}
<img
  src="/images/chicken tenders.png"
  style={{
    position: "absolute",
    bottom: "5%",
    right: "25%",
    width: "180px",
    borderRadius: "12px",
    boxShadow:
      "0 0 25px rgba(255,150,80,0.6), 0 0 25px rgba(150,80,255,0.6)",
    transform: "rotate(-4deg)",
  }}
/>
      </div>

      {/* === TEXT LAYER === */}
      <h1
        style={{
          fontSize: "3.5rem",
          fontWeight: 800,
          marginBottom: "1rem",
          textShadow: "0 0 20px rgba(255, 200, 150, 0.8)",
          zIndex: 3,
        }}
      >
        Unique Soulfood N Sandwiches
      </h1>

      <p
        style={{
          fontSize: "1.25rem",
          opacity: 0.9,
          marginBottom: "2rem",
          zIndex: 3,
        }}
      >
        Home of the best wings, sandwiches, baskets, and soul food in the city.
      </p>

      <button
        style={{
          padding: "1rem 2rem",
          fontSize: "1.1rem",
          fontWeight: 600,
          borderRadius: "50px",
          border: "none",
          cursor: "pointer",
          background:
            "linear-gradient(90deg, #ffd27f, #ffb86c, #ff9f50, #ff7f50)",
          color: "#1a0f1f",
          boxShadow: "0 0 20px rgba(255, 150, 80, 0.8)",
          transition: "transform 0.2s ease",
          zIndex: 3,
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        View Menu
      </button>

      {/* === KEYFRAMES === */}
      <style>
        {`
          @keyframes pulseGlow {
            0% { opacity: 0.4; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(1.15); }
            100% { opacity: 0.4; transform: scale(1); }
          }
        `}
      </style>
    </section>
  );
}



