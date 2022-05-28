import React, {useContext, useState} from "react"
import {Context} from "../picSomeContext"
import CartItem from "../components/cartItems"


function Cart() {

const [addtoCart, cngaddingToCart] = useState("Place Order")

const {cartArr, emptyOutTheCart} = useContext(Context)
const totalCost = cartArr.length * 5.99
const dsplayTotalCost = totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})


function orderingBtnCng(){
    cngaddingToCart("Ordering")
    setTimeout(()=>{
        console.log("Order placed!")
        cngaddingToCart("Place Order")
        emptyOutTheCart()
        }, 3000)

}

const mapCartItems = cartArr.map(item=>(
    
    <CartItem key={item.id} item={item} />
    
    ))

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {mapCartItems}
            <p className="total-cost">Total: {dsplayTotalCost}</p>
            {cartArr.length>0 ?  <div className="order-button">
                <button onClick={orderingBtnCng}>{addtoCart}</button>
            </div> :
            
            <p>You have no items in your cart.</p>
        }
        </main>
    )
}

export default Cart