import React, {useContext} from "react"
import {Link} from "react-router-dom"
import {Context} from "../picSomeContext"


function Header() {

const {cartArr} = useContext(Context)

const classNameCngforI = cartArr.length > 0 ? "ri-shopping-cart-fill" : "ri-shopping-cart-line"

    return (
        <header>
           <Link to="/"><h2>Pic Some</h2></Link>
            <Link to="/cart">
        
        <i className={`${classNameCngforI} ri-fw ri-2x`}>{cartArr.length > 0 ? cartArr.length:""}</i> 
               
            </Link>
        </header>
    )
}

export default Header
