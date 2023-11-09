import React, { useEffect } from "react";
import home1 from "../images/home1.svg";
import home2 from "../images/home2.svg";
import arrow from "../images/arrow.svg";
import backg from "../images/backg.svg";
import backg1 from "../images/backg1.svg";
import backg2 from "../images/backg2.svg";
import { connect, useDispatch, useSelector } from "react-redux";
import { getDataAction, addToCartAction } from "../store/authActions";
// import { useHistory } from "react-router-dom";

function Body(dataaaa) {
  // const history = useHistory();
  const dispatch = useDispatch();
  console.log("dataaaa", dataaaa);
  useEffect(() => {
    dispatch(getDataAction());
  }, []);

  const onHandler = (product) => {
    console.log("1111111111111111");
    console.log("product", product);
    // addToCartAction(product);
    dispatch(addToCartAction(product));
  };

  const productss = useSelector((state) => state.shop.products);
  console.log("proooooo", productss);

  // const cart = useSelector((state) => state.shop.cart);
  // console.log("cartttttttt", cart);

  return (
    <div>
      <div style={{ paddingTop: "8rem" }}>
        <p
          style={{
            backgroundColor: "lightblue",
            display: "inline",
            borderRadius: "1rem",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          }}
        >
          UNIQUE CURRY POWDERS
        </p>
        <h1>
          Wake Up Your <br />
          Taste Buds With Us
        </h1>
        <div
          style={{
            paddingLeft: "23rem",
          }}
        >
          <img
            src={home1}
            alt="home1"
            style={{
              height: "150px",
              width: "120px",
              backgroundImage: `url(${backg2})`,
              marginTop: "-4rem",
            }}
          />
        </div>
        <div
          style={{
            backgroundImage: `url(${backg})`,
            height: "610px",
            width: "78rem",
            display: "inline-block",
            paddingTop: "5rem",
            marginTop: "-1rem",
          }}
        >
          <div style={{ paddingRight: "23rem" }}>
            <img
              src={home2}
              alt="home2"
              style={{
                height: "250px",
                width: "180px",
                backgroundImage: `url(${backg1})`,
                marginTop: "-10rem",
              }}
            />
          </div>
          <div style={{ paddingTop: "5rem" }}>
            <h1>
              Prodcuts Within <br />
              Your Province
            </h1>
            <div style={{ paddingLeft: "38%" }}>
              <select
                style={{ width: "350px", borderColor: "lightblue" }}
                class="form-select form-select-lg mb-3"
                aria-label=".form-select-lg example"
              >
                <option selected>Select Province</option>
              </select>
            </div>
            <br />
          </div>{" "}
        </div>
        <div className="container">
          <div className="row">
            {productss &&
              productss?.map((product, index) => {
                return (
                  index < 6 && (
                    <>
                      {/* // <div style={{ display: "flex" }}> */}
                      <div className="col-6" key={product.id}>
                        <div
                          style={
                            index % 2 !== 0
                              ? { paddingLeft: "12rem" }
                              : { paddingLeft: "12rem", paddingTop: "5rem" }
                          }
                        >
                          <div
                            className="card"
                            style={{ borderRadius: "2rem" }}
                          >
                            <img
                              src={product?.image}
                              style={{ height: "350px" }}
                              className="card-img-top"
                              alt="fff"
                            />
                            <div className="card-body">
                              <h5 className="card-title">{product?.title}</h5>

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
                                {product?.rating?.count} g
                              </div>

                              <button
                                onClick={() => onHandler(product)}
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
                              >
                                {" "}
                                Add to Cart{" "}
                                <img
                                  src={arrow}
                                  alt="home2"
                                  style={{ height: "10px" }}
                                />{" "}
                              </button>
                            </div>
                          </div>{" "}
                        </div>
                      </div>
                    </>
                  )
                );
              })}
          </div>
        </div>
      </div>
      <br />
      <button
        style={{ marginLeft: "1rem", height: "50px" }}
        type="button"
        class="btn btn-primary"
        data-toggle="button"
        aria-pressed="false"
        autocomplete="off"
      >
        More Products <img src={arrow} alt="home2" style={{ height: "10px" }} />
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    dataaaa: state.data?.shop?.products,
  };
};

export default connect(mapStateToProps)(Body);
