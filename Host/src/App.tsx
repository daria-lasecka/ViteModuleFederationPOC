import { BrowserRouter, Route, Routes } from "react-router";
import Home from "@/pages/Home.tsx";
import "./App.css";
import Navbar from "@/components/Navbar/Navbar.tsx";
import RemoteAppWrapper from "@/pages/RemoteAppWrapper.tsx";
import Backend from "@/pages/Backend.tsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="content">
        <Routes>
          <Route index element={<Home />} />
          <Route path="backend" element={<Backend />} />
          <Route path="remote" element={<RemoteAppWrapper />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
