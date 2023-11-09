import axios from "axios";

let BaseUrl = "https://fakestoreapi.com";

export function getData() {
  return axios.get("https://fakestoreapi.com/products");
  //   fetch('https://fakestoreapi.com/products/1')
  //             .then(res=>res.json())
  //             .then(json=>console.log(json))
}
