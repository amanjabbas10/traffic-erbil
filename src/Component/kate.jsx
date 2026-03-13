import img1 from "../images/logo mror.png";
const kate = () => {
  return (
    <div>
      {/* otombele taebat balam kateee */}

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
        <a href="/tabat">Back</a>
      </div>
    </div>
  );
};

export default kate;
