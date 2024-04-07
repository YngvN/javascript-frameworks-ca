import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { BtnCart } from "../../../styles/components/buttons/btnCart/btnCart";
import "./nav.styles.scss";





export function Nav() {

  // Updates the number of items in the cart
  const cartItems = useSelector(state => state.cart.cartItems); 

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li className="cart">
          <Link to="/cart">
            <div>
              <BtnCart></BtnCart>
              {cartItems.length > 0 && <span className="counter">({cartItems.length})</span>}
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
