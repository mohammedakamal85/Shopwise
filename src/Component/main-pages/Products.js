import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./../redux/Card";
import Navigation from "./Navigation";

function Products() {
  const [products, setproducts] = useState();

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((resp) => setproducts(resp.data.products))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="products__page">
      <Navigation />
      <h1 className="product__page__h1">Our Products🛒</h1>
      <div className="products__container">
        {products?.map((prod) => (
          <Card key={prod.id} dataa={prod} />
        ))}
      </div>
    </div>
  );
}

export default Products;
