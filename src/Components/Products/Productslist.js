import React from 'react'
import Product from './Product'

export default function Productslist() {
    const productsArr = [

        {
        
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        },
        
        {
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        },
        
        {
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        },
        
        {
        
        title: 'Blue Color',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
        
        }
        
        ]
        // const items=productsArr.map((item)=>{
        //    return <div className="col-md-4" key={item.img}>
        //      <Product title={item.title} img={item.imageUrl} price={item.price} />

        //    </div>


  return (
    <>
    <div className="container my-3">
              <h1 className='text-center'>My Products</h1> 
              <div className="row"> 
              {productsArr.map((item)=>{
                  return <div className="col-md-4 my-3" key={item.img}>
                     <Product title={item.title} img={item.imageUrl} price={item.price} />
                  </div> 
              })} 
              </div> 
              </div> 
    </>
  )
}
