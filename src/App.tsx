import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  HashRouter,
} from "react-router-dom";
import { Landing } from "./pages/landing/Landing";
import { Register } from "./pages/register/Register";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to={"/"} />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
