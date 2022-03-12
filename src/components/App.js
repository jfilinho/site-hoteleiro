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
    <Slide/> 
      <Top />
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/acomodacao" element={<Acomodacao />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </div>
      <Rodape/>
    </div>
  );
}

export default App;
