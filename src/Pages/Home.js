import React from 'react'

import MainHeader from '../Components/Header/MainHeader'

import CartState from '../store/CartState'
import pic from '../asset/pic.jpg'
import Figure from 'react-bootstrap/Figure';


export default function Home() {
  return (<div>
    <CartState>

<MainHeader/>

</CartState>
<Figure>
      <Figure.Image
        width={2000}
        height={720}
        alt="171x180"
        src={pic}
      />
     
    </Figure>
    </div>
  )
}
