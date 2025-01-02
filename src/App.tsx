import { Routes, Route } from "react-router-dom";
import { Toaster } from "./components/ui/toaster.tsx";

import Home from "./pages/Home.tsx";
import { Navigation } from "./components/Navigation.tsx";
import WeightDataPage from "pages/WeightData.tsx";
import Journal from "./components/Journal/index.tsx";
import Profile from "./components/Profile/index.tsx";
import Footer from "components/Footer.tsx";

import "./App.css";

function App() {
  return (
    <>
      <Navigation />
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weightdata" element={<WeightDataPage />} />
        <Route path="/journal" element={<Journal />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
