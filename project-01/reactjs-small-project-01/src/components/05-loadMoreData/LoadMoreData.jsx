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
        setProducts((previousData) => [...previousData, ...result.products]);
        setIsLoading(false);
        console.log(products);
      }
    } catch (e) {
      setError(e.message);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  if (isLoading) return <div>Loading data!</div>;

  return (
    <div className="loadMoreContainer">
      <div className="productContainer">
        {products.map((product, index) => (
          <div key={product.id} className="product">
            <img src={product.thumbnail} alt={product.title} />
            <p>{product.title}</p>
            <h2>{index + 1}</h2>
          </div>
        ))}
      </div>
      <div className="buttonContainer">
        <button onClick={() => setCount(count + 1)}>Load More Products</button>
      </div>
    </div>
  );
};

export default LoadMoreData;
