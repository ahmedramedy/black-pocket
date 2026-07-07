function Stats() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "40px",
        flexWrap: "wrap",
        marginTop: "70px",
        width: "100%",
      }}
    >
      <div
        style={{
          background: "#111",
          padding: "25px",
          borderRadius: "15px",
          width: "220px",
          border: "1px solid #39ff14",
        }}
      >
        <h1 style={{ color: "#39ff14", fontSize: "45px" }}>+24,000</h1>
        <p>عضو داخل المجتمع</p>
      </div>

      <div
        style={{
          background: "#111",
          padding: "25px",
          borderRadius: "15px",
          width: "220px",
          border: "1px solid #39ff14",
        }}
      >
        <h1 style={{ color: "#39ff14", fontSize: "45px" }}>95%</h1>
        <p>نسبة نجاح الصفقات</p>
      </div>

      <div
        style={{
          background: "#111",
          padding: "25px",
          borderRadius: "15px",
          width: "220px",
          border: "1px solid #39ff14",
        }}
      >
        <h1 style={{ color: "#39ff14", fontSize: "45px" }}>24/7</h1>
        <p>دعم فني متواصل</p>
      </div>
    </div>
  );
}

export default Stats;