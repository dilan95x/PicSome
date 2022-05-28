import PropTypes from 'prop-types'

import {Context} from "../picSomeContext"
import useHover from "../hooks/useHover"
import React, {useContext} from "react"


function Image({className, img}){

    const [hoverd, refer] = useHover()
    const {updateCorrctId, updateCartItm, cartArr, removeCartItm} = useContext(Context)

    //add to hart icon
    function hartIcon(){
        if(img.isFavorite){
        
            return <i onClick={()=> updateCorrctId(img.id)} className="ri-heart-fill favorite"></i>
       
            }else if(hoverd){

                return <i onClick={()=> updateCorrctId(img.id)} className="ri-heart-line favorite"></i> 
    }}


    // add to cart icon
    function cartIcon(){

        const alradyInCart = cartArr.some(everyItm=> everyItm.id===img.id)
        console.log(alradyInCart)

        if(alradyInCart){

            return <i className="ri-shopping-cart-fill cart" onClick={() => removeCartItm(img.id)}></i>
            }else if(hoverd){

       return <i className="ri-add-circle-line cart" onClick={() => updateCartItm(img)}></i>
    }}




    return(

        <div 
        className={`${className} image-container`} 
        ref={refer}
        >

           <img alt={img.url} src={img.url} className="image-grid" />
           
           {hartIcon()}
           {cartIcon()}

        </div>
    
    )
    
}

    Image.propTypes = {
        className:PropTypes.string, 
        img:PropTypes.shape({
            id:PropTypes.string.isRequired,
            url:PropTypes.string.isRequired,
            isFavorite:PropTypes.bool.isRequired
        })
}

export default Image