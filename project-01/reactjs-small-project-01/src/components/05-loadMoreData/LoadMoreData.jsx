import React, { useEffect, useState } from "react";

import "./loadMoreStyle.css";

const LoadMoreData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  async function fetchProducts() {
    try {
      setIsLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();

      if (result && result.products && result.products.length) {
        setProducts(result.products);
        setIsLoading(false);
      }
    } catch (e) {
      setError(e.message);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  if (isLoading) return <div>Loading data!</div>;

  return (
    <div className="loadMoreContainer">
      <div className="productContainer">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img src={product.thumbnail} alt={product.title} />
            <p>{product.title}</p>
          </div>
        ))}
      </div>
      <div className="buttonContainer">
        <button>Load More Products</button>
      </div>
    </div>
  );
};

export default LoadMoreData;
