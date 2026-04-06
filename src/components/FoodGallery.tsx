const galleryItems = [
  {
    name: "Wings",
    img: "/images/wings and onion rings.jpeg",
  },
  {
    name: "Cheeseburger",
    img: "/images/burgers wings fries.jpeg",
  },
  {
    name: "Kabob Style",
    img: "/images/sandwich kabob.jpeg",
  },
  {
    name: "Loaded Nachos",
    img: "/images/loaded nachos hotdog.jpeg",
  },
  {
    name: "Pork Chops",
    img: "/images/pork chops n fries.jpeg",
  },
  {
    name: "Loaded Fries",
    img: "/images/loaded fries and wings.jpeg",
  },
];

export default function FoodGallery() {
  return (
    <section style={{ padding: "4rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
      <h2
        style={{
          fontSize: "2.5rem",
          fontWeight: 900,
          marginBottom: "2.5rem",
          textAlign: "center",
          color: "var(--brand-orange-light)",
          textShadow:
            "0 0 20px rgba(255,150,80,0.8), 0 0 20px rgba(150,80,255,0.6)",
        }}
      >
        Fan Favorites
      </h2>

      <div
        style={{
          display: "grid",
          gap: "1.5rem",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        }}
      >
        {galleryItems.map((item) => (
          <div
            key={item.name}
            style={{
              position: "relative",
              borderRadius: "14px",
              overflow: "hidden",
              cursor: "pointer",
              boxShadow:
                "0 0 15px rgba(255,150,80,0.25), 0 0 15px rgba(150,80,255,0.25)",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.boxShadow =
                "0 0 25px rgba(255,150,80,0.45), 0 0 25px rgba(150,80,255,0.45)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "0 0 15px rgba(255,150,80,0.25), 0 0 15px rgba(150,80,255,0.25)";
            }}
          >
            <img
              src={item.img}
              alt={item.name}
              style={{
                width: "100%",
                height: "220px",
                objectFit: "cover",
                display: "block",
              }}
            />

            {/* Overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.7) 100%)",
              }}
            />

            {/* Label */}
            <div
              style={{
                position: "absolute",
                bottom: "1rem",
                left: "1rem",
                color: "white",
                fontWeight: 700,
                fontSize: "1.25rem",
                textShadow:
                  "0 0 10px rgba(255,150,80,0.8), 0 0 10px rgba(150,80,255,0.8)",
              }}
            >
              {item.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

