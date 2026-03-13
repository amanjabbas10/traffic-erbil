import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Component/navbar.jsx";
import Tabat from "./Component/tabat.jsx";
import Nwekrdn from "./Component/nwekrdn.jsx";
import Kate from "./Component/kate.jsx";
import Kre from "./Component/kre.jsx";
import Katekre from "./Component/katekre.jsx";
import Nwekre from "./Component/nwekre.jsx";
import Haml from "./Component/Haml.jsx";
import Katehaml from "./Component/katehaml.jsx";
import Nwehaml from "./Component/nwehaml.jsx";
import Gsht from "./Component/gsht.jsx";
import Kategsht from "./Component/kategsht.jsx";
import Nwegsht from "./Component/nwegsht.jsx";
import Bena from "./Component/bena.jsx";
import Katebena from "./Component/katebena.jsx";
import Nwebena from "./Component/nwebena.jsx";
import Mator from "./Component/mator.jsx";
import Katemator from "./Component/katemator.jsx";
import Nwemator from "./Component/nwemator.jsx";
import "./style/style.css";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
function App() {
  return (
    <div>
      <Router basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Navbar />} />
          <Route path="/tabat" element={<Tabat />} />
          <Route path="/nwekrdn" element={<Nwekrdn />} />
          <Route path="/kate" element={<Kate />} />
          <Route path="/kre" element={<Kre />} />
          <Route path="/katekre" element={<Katekre />} />
          <Route path="/nwekre" element={<Nwekre />} />
          <Route path="/haml" element={<Haml />} />
          <Route path="/katehaml" element={<Katehaml />} />
          <Route path="/nwehaml" element={<Nwehaml />} />
          <Route path="/gsht" element={<Gsht />} />
          <Route path="/kategsht" element={<Kategsht />} />
          <Route path="/nwegsht" element={<Nwegsht />} />
          <Route path="/bena" element={<Bena />} />
          <Route path="/katebena" element={<Katebena />} />
          <Route path="/nwebena" element={<Nwebena />} />
          <Route path="/mator" element={<Mator />} />
          <Route path="/katemator" element={<Katemator />} />
          <Route path="/nwemator" element={<Nwemator />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
