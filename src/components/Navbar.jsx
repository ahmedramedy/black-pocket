function Navbar() {
  return (
    <nav
      style={{
       background: "rgba(17, 17, 17, 0.9)",
        color: "white",
        padding: "20px 40px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
  <h2
  style={{
    color: "#39ff14",
    fontSize: "32px",
    textShadow: "0 0 15px #39ff14",
    cursor: "pointer",
    margin: 0,
  }}
>
  BLACK POCKET
</h2>

      <a
href="https://t.me/+m6QxNMJczA80YjNk"
        target="_blank"
        rel="noreferrer"
        style={{
          color: "#00c853",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Join Telegram
      </a>
    </nav>
  );
}

export default Navbar;