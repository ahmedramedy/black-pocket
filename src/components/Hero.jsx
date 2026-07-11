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
   <div
  style={{
    width: "100%",
    maxWidth: "1200px",
    padding: "0 20px",
    boxSizing: "border-box",
  }}
>
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

<div
  style={{
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: "30px",
  }}
>

  <div
  className="card"
  style={{
width: "100%",
maxWidth: "260px",
background: "rgba(255,255,255,0.05)",    border: "1px solid #39ff14",
    boxShadow: "0 0 15px rgba(57, 255, 20, 0.25)",
    borderRadius: "15px",
    padding: "20px"
  }}>
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

  <div 
  className="card"
  style={{
width: "100%",
maxWidth: "260px",
background: "rgba(255,255,255,0.05)",    border: "1px solid #39ff14",
    boxShadow: "0 0 15px rgba(57, 255, 20, 0.25)",
    borderRadius: "15px",
    padding: "20px"
  }}>
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

  <div 
  className="card"style={{
width: "100%",
maxWidth: "260px",
background: "linear-gradient(180deg, #111, #1b1b1b)",
    border: "1px solid #39ff14",
    boxShadow: "0 0 15px rgba(57, 255, 20, 0.25)",
    borderRadius: "15px",
    padding: "20px"
  }}>
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

  <div 
  className="card"style={{
width: "100%",
maxWidth: "260px",
   background: "linear-gradient(180deg, #111, #1b1b1b)",
    border: "1px solid #39ff14",
    boxShadow: "0 0 15px rgba(57, 255, 20, 0.25)",
    borderRadius: "15px",
    padding: "20px"
  }}>
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
      
    <div
  style={{
marginTop: "20px",
    backgroundColor: "#111",
    border: "1px solid #39ff14",
    borderRadius: "15px",
    padding: "25px",
    width: "90%",
    maxWidth: "900px",
  }}
>
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
maxWidth: "380px",
marginTop: "20px",
   background: "linear-gradient(90deg, #39ff14, #00c853)",
    color: "black",
padding: "50px 60px",
    borderRadius: "15px",
border: "2px solid #39ff14",
    textDecoration: "none",
    fontSize: "32px",
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