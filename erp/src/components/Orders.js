import React, { useState } from 'react';
import styled from 'styled-components';

const Orders = () => {
  // Initialize state with mock data or an empty array
  const [orders, setOrders] = useState([
    { id: 1, customerName: 'Aman Datt', orderDate: '2024-02-02', status: 'Pending' },
    { id: 2, customerName: 'John Smith', orderDate: '2024-03-03', status: 'Processing' },
    { id: 3, customerName: 'Suizi Cenon', orderDate: '2024-03-07', status: 'Pending' },
    { id: 4, customerName: 'John Cena', orderDate: '2024-03-07', status: 'Processing' },
    
    // Add more mock orders 
  ]);

  // Function to handle updating the order status
  const updateOrderStatus = (orderId, newStatus) => {
    const updatedOrders = orders.map(order =>
      order.id === orderId ? { ...order, status: newStatus } : order
    );
    setOrders(updatedOrders);
  };

  // Function to handle deleting an order
  const deleteOrder = (orderId) => {
    const updatedOrders = orders.filter(order => order.id !== orderId);
    setOrders(updatedOrders);
  };

  return (
    <OrdersContainer>
      <h2>Orders</h2>
      <OrderList>
        {Array.isArray(orders) && orders.length > 0 ? (
          orders.map(order => (
            <OrderItem key={order.id}>
              <OrderInfo>
                <div><strong>Order ID:</strong> {order.id}</div>
                <div><strong>Customer Name:</strong> {order.customerName}</div>
                <div><strong>Order Date:</strong> {order.orderDate}</div>
                <div><strong>Status:</strong> {order.status}</div>
              </OrderInfo>
              <OrderActions>
                <OrderButton onClick={() => updateOrderStatus(order.id, 'Shipped')}>Mark as Shipped</OrderButton>
                <OrderButton onClick={() => deleteOrder(order.id)}>Delete</OrderButton>
              </OrderActions>
            </OrderItem>
          ))
        ) : (
          <NoOrdersMessage>No Orders found.</NoOrdersMessage>
        )}
      </OrderList>
    </OrdersContainer>
  );
};

const OrdersContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const OrderList = styled.ul`
  padding: 0;
`;

const OrderItem = styled.li`
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 20px;
  list-style-type: none;
`;

const OrderInfo = styled.div`
  margin-bottom: 10px;

  div {
    margin-bottom: 5px;
  }

  strong {
    color: #333;
  }
`;

const OrderActions = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const OrderButton = styled.button`
  width: 150px; /* Set a fixed width for all buttons */
  margin-left: 10px;
  cursor: pointer;
  padding: 10px; /* Increase padding for better visibility and clickability */
  border-radius: 3px;
  background-color: #007bff;
  color: #fff;
  border: none;
  font-size: 16px;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const NoOrdersMessage = styled.p`
  text-align: center;
  font-weight: bold;
`;

export default Orders;
