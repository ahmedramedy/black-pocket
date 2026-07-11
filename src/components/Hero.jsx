import "./Hero.css";
import Stats from "./Stats";
import About from "./About";
import {
  FaBook,
  FaChartLine,
  FaChartBar,
  FaHeadset,
} from "react-icons/fa";
function Hero() {
  return (
    <div
    className="hero-container"
              style={{
background:
  "radial-gradient(circle at top right, rgba(57,255,20,0.12), transparent 30%), linear-gradient(180deg, #050505 0%, #0b0b0b 50%, #111111 100%)",
  backgroundImage:
  "linear-gradient(rgba(57,255,20,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(57,255,20,0.05) 1px, transparent 1px)",
  backgroundSize: "40px 40px",
                color: "white",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "40px",
        animation: "fadeIn 1s ease",
overflow: "hidden",
        backgroundImage:
  "radial-gradient(circle at top right, rgba(57,255,20,0.08), transparent 35%)",
      }}
      >
  <div className="hero-content">
     <h1 style={{ fontSize: "clamp(30px, 6vw, 60px)", marginBottom: "10px" }}>
WELCOME TO      </h1>
 <h2

  style={{

fontSize: "clamp(42px, 8vw, 70px)",

    color: "#39ff14",

marginBottom: "10px",

    letterSpacing: "8px",

    textShadow: "0 0 25px #39ff14",

    fontWeight: "bold",

  }}

>

  BLACK POCKET

</h2>
<h2
  style={{
    marginTop: "40px",
    fontSize: "36px",
  }}
>
  عند الانضمام ستحصل على:
</h2>

<div className="features">

  <div className="feature-card">
<h3
  style={{
    color: "#39ff14",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  }}
>
  <FaBook />
  كورس شامل
</h3>    <p>هتحصل على كورس شامل مجانًا.</p>
  </div>

 <div className="feature-card">
  <h3
  style={{
    color: "#39ff14",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  }}
>
  <FaChartLine />
  إدارة مالية
</h3>
    <p>ملف احترافي لإدارة رأس المال.</p>
  </div>
<div className="feature-card feature-card-wide">
   <h3
  style={{
    color: "#39ff14",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  }}
>
  <FaChartBar />
  انديكيتور
</h3>
    <p>انديكيتور تحليلي مجاني.</p>
  </div>

 <div className="feature-card">
<h3
  style={{
    color: "#39ff14",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
  }}
>
  <FaHeadset />
  دعم فني
</h3>    <p>دعم فني وتدريب على مدار الساعة.</p>
  </div>

</div>
      
   <div className="feature-card">
  <h2
    style={{
      color: "white",
      marginBottom: "15px",
    }}
  >
    مميزات تانية كتير مستنياك
  </h2>

  <h2
    style={{
      color: "#39ff14",
      margin: "0",
    }}
  >
    انضم معنا وهتحصل عليها مجانًا
  </h2>
</div>

<a
className="join-btn"
  href="https://t.me/+T91wy78DjgBiMjI0"
  target="_blank"
  rel="noreferrer"
  style={{
    display: "inline-block",
width: "100%",
marginTop: "20px",
   background: "linear-gradient(90deg, #39ff14, #00c853)",
    color: "black",
    borderRadius: "15px",
border: "2px solid #39ff14",
    textDecoration: "none",
       fontWeight: "bold",
  }}
>
  اضغط هنا للانضمام
</a>
  <Stats />
 <About />
</div>
</div>
  );
}

export default Hero;