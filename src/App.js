import logo from "./logo.svg";
import "./App.css";
import Header from "./pages/header";
import Body from "./pages/body";
import Footer from "./pages/footer";
import Card from "./pages/card";
import Login from "./pages/login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Items from "./pages/items";
import { useRef } from "react";
import Cart from "./pages/cart";

function App() {
  // const myRef = useRef(null);
  return (
    <div className="App p-3 mb-2 bg-light text-dark">
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Items />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart />} />

            {/* <Route path="about" element={<About />} />
           <Route path="contact" element={<Contact />} /> */}
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
