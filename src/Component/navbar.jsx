import img1 from "../images/logo mror.png";
import img2 from "../images/a11.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const link = "https://htp.moi.gov.krd/exam/";
  // this  Dynamic Values in Templates     <===

  // const user = {
  //   name: "amanj",
  //   age: 20,
  // const age = 20;
  // };

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
        <a href="#Fines">Fines</a>
        <a href="#Contact">Contact</a>
      </nav>
      <div className="m-1">
        <div className="m-2">
          <div className="m-3">
            <h2>
              <b>
                بۆ خزمەتکردنتان لە پێدانی زانیاری دائیر مرور و جێبەجێ کردن هەموو
                جۆرە معملات دائیر مرور
              </b>
            </h2>
            <h3>جۆری ئوتومبیلەکەت هەلبژێرە</h3>
          </div>
        </div>
      </div>
      <div className="a-1">
        <div className="a-2">
          <div className="a-3">
            <h2>
              <Link to="/haml">بارهەلگر</Link>
            </h2>
            <h2>
              <Link to="/kre">کرێ</Link>
            </h2>
            <h2>
              <Link to="/tabat">تایبەت</Link>
            </h2>
          </div>
        </div>
      </div>
      <div className="a-a0">
        <div className="a-a1">
          <div className="a-a2">
            <h2>
              <Link to="/mator">ماتۆرسکیل</Link>
            </h2>

            <h2>
              <Link to="/gsht">کشتوکال</Link>
            </h2>

            <h2>
              <Link to="/bena">بیناسازی</Link>
            </h2>
          </div>
        </div>
      </div>
      <h1 className="h1-1" id="Fines">
        Fines The Cars
      </h1>
      <hr className="hr-1" />
      <br />
      <br />

      <h3 className="fines-1">
        لە جی پاریزگایەک بیت سزای ئۆتۆمبێله‌كه‌ت بزانە
      </h3>
      <br />
      <br />
      <button className="fines-2">
        <h2 style={{ fontWeight: "600" }}>پارێزگای هه‌ولێر</h2>
        <a href="https://htp.moi.gov.krd/fines_form.php" target="blank">
          بو زانینی سزای ئەتومبێتلەکەت کلیک لیرە بکە
        </a>
      </button>

      <button className="fines-2">
        <h2 style={{ fontWeight: "600" }}>پارێزگای سلێمانی</h2>
        <a href="https://www.sultraffic.com/fines" target="blank">
          بو زانینی سزای ئەتومبێتلەکەت کلیک لیرە بکە
        </a>
      </button>
      <button className="fines-2">
        <h2 style={{ fontWeight: "600" }}>پارێزگای دهوك</h2>
        <a href="https://dtp.moi.gov.krd/fines_form.php" target="blank">
          بو زانینی سزای ئەتومبێتلەکەت کلیک لیرە بکە
        </a>
      </button>
      <button className="fines-2">
        <h2 style={{ fontWeight: "600" }}> تاقیکردنەوە مۆلەتی شوفێری</h2>
        <a href={link} target="blank">
          تاقیکردنەوە مۆلەتی شوفێری لە به‌رێوه‌به‌رایه‌تى هاتووچۆى هه‌ولێر
        </a>
      </button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 className="h1-1" id="Contact">
        Contact Us
      </h1>
      <hr className="hr-1" />
      <br />
      <br />
      <div className="contact-1">
        <img src={img2} />
        <div className="contact-2">
          <div className="contact-3">
            <form>
              <input type="name" placeholder="First Name" />
              <input type="name" placeholder="Last Name" />
              <br />
              <input type="number" placeholder="Enter Number" />
              <input type="E-mail" placeholder="E-Mail" />
              <br />
              <textarea rows={8} cols={52} placeholder="Write Something ..." />
              <br />
              <input className="submit" type="submit" />
            </form>
          </div>
        </div>
      </div>
      <footer className="f-1">
        <img src={img1} />
        <Link to="/">Home</Link>
        <a href="#">Fines</a>
        <a href="#">Contact</a>
        <h2 style={{ fontWeight: "700" }}>
          به‌ڕێوه‌به‌رایه‌تى هاتووچۆى هه‌ولێر
        </h2>
      </footer>
    </div>
  );
};

export default Navbar;
