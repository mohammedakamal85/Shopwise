import React from "react";

import { useDispatch } from "react-redux";
import { cartSlice } from "./Cartslice";

export const Card = (props) => {
  const dispatch = useDispatch();

  const added = (t) => {
    t.classList.add('clicked');
  };
  return (
    <div className="card__page">
      <div className="products__card">
        <img src={props.dataa.thumbnail} alt={props.dataa.title} />
        <h2>{props.dataa.title}</h2>
        <p>{props.dataa.description}</p>
        <strong>Price: ${props.dataa.price}</strong>
        <div>
          <button
            onClick={(e) => {
              dispatch(cartSlice.actions.addtocart(props.dataa));
              added(e.target);
            }}
          >
            Add to Cart
          </button>
          <button>Show More</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
