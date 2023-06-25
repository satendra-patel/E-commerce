import React, { useContext, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import CartItem from "./CartItem";
import Table from "react-bootstrap/Table";
import ProductContext from "../../store/product-context";

export default function Cart() {
  const [getData, setgetData] = useState([]);
  const cartState = useContext(ProductContext);
  let userEmail = localStorage.getItem("email");

  userEmail = userEmail.replace("@", "");
  userEmail = userEmail.replace(".", "");
  


  let totalitem = 0;
  getData.forEach((item) => {
    totalitem = totalitem + Number(item.quantity);
  });
 

  const listItem = (
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
        {getData.map((item) => (
          <CartItem
            key={item.title}
            id={item.id}
            title={item.title}
            price={item.price}
            img={item.img}
            quantity={item.quantity}
          />
        ))}
      </tbody>
    </Table>
  );

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  let totalprice = 0;
  getData.forEach((item) => {
    totalprice += item.quantity * item.price;
  });
  useEffect(() => {
    fetch(
      `https://crudcrud.com/api/b341ed28d7e34646bd091e1852fea3af/cart${userEmail}`,
      { method: "GET" }
    ).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          
          setgetData(data);
          
        });
      } else {
        return res.json().then((data) => {
          console.log('Something Went wrong');
        });
      }
    });
  }, [cartState,userEmail]);

  return (
    <div>
      <Button variant="warning" onClick={handleShow}>
        Cart {totalitem} <i className="fa fa-shopping-cart"></i>
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            My Cart <i className="fa fa-shopping-cart"></i>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {listItem}
          <hr />
          <h5>Total Price {totalprice} Rs</h5>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
