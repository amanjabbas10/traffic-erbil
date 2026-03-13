import img1 from "../images/logo mror.png";
const kre = () => {
  return (
    <div>
      <nav className="nav-1">
        <h1>
          <b>به‌ڕێوه‌به‌رایه‌تى هاتووچۆى هه‌ولێر</b>
          <h1 style={{ textAlign: "center", marginLeft: "0.2rem" }}>
            TRAFFIC POLICE
          </h1>
        </h1>
        <img src={img1} />
        <a href="#">Home</a>
        <a href="#About">About</a>
        <a href="#Contac">Contac</a>
      </nav>

      <div className="back-1">
        <a href="/">Back</a>
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
        <a href="./katekre">
          <h2 style={{ width: "100px" }}>کاتی</h2>
        </a>
        <a href="./nwekre">
          <h2>نۆی کردنەوە</h2>
        </a>
      </div>
    </div>
  );
};

export default kre;
