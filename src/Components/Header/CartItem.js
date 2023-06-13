import React from 'react'
import { Button } from 'react-bootstrap';

import Figure from 'react-bootstrap/Figure';

export default function CartItem(props) {
  return (<>
    
 
      
        <tr>
        <td>{ <Figure.Image
        width={80}
        height={80}
        alt="171x180"
        src={props.img}
      />}</td>
          <td>{props.name}</td>
          <td>{props.price}$</td>
          <td>{props.quantity}<Button className='mx-2' variant="danger">X</Button>{' '}</td>
          
        </tr>
      
   
  </>
  )
}