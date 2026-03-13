import img1 from "../images/logo mror.png";
import { Link } from "react-router-dom";

const SharedNav = () => {
  return (
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
      <a href="#Fines">Fines</a>
      <a href="#Contact">Contact</a>
    </nav>
  );
};

export default SharedNav;
