import Top from "../components/Navbar";
import Rodape from "./Rodape";
import Slide from "../components/Slide";

import Home from "../pages/Home";
import Sobre from "../pages/Sobre";
import Acomodacao from "../pages/Acomodacao";
import Contato from "../pages/Contato";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="fundo-site">
      <Slide />
      <Top />
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/acomodacao" element={<Acomodacao />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
      <div className="whatsapp-link">
        <a
          href="https://wa.me/5511974751884?text=Olá,%20gostaria%20de%20mais%20
              informações%20sobre%20hospedagem."
          target="blank"
          className="icons-contact"
        >
          <img
            src="./img/whatsapp.png"
            alt="icone WhatsApp"
            className="whatsapp"
          />
        </a>
      </div>
      <Rodape />
    </div>
  );
}

export default App;
