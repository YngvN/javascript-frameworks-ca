import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart } from '../../redux/cart'; 
import "./checkout.style.scss";

function Checkout() {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.cartItems);

    useEffect(() => {
    }, [cart]);

    // Using useMemo to avoid unnecessary recalculations on re-renders
    const total = useMemo(() => {
        return cart.reduce((acc, item) => acc + item.price, 0);
    }, [cart]);

    const handleRemoveItem = (idToRemove) => {
        dispatch(removeFromCart(idToRemove));
    };

    const handleCheckout = () => {
        console.log("Proceeding to checkout with items:", cart);
        dispatch(clearCart());
        alert("Checkout successful!");
    };

    return (
        <main>
            <h1>Checkout</h1>
            <div className="cart-container">
                {cart.length > 0 ? (
                    <>
                        <ul className="cart-items">
                            {cart.map((item, index) => (
                                <li key={index}>
                                    {item.title}: ${item.price}
                                    <button className="btn-remove" onClick={() => handleRemoveItem(item.id)}>Remove</button>
                                </li>
                            ))}
                        </ul>
                        <div className="total">
                            Total: ${total.toFixed(2)}
                        </div>
                    </>
                ) : (
                    <p>Your cart is empty.</p>
                )}
                {cart.length > 0 && (
                    <button onClick={handleCheckout}>Checkout</button>
                )}
            </div>
        </main>
    );
}

export default Checkout;
