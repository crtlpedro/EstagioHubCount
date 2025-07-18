import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AnunciarPage from "./components/anunciar/AnunciarPage";
import Footer from "./components/footer/Footer";
import MainContent from "./components/maincontent/MainContent";
import Navbar from "./components/navbar/Navbar";
import GenerateAd from "./components/anunciar/annouce/generatead/GenerateAd";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/anunciar" element={<AnunciarPage />} />
          <Route path="/geraranuncio" element={<GenerateAd/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;