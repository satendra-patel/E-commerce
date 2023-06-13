import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartItem from './CartItem';
import Table from 'react-bootstrap/Table';
import ProductContext from '../../store/product-context';

export default function Cart() {
  const cartState=useContext(ProductContext);
  let quantity=0
  cartState.items.forEach(item=>{
    quantity=quantity+ Number(item.quantity);

  })


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
      

cartState.items.map((item)=>(
  <CartItem key={item.title} title={item.title} price={item.price} img={item.img} quantity={item.quantity} />
))
}

      </tbody>



</Table>

    );
    

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let totalprice=0
  cartState.items.forEach(item=>{
    totalprice+=item.quantity*(item.price);

  })

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        Cart {quantity} <i className="fa fa-shopping-cart"></i>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>My Cart <i class="fa fa-shopping-cart"></i></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          
          {listItem}
          <hr />
          <h5>Total Price {totalprice} $</h5>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}


