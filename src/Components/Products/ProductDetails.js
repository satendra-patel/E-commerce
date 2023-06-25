import React from "react";
import { Card } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import { useParams } from "react-router-dom";
import CartState from "../../store/CartState";
import Header from "../Header/Header";

export default function ProductDetails(props) {
  const productsArr = [
    {
      id: "m1",
      title: "Colors",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
        description:
        "A text box (input box), text field or text entry box is a control element of a graphical user interface, that should enable the user to input text information to be used by a program",
    },

    {
      id: "m2",
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        description:
        "A text box (input box), text field or text entry box is a control element of a graphical user interface, that should enable the user to input text information to be used by a program",
    },

    {
      id: "m3",
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        description:
        "A text box (input box), text field or text entry box is a control element of a graphical user interface, that should enable the user to input text information to be used by a program",
    },

    {
      id: "m4",
      title: "Blue Color",

      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
      description:
        "A text box (input box), text field or text entry box is a control element of a graphical user interface, that should enable the user to input text information to be used by a program",
    },
  ];
  const param = useParams();
  const temp = productsArr.filter((i) => i.id === param.id);

  return (
    <div>
      <CartState>
        <Header />
        <Card className="text-center" style={{ width: "18rem" }}>
          <Card.Title className="text-center">{temp[0].title}</Card.Title>
          <Card.Img variant="top" src={temp[0].imageUrl} />
          <Card.Body>
            <h4>Price : {temp[0].price}Rs</h4>
          </Card.Body>
        </Card>

        <Tabs 
          defaultActiveKey="profile"
          id="uncontrolled-tab-example"
          className="mb-3 my-3"
        >
          <Tab eventKey="home" title="Description">
          <p>{temp[0].description}</p>
          </Tab>
          <Tab eventKey="profile" title="Rating">
            <h4>5 Star</h4>
          </Tab>
        </Tabs>
      </CartState>
    </div>
  );
}
