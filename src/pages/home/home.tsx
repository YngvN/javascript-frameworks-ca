import React, { useEffect, useState } from "react";
import { ProductTile } from "../../components/main/product-tile/product-tile";
import { useFetchProducts } from "../../utility/api";
import { ProductList } from "./home.styles";
import { SearchBar } from "../../components/main/searchbar/searchbar";

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  image: {
    url: string;
    alt: string;
  };
  rating: number;
  tags: string[];
  reviews: Review[];
}

interface Review {
  id: string;
  username: string;
  rating: number;
  description: string;
}


function Home() {
    const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
    const { data, loading, error } = useFetchProducts("https://v2.api.noroff.dev/online-shop/");
    console.log("Home launched")

    useEffect(() => {

        const sessionData = sessionStorage.getItem('products');
        const cachedProducts: Product[] = sessionData ? JSON.parse(sessionData) : null;

        if (cachedProducts) {
            setFilteredProducts(cachedProducts); 
        } else if (data && data.data) {
            sessionStorage.setItem('products', JSON.stringify(data.data)); 
            setFilteredProducts(data.data); 
        }
    }, [data]);

    const handleSearch = (query: string) => {
        let searchResults: Product[];

        if (!query.trim()) {
            const sessionData = sessionStorage.getItem('products');
            const allProducts: Product[] = sessionData ? JSON.parse(sessionData) : [];
            setFilteredProducts(allProducts);
            return;
        } else {
            const allProducts = JSON.parse(sessionStorage.getItem('products') || '[]');
            searchResults = allProducts.filter((product: Product) =>
                product.title.toLowerCase().includes(query.toLowerCase())
            );
        }

        sessionStorage.setItem('searchResults', JSON.stringify(searchResults)); 
        setFilteredProducts(searchResults);
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <main>
            <h1>Home</h1>
            <SearchBar onSearch={handleSearch} />
            {filteredProducts.length === 0 ? (
                <p>No matches</p>
            ) : (
                <ProductList>
                    {filteredProducts.map((product: Product) => (
                        <ProductTile key={product.id} product={product} />
                    ))}
                </ProductList>
            )}
        </main>
    );
}

export default Home;

