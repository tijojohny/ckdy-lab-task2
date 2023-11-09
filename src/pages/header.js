import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import imgsss from "../images/logo.svg";

function Header() {
  const onHome = () => {
    window.location.href = "/";
  };
  return (
    <>
      <div
        style={{
          paddingTop: "1rem",
          paddingLeft: "5rem",
          height: "80px",
          position: "relative",
          padding: " 2rem 20rem 5rem ",
          background: "white",
          width: "100%",
          marginTop: "2rem",
        }}
      >
        <img src={imgsss} alt="logo" style={{ height: "50px" }} />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            float: "right",
            paddingRight: "10rem",
          }}
        >
          <p
            style={{ textAlign: "center", paddingTop: "1rem" }}
            onClick={onHome}
          >
            Home
          </p>
          <p
            style={{
              paddingLeft: "1rem",
              textAlign: "center",
              paddingTop: "1rem",
            }}
          >
            About Us
          </p>
          <p
            style={{
              paddingLeft: "1rem",
              textAlign: "center",
              paddingTop: "1rem",
            }}
          >
            Conatct Us
          </p>
          <button
            style={{ marginLeft: "1rem" }}
            type="button"
            class="btn btn-primary"
            data-toggle="button"
            aria-pressed="false"
            autocomplete="off"
          >
            Shop
          </button>
          <div style={{ marginLeft: "1rem", marginTop: "1rem" }}>
            <a href="/login">Login</a>
          </div>
          <div style={{ marginLeft: "1rem", marginTop: "1rem" }}>
            <a href="/cart">Cart</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
