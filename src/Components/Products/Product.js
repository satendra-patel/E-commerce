import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Product(props) {
  return (
    <Card style={{ width: '18rem' }}>
        <Card.Title>{props.title}</Card.Title>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
  )
}
