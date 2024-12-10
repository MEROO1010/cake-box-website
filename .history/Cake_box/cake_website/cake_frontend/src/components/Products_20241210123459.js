import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('/api/products/')
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="products">
      <h2>Our Products</h2>
      <div className="categories">
        {/* Map product categories dynamically */}
        <button>Cakes</button>
        <button>Cupcakes</button>
        <button>Cookies</button>
      </div>
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price} SR</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
