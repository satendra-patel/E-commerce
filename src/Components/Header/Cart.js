import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartItem from './CartItem';
import Table from 'react-bootstrap/Table';

export default function Cart() {
  const cartElements = [

    {
    
    title: 'Colors',
    
    price: 100,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    
    quantity: 1,
    
    },
    
    {
    
    title: 'Black and white Colors',
    
    price: 50,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    
    quantity: 1,
    
    },
    
    {
    
    title: 'Yellow and Black Colors',
    
    price: 70,
    
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    
    quantity: 1,
    
    }
    
    ]
    const listItem=(
      <Table striped bordered hover>
         <thead>
        <tr>
        <th>#</th>
          <th>Item</th>
          <th>Price</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
      {
        cartElements.map((item)=>(
          <CartItem name={item.title} price={item.price} quantity={item.quantity} img={item.imageUrl} />
        ))
      }
        

      </tbody>



</Table>

    );

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Cart <i class="fa fa-shopping-cart"></i>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>My Cart <i class="fa fa-shopping-cart"></i></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {listItem}
          <h3>Total Price 220$</h3>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

