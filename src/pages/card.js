import React from "react";
import imgsss from "../images/logo.svg";
import food from "../images/food1.svg";

function Card() {
  return (
    <div>
      <span
        style={{
          display: "flex",
          fontSize: "30px",
          justifyContent: "center",
          paddingTop: "10rem",
        }}
      >
        <p style={{ paddingRight: "1rem", fontSize: "4rem" }}>
          Cook With Favorite Recipe
        </p>
      </span>
      <p style={{ paddingLeft: "310px", textAlign: "left" }}>
        YUMMY DUCK ROAST{" "}
        <button style={{ borderRadius: "1rem" }}>Next Recipe</button>
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          className="card"
          style={{ background: "#0b5ed7", height: "250px", width: "450px" }}
        >
          <span
            style={{
              display: "flex",
              fontSize: "30px",
              paddingLeft: "1rem",
              paddingTop: "1rem",
            }}
          >
            {" "}
            <p style={{ color: "white" }}>Step 01 ----</p> Step 02 --- Step 03
          </span>
          <p style={{ textAlign: "left", paddingLeft: "1rem", color: "white" }}>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.Some quick example text to build on the
            card title and make up the bulk of the card's content.
          </p>
        </div>
        <img
          src={food}
          alt="logo"
          style={{ height: "250px", paddingLeft: "2rem" }}
        />
        <img
          src={food}
          alt="logo"
          style={{ height: "250px", paddingLeft: "2rem" }}
        />
      </div>
      <div style={{ paddingTop: "3rem" }}>
        <img src={imgsss} alt="logo" style={{ height: "120px" }} />
      </div>
    </div>
  );
}

export default Card;
