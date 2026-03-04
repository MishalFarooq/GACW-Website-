// --- Internal Home Gallery Component (GCW Style) ---
const HomeGallery = () => {
  const visuals = [
    {
      id: 1,
      title: "Science Exhibition",
      img: "/Science exhibition.jpg", // Local image path
    },
    {
      id: 2,
      title: "Funfair 2025",
      img: "/funfair1.jpeg", // Local image path
    },
    {
      id: 3,
      title: "Sports Day",
      img: "/Science exhibition1.jpg", // Jab tak sports day ki pic nahi hai, ye use karein
    },
    {
      id: 4,
      title: "Kashmir Day",
      img: "/kashmir.png", // Local image path
    },
  ];

  return (
    <section style={{ padding: "80px 5%", backgroundColor: "#fff" }}>
      <div style={{ textAlign: "center", marginBottom: "40px" }}>
        <p style={subHeadingStyle}>VISUALS</p>
        <h2 style={mainHeadingStyle}>College At A Glance</h2>
        <div
          style={{
            width: "40px",
            height: "3px",
            backgroundColor: "#0d1137",
            margin: "15px auto",
          }}
        ></div>
      </div>
      <div className="home-gallery-grid" style={galleryGridStyle}>
        {visuals.map((item) => (
          <div key={item.id} className="home-gallery-card">
            <div
              style={{
                position: "relative",
                height: "220px",
                overflow: "hidden",
                border: "1px solid #ddd", // Border added for professional look
                padding: "4px",
                backgroundColor: "#fff",
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                // Agar path galat ho to placeholder dikhaye
                onError={(e) =>
                  (e.target.src =
                    "https://via.placeholder.com/400x300?text=College+Photo")
                }
              />
              <div className="gallery-dark-strip">
                <span>{item.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <Link to="/life-at-college/gallery">
          <button className="gallery-view-btn">VIEW ALL GALLERY</button>
        </Link>
      </div>
    </section>
  );
};
