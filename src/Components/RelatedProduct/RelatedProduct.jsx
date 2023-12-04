import React from 'react'
import './RelatedProducts.css'
import data_product from '../Assets/data'
const RelatedProduct = () => {
  return (
    <div className= 'relatedproducts'>
        <h1>Related Products</h1>
     <hr/>
     <div className="relatedproducts-item">

    {data_product.map((item,i)=>{
          return <Item key={i}
          id={item.id}
          name={item.name}
          image={item.image}
          newprice={item_new_price}
          oldprice={item_old_price}/>
    })}

     </div>
    </div>
  )
}

export default RelatedProduct