import React from "react";
import "./App.scss";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

function App() {
  return (
    <div className="App"  style={{maxWidth: 1823, margin: "auto"}}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
