import React from "react";
import Globalstyle from "src/styles/GlobalStyle";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import LetterInput from "./components/LetterInput";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "src/shared/Router";

function App() {
  return (
    <Router>
      <>
        <Globalstyle />
        <Header />
        <Navigation />
        <LetterInput />
        <AppRoutes />
        <Footer />
      </>
    </Router>
  );
}

export default App;
