import React from "react"
import {useState} from "react"
function Item ({name, category}) {
  const [cartItem, setCartItem] = useState(false)



  return (
    <li className={cartItem ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button style={{cursor: "pointer"}} className={cartItem ? "remove" : "add"} onClick={() => setCartItem(cartItem => !cartItem)}>{(cartItem && "Remove from Cart") || "Add to Cart"}</button>
    </li>
  )
}

export default Item
