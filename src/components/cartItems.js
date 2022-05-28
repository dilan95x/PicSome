import React, {useContext} from "react"
import {Context} from "../picSomeContext"
import PropType from "prop-types"
import useHover from "../hooks/useHover"

function Cartitem({item}) {

    const {removeCartItm} = useContext(Context)
    const [hoverd, refer] = useHover()

    const classNameHoverdDel = hoverd ? "ri-delete-bin-fill" : "ri-delete-bin-line"

    return (
        <div className="cart-item">
            <i
            
            className={classNameHoverdDel}
            onClick={()=>removeCartItm(item.id)} 
            ref={refer}
            >

            </i>


            <img alt="cartimg" width="130px" src={item.url} />
            <p>$5.99</p>
        </div>

    )
}

Cartitem.propType = {
    item: PropType.shape({
        url: PropType.string.isRequired
    })
}


export default Cartitem