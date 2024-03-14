import React, { useState } from 'react';
import styled from 'styled-components';

const Products = () => {
  // Initialize state with mock data or an empty array
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', category: 'Category A', price: 10.31, stock: 10 },
    { id: 2, name: 'Product 2', category: 'Category B', price: 19.29, stock: 14 },
    { id: 3, name: 'Product 3', category: 'Category C', price: 20.32, stock: 12 },
    { id: 4, name: 'Product 4', category: 'Category A', price: 25.19, stock: 15 },
    { id: 5, name: 'Product 5', category: 'Category B', price: 45.30, stock: 50 },
    { id: 6, name: 'Product 6', category: 'Category A', price: 18.81, stock: 100 },
    // Add more mock products
  ]);

  // Function to handle adding a new product
  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  // Function to handle editing an existing product
  const editProduct = (productId, updatedProduct) => {
    const updatedProducts = products.map(product =>
      product.id === productId ? { ...product, ...updatedProduct } : product
    );
    setProducts(updatedProducts);
  };

  // Function to handle deleting a product
  const deleteProduct = (productId) => {
    const updatedProducts = products.filter(product => product.id !== productId);
    setProducts(updatedProducts);
  };

  return (
    <ProductsContainer>
      <h2>Products</h2>
      {products.length === 0 ? (
        <NoProductsMessage>No Products found.</NoProductsMessage>
      ) : (
        <ProductList>
          {products.map(product => (
            <ProductItem key={product.id}>
              <ProductName>{product.name}</ProductName>
              <ProductCategory>{product.category}</ProductCategory>
              <ProductPrice>${product.price}</ProductPrice>
              <ProductStock>Stock: {product.stock}</ProductStock>
              <ProductActions>
                <ProductButton onClick={() => editProduct(product.id, { name: 'Updated Product' })}>Edit</ProductButton>
                <ProductButton onClick={() => deleteProduct(product.id)}>Delete</ProductButton>
              </ProductActions>
            </ProductItem>
          ))}
        </ProductList>
      )}
      <AddButton onClick={() => addProduct({ id: Math.random(), name: 'New Product', category: 'New Category', price: 0, stock: 0 })}>Add Product</AddButton>
    </ProductsContainer>
  );
};

const ProductsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
`;

const ProductItem = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
`;

const ProductName = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`;

const ProductCategory = styled.div`
  color: #666;
  margin-bottom: 10px;
`;

const ProductPrice = styled.div`
  font-weight: bold;
  color: #007bff;
  margin-bottom: 10px;
`;

const ProductStock = styled.div`
  color: #666;
  margin-bottom: 10px;
`;

const ProductActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const ProductButton = styled.button`
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 3px;
  background-color: #007bff;
  color: #fff;
  border: none;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const AddButton = styled.button`
margin-top: 20px;
cursor: pointer;
padding: 10px 20px;
border-radius: 3px;
font-size: 18px; 
color: #fff;
background-color: #004080;
border: none;
transition: background-color 0.3s ease;

&:hover {
  background-color: #0056b3;
}
`;

const NoProductsMessage = styled.p`
  text-align: center;
  font-weight: bold;
`;

export default Products;
