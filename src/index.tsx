import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthProvider from "./context/AuthProvider.tsx";
import { QuoteProvider } from "./context/QuoteContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <QuoteProvider>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </QuoteProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
