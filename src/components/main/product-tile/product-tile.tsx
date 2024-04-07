import React from "react";
import { useNavigate } from "react-router-dom";
import "./product-tile.style.scss";

type Product = {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  image: {
    url: string;
    alt: string;
  };
};

export function ProductTile({ product }: { product: Product }) {
  const navigate = useNavigate();


  const navigateToProduct = () => {
    navigate(`/products/${product.id}`);
  };


  const discountPercentage = ((product.price - product.discountedPrice) / product.price) * 100;

  return (
    <div className="productTile" key={product.id} onClick={navigateToProduct}>
      <h2>{product.title}</h2>
      <img src={product.image.url} alt={product.image.alt} />
      {product.price !== product.discountedPrice ? (
        <>
          <p>Price: <s>${product.discountedPrice}</s> ${product.price}</p>
          {discountPercentage > 0 && (
            <p className="discount-percentage">Save: {discountPercentage.toFixed(2)}%</p>
          )}
        </>
      ) : (
        <p>Price: ${product.price}</p>
      )}
      <span>View Product</span>
    </div>
  );
}
