import { Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/toaster.tsx";

import Home from "./pages/Home.tsx";
import { Navigation } from "./components/Navigation.tsx";
import WeightDataPage from "pages/WeightData.tsx";

import "./App.css";

function App() {
  return (
    <>
      <Navigation />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weightdata" element={<WeightDataPage />} />
      </Routes>
    </>
  );
}

export default App;
