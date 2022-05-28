import React, {useEffect, useState} from "react"

const Context = React.createContext()

function ContextProvider({children}){
    //Store date from API
    const [picData, cngpicData] = useState([])

    //Change add to cart and hold icon
    const [cartArr, cngcartArr] = useState([])
    
    
    //Gather data from API
    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

    useEffect(() =>{
    fetch(url)
    .then(res=> res.json())
    .then(data=> cngpicData(data))
    },[])


    //update addToCart and hold cart
    function updateCartItm(newItem){
        cngcartArr(oldItems=> [...oldItems, newItem])
    }


    //remove from Cart and hold cart
    function removeCartItm(id){
        cngcartArr(oldItems=> oldItems.filter(everyItem=> everyItem.id !== id))
    }


    //Empty the qhole cart
    function emptyOutTheCart(){
        cngcartArr([])
    }

    
    console.log(cartArr) 
    

    function updateCorrctId(id){
        const updatedPicArr = picData.map(oldPicArr=> {

            if(oldPicArr.id===id){
                return {...oldPicArr, isFavorite:!oldPicArr.isFavorite}
            }return oldPicArr
        
        })
        cngpicData(updatedPicArr)
    }



    return(
        //sending date through context
        <Context.Provider value={{picData, 
        
        updateCorrctId, 
        cartArr, 
        updateCartItm, 
        removeCartItm, 
        emptyOutTheCart
        
        }}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}