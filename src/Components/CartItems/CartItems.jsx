import React, { useContext, cartItems } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'
//import cartItems from '../../Components/CartItems/CartItems'

const CartItems = () => {
    const {getTotalCartAmount,CartItems,all_product,removeFromCart} = useContext(ShopContext)
  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quntity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
     {all_product.map((e) => {
      if (cartItems[e.id]>0) {
        return   <div>
        <div className="cartitems-format cartitems-format-main">
          <img src={e.image} alt="" className='cartitems-product-icon'/>
          <p>{e.name}</p>
          <p>${e.new_price}</p>
          <button className='cartitems-quantity'>{cartItems[e.id]}</button>
          <p>{e.new_price*cartItems[e.id]}</p>
          <img src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
        </div>
        <hr />
      </div>
      }
      return null;
    })}
    <div className="cartitems-down"> 
      <div className="cartitems-total">
        <h1>cart Totals</h1>
      
      <hr />
      <div>
         <div className="cartitems-total">
        <p>Subtotal</p>
        <p>${getTotalCartAmount()}</p>
      </div>
      <hr />
      <div className="cartitems-total-item">
        <p>Shipping Fee</p>
        <p>Free</p>
      </div>
      <hr />
      <div className="cartitems-total-item">
        <h3>Total</h3>
        <h3>${getTotalCartAmount()}</h3>
      </div> 
    </div>
    <button>PROCEED TO CHECKOUT</button>
     </div>
     <div className="cartitems-promcode">
      <p>If you have a promo code, Enter it here</p>
      <div className="cartitems-promocode">
        <input type="text" placeholder='promo code'/>
        <button>Submit</button>
      </div>
     </div>
    </div>
   </div>
  )
}

export default CartItems
