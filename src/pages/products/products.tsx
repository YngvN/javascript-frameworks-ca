
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setProductDetails, setLoading, setError } from '../../redux/product';
import { addToCart } from '../../redux/cart';
import "./products.styles.scss";

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state) => state.product);
  const [showReviews, setShowReviews] = useState(false);

  console.log("Component rendered with id:", id); 

  useEffect(() => {
    if (!id) {
      console.error("Product ID is undefined.");
      return;
    }

    console.log("useEffect triggered with id:", id); 
    dispatch(setLoading(true));

    const sessionProduct = sessionStorage.getItem(`product-${id}`);
    if (sessionProduct) {
      console.log("Loading product from sessionStorage"); 
      dispatch(setProductDetails(JSON.parse(sessionProduct)));
      dispatch(setLoading(false));
    } else {
      console.log("Attempting fetch for product ID:", id); 
      const fetchProductDetail = async () => {
        try {
          const response = await fetch(`https://v2.api.noroff.dev/online-shop/${id}`);
          if (!response.ok) throw new Error(`Network response was not ok for product ID: ${id}`);
          const jsonData = await response.json();
          console.log("Fetch success for product ID:", id, jsonData); 
          dispatch(setProductDetails(jsonData.data));
          sessionStorage.setItem(`product-${id}`, JSON.stringify(jsonData.data));
        } catch (err) {
          console.error("Fetch error for product ID:", id, err); 
          dispatch(setError('Failed to fetch product details'));
        } finally {
          dispatch(setLoading(false));
        }
      };

      fetchProductDetail();
    }
  }, [dispatch, id]);

  const handleBackClick = () => navigate(-1);

  const handleBuyClick = () => {
    dispatch(addToCart({
      id: product.id,
      title: product.title,
      price: product.discountedPrice || product.price,
    }));
  };

  const toggleReviews = () => setShowReviews(!showReviews);


  const discountPercentage = product ? ((product.price - product.discountedPrice) / product.price) * 100 : 0;


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!product) return <div>Product not found</div>;

   return (
     <main>
       <div className='productDetails'>
         <button id="btn-back" onClick={handleBackClick}>Back</button>
         <h1>{product.title}</h1>
         <img src={product.image.url} alt={product.image.alt} style={{ maxWidth: "100%" }} />
         <p>{product.description}</p>
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
         <div>
           <p>Rating: {product.reviews && product.reviews.length > 0 ? `${product.rating} / 5` : "Not yet rated"}</p>
           <button onClick={toggleReviews}>
             {showReviews ? 'Hide Reviews' : 'Show Reviews'}
           </button>
         </div>
         {showReviews && (
           <div>
             <h3>Reviews:</h3>
             {product.reviews && product.reviews.length > 0 ? (
               product.reviews.map((review) => (
                 <div className="reviews" key={review.id}>
                   <p>{review.username} - Rating: {review.rating}</p>
                   <p>{review.description}</p>
                 </div>
               ))
             ) : (
               <p>No reviews available</p>
             )}
           </div>
         )}
         <button id="btn-buy" onClick={handleBuyClick}>Add To Cart</button>
       </div>
     </main>
   );
}

export default ProductDetail;
