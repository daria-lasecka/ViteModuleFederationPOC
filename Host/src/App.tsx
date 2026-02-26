import { BrowserRouter, Route, Routes } from "react-router";
import Home from "@/pages/Home.tsx";
import "./App.css";
import Navbar from "@/components/Navbar/Navbar.tsx";
import Remote from "@/pages/Remote.tsx";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="remote" element={<Remote />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
