import img1 from "../images/logo mror.png";
const nwekrdn = () => {
  return (
    // tybat nwekrdnawa
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
        <a href="/tabat">Back</a>
        <h1 className="tabat-1">رسوماتی نۆی کردنەوەی ئوتومبیلی تایبەت</h1>
        <h2 className="tabat-2">
          دەبیت ئەم پیداویستیانەت لابیت کاتیک سەردانی بەڕێوەبەرایەتی هاتوو چۆی
          هەولێر دەکەیت
        </h2>
        <div className="t-3">
          <h3 className="tabat-3">فەحسو هەزە</h3>
          <h3 className="tabat-3">سەنەوی کۆن </h3>
          <h3 className="tabat-3">یەک وینەی خوت</h3>
          <h3 className="tabat-3">کارتی زانیاری</h3>
          <h3 className="tabat-3">کارتی نیشتیمانی</h3>
        </div>
      </div>
      {/* understand this tag */}
      <ol dir="rtl" className="ol-1" type="numbers">
        <li>سەرەتا دەرویت بوو بەشی عەریزە ،عەریزە دەنوسیت</li>
        <li>
          لەکاتی نوسینی عەریزە داوای ئەم بالگەنامانەت لی دەکات یەکەم (کارتی
          نشتمانی) دووەم (کارتی زانیاری)
        </li>
        <li>
          دوای نوسینی عەریزە دەرویت بوو بینای گەورە (تابق دوو)لەوی دەست
          بەمعاملەکەت دەکەیت
        </li>
        <li>
          لە (تابق دوو) یەکەم پەنجەرە برویتی ژمارە (١٣) بەشی غرامات لەوی داوای
          سەنەویت لی دەکات
        </li>
        <li>
          لە دوای ژمارە (١٣) دەرویتە ژمارە (١٤) بوو ئەوەی پارەی غرامەکانت بدەیت
          لەوی داوای سەنەویت لی دەکات
        </li>
        <li>
          بەلام ئەگەر سەنەویەکەت تاریخی بەسەر جوبیت ئەوە بو هەر ساڵیک (١٢ هەزارە
          دینارە)
        </li>
        <li>
          دوای دەرویتە ژمارە(١٥) لەوی داوای یەک وینەی خوت دەکات لەگەل پەنجەموری
          خوت
        </li>
        <li></li>
      </ol>
      {/* understand this tag */}
    </div>
  );
};

export default nwekrdn;
