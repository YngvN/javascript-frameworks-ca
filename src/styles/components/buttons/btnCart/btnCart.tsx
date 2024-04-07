import React from "react";
import "./btnCart.style.scss";

export function BtnCart() {
  return (
    <div className="btn-cart">
      <span className="horizontal top"></span>
      <span className="horizontal bottom"></span>
      <span className="vertical left side"></span>
      <span className="vertical middle"></span>
      <span className="vertical right side"></span>
    </div>
  );
}

