import { Routes, Route, Outlet } from "react-router-dom";
import { Toaster } from "./components/ui/toaster.tsx";

import Home from "./pages/Home.tsx";
import Test from "./pages/Test.tsx";
import { Navigation } from "./components/Navigation.tsx";
import WeightDataPage from "pages/WeightData.tsx";
import Journal from "./components/Journal/index.tsx";
import JournalDetails from "./components/Journal/detail.tsx";
import Profile from "./components/Profile/index.tsx";
import Footer from "components/Footer.tsx";
import Layout from "./components/Layout.tsx";

import "./App.css";

function App() {
  return (
    <>
      <Navigation />
      <Toaster />
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        <Route path="/weightdata" element={<WeightDataPage />} />
        <Route path="/journals" element={<Journal />} />
        <Route path="/journals/:journalId" element={<JournalDetails />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
        {/* </Route> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
