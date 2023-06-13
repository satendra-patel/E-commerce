import React,{useState} from 'react';
import ProductContext from './product-context';

export default function CartState(props) {
    
    
  const [items, setitems] = useState([]);
  
  const addItemToCartHandler = (props) => {
    let quantity=0
  cartState.items.forEach(item=>{
    quantity=quantity+ Number(item.quantity);

  })
    
    //   
    // }

    // setitems([...items,props]);
    let temp = [...items];
    let itemidx = temp.findIndex((i) => i.title === props.title);
    if (itemidx === -1) {
      temp = [...temp, props];
    } else {
      temp[itemidx].quantity = (temp[itemidx].quantity) + 1;
    }

    setitems([...temp]);
    
    
    
  };
  const removeItemFromCartHandler = (id) => {
    
     let temp = [...items];
    // let itemidx = temp.findIndex((i) => i.title === id.name);
    // if(temp[itemidx].quantity>1){

    // temp[itemidx].quantity = Number(temp[itemidx].quantity) - 1;
    // }
    // else{
      temp=temp.filter((i) => i.title !== id.title);
    
    
    setitems([...temp]);
    
  };

 const cartState = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <ProductContext.Provider value={cartState}>
      {console.log('inside main',items)}
           {props.children}
    </ProductContext.Provider>
  )
}
