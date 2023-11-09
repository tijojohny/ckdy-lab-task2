import React from "react";
import Header from "./header";
import Footer from "./footer";
import { connect, useDispatch, useSelector } from "react-redux";

function Cart() {
  const cart = useSelector((state) => state.shop.cart);
  console.log("cartttttttt", cart);
  return (
    <div>
      <Header />
      <h1>Cart</h1>
      <div className="container">
        <div className="row">
          {cart &&
            cart?.map((carts) => (
              <div className="col-6" key={carts.id}>
                <div style={{ paddingLeft: "12rem", paddingTop: "5rem" }}>
                  <div className="card" style={{ borderRadius: "2rem" }}>
                    <img
                      src={carts?.image}
                      style={{ height: "350px" }}
                      className="card-img-top"
                      alt="fff"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{carts?.title}</h5>
                      <div
                        style={{
                          float: "left",
                          backgroundColor: "skyblue",
                          display: "inline",
                          paddingLeft: "1rem",
                          paddingRight: "1rem",
                          borderRadius: "1rem",
                        }}
                      >
                        {carts?.rating?.count} g
                      </div>
                      {/* <button
                      style={{
                        float: "right",
                        backgroundColor: "skyblue",
                        display: "inline",
                        paddingLeft: "1rem",
                        paddingRight: "1rem",
                        borderRadius: "1rem",
                        cursor: "pointer",
                        borderColor: "Blue",
                      }}
                    > */}{" "}
                      {/* Add to Cart{" "} */}
                      {/* <img
                      src={arrow}
                      alt="home2"
                      style={{ height: "10px" }}
                    />{" "} */}
                      {/* </button> */}
                    </div>
                  </div>{" "}
                </div>
              </div>
            ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    // dataaaa: state.data.products,
  };
};

export default connect(mapStateToProps)(Cart);
