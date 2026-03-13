import { Link } from "react-router-dom";

const Mator = () => {
  return (
    <div>
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
        <Link to="/katemator">
          <h2 style={{ width: "100px" }}>کاتی</h2>
        </Link>
        <Link to="/nwemator">
          <h2>نۆی کردنەوە</h2>
        </Link>
      </div>
    </div>
  );
};

export default Mator;
