import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Colors from "./Pages/Colors";
import Blob from "./Pages/Blob";
import Gradient from "./Pages/Gradient";
import Shadow from "./Pages/Shadow";
import Glass from "./Pages/Glass";
import ColorPicker from "./Pages/ColorPicker";
import Qr from "./Pages/Qr";
import TypographyGenerator from "./Pages/TypographyGenerator";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/color" element={<Colors />} />
          <Route path="/blob" element={<Blob />} />
          <Route path="/gradient" element={<Gradient />} />
          <Route path="/shadow" element={<Shadow />} />
          <Route path="/glass" element={<Glass />} />
          <Route path="/colorpicker" element={<ColorPicker />} />
          <Route path="/Qr" element={<Qr />} />
          <Route path="/TypographyGenerator" element={<TypographyGenerator />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
