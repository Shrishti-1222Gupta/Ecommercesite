import React from 'react'
import './NewCollections.css'
import new_collection from '../Assets/new_collections'
import Item from '../Item/Item'
import item_new_price from '../Item/Item'
import item_old_price from '../Item/Item'

const NewCollections = () => {
  return (
    <div className='new-collections'>
      <h1>
        NEW COLLECTIONS
      </h1>
      <hr/>
      <div className="collections">
        {new_collection.map((item,i)=>{
            return <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            newprice={item_new_price}
            oldprice={item_old_price}
          />
        })}
        </div>
        </div>
  )
}

export default NewCollections