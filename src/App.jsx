import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ShowPDF from "./pages/ShowContent/ShowPDF";
import ShowTin2 from "./pages/ShowContent/ShowTin2";
import About from "./pages/About";
import Information from "./components/Information";
import News from "./pages/News";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/Information" element={<Information />} />
          <Route path="/pdf/:fileName" element={<ShowPDF />} />
          <Route path="/new2" element={<ShowTin2 />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
