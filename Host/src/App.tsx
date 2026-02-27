import { BrowserRouter, Route, Routes } from "react-router";
import Home from "@/pages/Home.tsx";
import "./App.css";
import Navbar from "@/components/Navbar/Navbar.tsx";
import RemoteAppWrapper from "@/pages/RemoteAppWrapper.tsx";
import Backend from "@/pages/Backend.tsx";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { hostBrandATheme, type Theme } from "@/theme.ts";

function App() {
  const [theme, setTheme] = useState<Theme>(hostBrandATheme);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Navbar theme={theme} setTheme={setTheme} />
        <div className="content">
          <Routes>
            <Route index element={<Home />} />
            <Route path="backend" element={<Backend />} />
            <Route path="remote" element={<RemoteAppWrapper />} />
          </Routes>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
