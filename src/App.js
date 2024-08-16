import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Colors from "./Pages/Colors";
import Blob from "./Pages/Blob";
import Gradient from "./Pages/Gradient";
import Waves from "./Pages/Waves";
import Shadow from "./Pages/Shadow";
import Glass from "./Pages/Glass";
import ColorPicker from "./Pages/ColorPicker";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/color" element={<Colors />} />
          <Route path="/blob" element={<Blob/>} />
          <Route path="/gradient" element={<Gradient/>} />
          <Route path="/waves" element={<Waves/>} />
          <Route path="/shadow" element={<Shadow/>} />
          <Route path="/glass" element={<Glass/>} />
          <Route path="/colorpicker" element={<ColorPicker/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
