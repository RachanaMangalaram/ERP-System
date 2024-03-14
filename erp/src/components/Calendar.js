import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';

const CalendarComponent = () => {
  const [orders] = useState([
    { id: 1, customerName: 'Aman Datt', orderDate: new Date(2024, 1, 2), status: 'Delivered' },
    { id: 2, customerName: 'John Smith', orderDate: new Date(2024, 2, 5), status: 'Processing' },
    { id: 3, customerName: 'Suizi Cenon', orderDate: new Date(2024, 2, 7), status: 'Pending' },
    { id: 4, customerName: 'John Cena', orderDate: new Date(2024, 2, 12), status: 'Processing' },
    { id: 5, customerName: 'Jane Austen', orderDate: new Date(2024, 3, 16), status: 'Processing' },
  ]);
  const [selectedDateOrders, setSelectedDateOrders] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null); // State to keep track of selected date

  const handleDateClick = (date) => {
    setSelectedDate(date); // Set the selected date
    const ordersForDate = orders.filter(order => order.orderDate.getTime() === date.getTime());
    setSelectedDateOrders(ordersForDate);
  };

  const hasOrdersForSelectedDate = () => {
    return selectedDateOrders.length > 0;
  };

  const tileContent = ({ date, view }) => {
    if (view === 'month') {
      const orderDates = orders.map(order => new Date(order.orderDate).setHours(0, 0, 0, 0));
      const currentDate = new Date(date).setHours(0, 0, 0, 0);
      if (orderDates.includes(currentDate)) {
        return <StyledTileContent />;
      }
    }
    return null;
  };

  return (
    <CalendarContainer>
      <h2>Calendar</h2>
      <StyledCalendar
        onClickDay={handleDateClick}
        value={selectedDate}
        tileContent={tileContent}
      />
      {selectedDate && (
        <>
          {hasOrdersForSelectedDate() ? (
            <OrdersSection>
              <h3>Orders for Selected Date:</h3>
              <ul>
                {selectedDateOrders.map(order => (
                  <OrderItem key={order.id}>
                    <div><strong>Order ID:</strong> {order.id}</div>
                    <div><strong>Customer Name:</strong> {order.customerName}</div>
                    <div><strong>Order Date:</strong> {order.orderDate.toLocaleDateString()}</div>
                    <div><strong>Status:</strong> {order.status}</div>
                  </OrderItem>
                ))}
              </ul>
            </OrdersSection>
          ) : (
            <NoOrdersMessage>No orders</NoOrdersMessage>
          )}
        </>
      )}
    </CalendarContainer>
  );
};

const CalendarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px; /* Increase font size */
  margin-bottom: 20px; /* Add spacing between CalendarContainer */
`;

const StyledCalendar = styled(Calendar)`
  width: 400px; 
  max-width: 100%; 
  margin-bottom: 20px;
`;

const OrdersSection = styled.div`
  text-align: center;
`;

const OrderItem = styled.li`
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  width: 300px;
  max-width: 100%;
`;

const NoOrdersMessage = styled.p`
  text-align: center;
  font-weight: bold;
`;

const StyledTileContent = styled.div`
  background-color: #00bcd4;
  border-radius: 50%;
  height: 10px;
  width: 10px;
`;

export default CalendarComponent;
