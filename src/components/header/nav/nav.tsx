import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { BtnCart } from "../../../styles/components/buttons/btnCart/btnCart";
import "./nav.styles.scss";
// import * as S from './nav.styles';




// export function Nav() {

//   // Updates the number of items in the cart
//   const cartItems = useSelector(state => state.cart.cartItems); 

//   return (
//     <S.Nav>
//       <S.List>
//         <S.ListItem>
//           <S.Link to="/">Home</S.Link>
//         </S.ListItem>
//         <S.ListItem>
//           <S.Link to="/contact">Contact</S.Link>
//         </S.ListItem>
//         <S.ListItem>
//           <S.Link to="/cart">
//             <div>
//               <BtnCart></BtnCart>
//               Cart 
//               {cartItems.length > 0 && <span>({cartItems.length})</span>}
//             </div>
//           </S.Link>
//         </S.ListItem>
//       </S.List>
//     </S.Nav>
//   );
// }

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
