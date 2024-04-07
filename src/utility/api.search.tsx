import { useState, useEffect } from 'react';

interface ApiResponse {
  data: Result[]; // Changed from Product[] to Result[]
  meta: {
    isFirstPage: boolean;
    isLastPage: boolean;
    currentPage: number;
    previousPage: null | number;
    nextPage: null | number;
    pageCount: number;
    totalCount: number;
  };
}

// Changed interface name from Product to Result
interface Image {
  url: string;
  alt: string;
}

interface Review {
  id: string;
  username: string;
  rating: number;
  description: string;
}

interface Result {
  id: string;
  title: string;
  description: string;
  price: number;
  discountedPrice: number;
  image: Image;
  rating: number;
  tags: string[];
  reviews: Review[];
}


export const useSearchProducts = (baseUrl: string, query: string) => {
  const [results, setResults] = useState<Result[]>([]); // Changed from products to results for clarity
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (query.trim() === '') {
      // Optionally reset results or handle empty query scenario
      setResults([]);
      setLoading(false);
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        // Construct the URL with the search query
        const url = `${baseUrl}?title=${encodeURIComponent(query)}`;
        const response = await fetch(url);

        console.log(url);
        if (!response.ok) throw new Error('Network response was not ok');
        const json: ApiResponse = await response.json();
        console.log(json);
        
        setResults(json.data); // Updated to reflect the change to Result[]
      } catch (err: any) {
        setError(err.message);
        console.error('Search fetch error:', err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [baseUrl, query]);

  return { products: results, loading, error }; // Changed the return object's property to "products" for backward compatibility
};
