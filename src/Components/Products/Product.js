import React, { useContext, useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import ProductContext from "../../store/product-context";

import { Link } from "react-router-dom";

export default function Product(props) {
  const cartState = useContext(ProductContext);
  const [apigetData, setapigetData] = useState([]);
  let userEmail = localStorage.getItem("email");

  userEmail = userEmail.replace("@", "");
  userEmail = userEmail.replace(".", "");
  useEffect(() => {
    fetch(
      `https://crudcrud.com/api/b341ed28d7e34646bd091e1852fea3af/cart${userEmail}`,
      { method: "GET" }
    ).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          setapigetData(data);
          
         
          
        });
      } else {
        return res.json().then((data) => {
          console.log('something went wrong');
        });
      }
    });
    
  }, []);

  const addproductcart = (event) => {
   

    let indxOfItem = apigetData.findIndex((i) => i.id === props.id);

    if (indxOfItem === -1) {
      fetch(
        `https://crudcrud.com/api/b341ed28d7e34646bd091e1852fea3af/cart${userEmail}`,
        {
          method: "POST",
          body: JSON.stringify({
            id: props.id,
            title: props.title,
            price: props.price,
            img: props.img,
            quantity: 1,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      ).then((res)=>{
        res.json().then((data) => {
          let temp=[...apigetData,data]
          setapigetData(temp)
          
          console.log(data);
        });
      });
    } else {
      console.log("put chal raha h");
      fetch(
        `https://crudcrud.com/api/b341ed28d7e34646bd091e1852fea3af/cart${userEmail}/${apigetData[indxOfItem]._id}`,
        {
          method: "PUT",
          body: JSON.stringify({
            id: props.id,
            title: props.title,
            price: props.price,
            img: props.img,
            quantity: apigetData[indxOfItem].quantity + 1,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    cartState.addItem({ ...props, quantity: 1 });
  };


  const link = `/productdetails/${props.id}`;

  return (
    <div>
      <Card className="text-center" style={{ width: "18rem" }}>
        <Card.Title className="text-center">{props.title}</Card.Title>
        <Link to={link}>
          <Card.Img variant="top" src={props.img} />
        </Link>
        <Card.Body>
          <h4>Price : {props.price}Rs</h4>

          <Button
            className="text-center"
            onClick={addproductcart}
            variant="secondary"
          >
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
