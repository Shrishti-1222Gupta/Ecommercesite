import React, {useContext} from 'react'
import './CSS/ShopCategory.CSS'
import { ShopContext } from '../Components/Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'
import item_new_price from '../Components/Item/Item'
import item_old_price from '../Components/Item/Item'


const ShopCategory = (props) => {
    const{all_product} = useContext(ShopContext);
      return (
    <div className="shop-category">
      <img className='shopcategory-banner' src ={props.banner} alt=""/>
      <div className="shopcategory-indexSort">
<p>
  <span>
    showing 1-12
  </span> out of 36 products
</p>
<div className="shopcategory-sort">
  Sort by <img src={dropdown_icon} alt=""/>
</div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item,i)=>{
          if(props.category===item.category){

  return <Item
  key={i}
  id={item.id}
  name={item.name}
  image={item.image}
  newprice={item_new_price}
  oldprice={item_old_price}
/>

          }
          else{
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
 //ml
  )
}

export default ShopCategory