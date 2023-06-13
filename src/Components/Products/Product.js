import React,{useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProductContext from '../../store/product-context';


export default function Product(props) {
 
  const cartState=useContext(ProductContext);
  const addproductcart=(event)=>{
   
    cartState.addItem({...props,quantity:props.quantity})



  }
  return (
    <Card className='text-center' style={{ width: '18rem' }}>
        <Card.Title className='text-center'>{props.title}</Card.Title>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <h4>Price : {props.price}$</h4>
        
        <Button className='text-center' onClick={addproductcart} variant="secondary">Add To Cart</Button>
      </Card.Body>
    </Card>
  )
}
