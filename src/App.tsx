import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Landing } from "./pages/landing/Landing";
import { Register } from "./pages/register/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
