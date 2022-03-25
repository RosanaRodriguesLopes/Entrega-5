import { BrowserRouter, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./App.css";
import Destino from "./pages/Destino";
import Promocoes from "./pages/Promocoes";
import Contato from "./pages/Contato";
import PassagemAdm from "./pages/PassagensAdm";
import EditarPassagem from "./pages/EditarPassagem"
import EditarMensagem from "./pages/EditarMensagem"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destino" element={<Destino />} />
        <Route path="/promocoes" element={<Promocoes />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/PassagemAdm" element={<PassagemAdm />} />
        <Route path="/PassagemEditar/:id" element={<EditarPassagem />}/>
        <Route path="/MensagemEditar/:id" element={<EditarMensagem />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
