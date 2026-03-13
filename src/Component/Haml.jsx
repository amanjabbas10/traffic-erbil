import img1 from "../images/logo mror.png";
import { Link } from "react-router-dom";
const Haml = () => {
  return (
    <div>
      <nav className="nav-1">
        <h1>
          <b>به‌ڕێوه‌به‌رایه‌تى هاتووچۆى هه‌ولێر</b>
          <span
            style={{
              display: "block",
              textAlign: "center",
              marginLeft: "0.2rem",
              fontSize: "2rem",
              fontWeight: "bold",
            }}
          >
            TRAFFIC POLICE
          </span>
        </h1>
        <img src={img1} />
        <Link to="/">Home</Link>
        <a href="#About">About</a>
        <a href="#Contac">Contac</a>
      </nav>

      <div className="back-1">
        <Link to="/">Back</Link>
      </div>

      <h3
        style={{
          textAlign: "center",
          fontWeight: "600",
          border: "1px solid black",
          width: "25%",
          borderRadius: "5px",
          margin: "3rem auto",
        }}
      >
        جۆری ئوتومبیلەکەت هەلبژێرە
      </h3>

      <div className="K-nwe">
        <Link to="/katehaml">
          <h2 style={{ width: "100px" }}>کاتی</h2>
        </Link>
        <Link to="/nwehaml">
          <h2>نۆی کردنەوە</h2>
        </Link>
      </div>
    </div>
  );
};

export default Haml;
