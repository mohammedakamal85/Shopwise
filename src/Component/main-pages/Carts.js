import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "./../redux/Card";
import { cartSlice } from "./../redux/Cartslice";
import Navigation from "./Navigation";
function Carts() {
  const productdata = useSelector((state) => state?.cart?.item);

  const arr = productdata.filter(
    (value, index, self) => index === self.findIndex((t) => t.id === value.id)
  );

  const dispatch = useDispatch();

  return (
    <div className="my__cart">
    <Navigation />
      <div className="my__cart__container">
        <h1>My Cart 🎁</h1>
        <div className="my__cart__product">
          {productdata.length === 0 ? (
            <strong>Nothing Found!</strong>
          ) : (
            arr?.map((product) => (
              <div className="products__card">
                <img src={product.thumbnail} alt={product.title} />
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <strong>Price: ${product.price}</strong>
                <div>
                  <button
                    onClick={() =>
                      dispatch(cartSlice.actions.removefromcart(product))
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Carts;
