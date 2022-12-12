import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MyFooter from "./components/MyFooter";
import NavbarTop from "./components/NavbarTop";
function App() {
  return (
    <div>
      <NavbarTop />
      <MyFooter />
    </div>
  );
}

export default App;
