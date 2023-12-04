import React from "react";
import "./Popular.css";
import data_product from "../Assets/data";
import Item from "../Item/Item";
import item_new_price from "../Item/Item"
import item_old_price from "../Item/Item"
import i from "../Item/Item"
const Popular = () => {
  return (
    <div className="Popular">
      <h1>POPULAR IN WOMEN</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item,i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              newprice={item_new_price}
              oldprice={item_old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
