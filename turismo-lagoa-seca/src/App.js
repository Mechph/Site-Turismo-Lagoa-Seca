import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Pontos from "./pages/Pontos";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pontos" element={<Pontos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;