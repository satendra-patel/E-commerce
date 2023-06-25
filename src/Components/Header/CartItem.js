import React,{useContext}from 'react'
import { Button } from 'react-bootstrap';

import Figure from 'react-bootstrap/Figure';
import ProductContext from '../../store/product-context';

export default function CartItem(props) {
  const cartState=useContext(ProductContext);
  const removeItem=(event)=>{
    
    cartState.removeItem(props.id);
    
    


  }
  
  return (
    
 
      <div>
        <tr>
        <td>{ <Figure.Image
        width={80}
        height={80}
        alt="171x180"
        src={props.img}
      />}</td>
          <td>{props.title}</td>
          <td>{props.price}</td>
          <td>{props.quantity}<Button onClick={removeItem} className='mx-2' variant="danger">X</Button>{' '}</td>
          
        </tr>
      
   
  </div>
  )
}
