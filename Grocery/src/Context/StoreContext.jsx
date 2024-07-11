import { createContext, useState } from "react";
import ItemList from "../assets/ItemList";

export const StoreContext = createContext(null)

const StoreContextProvider = (props)=>{

const [cartItems, setCartItems] = useState({});

const addToCart = (itemId)=>{
if(!cartItems[itemId]){
    setCartItems((prev)=>({...prev,[itemId]:1}))
}
else{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
}
}

const removeFromCart =  (itemId)=>{

        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    
    }

//    const getTotalCartAmount=()=>{
//     let totalAmount = 0;
//     for(const item in cartItems) {
//         if(cartItems[item]>0){
//             let itemInfo = ItemList.find((product) => product.id === item);


//         totalAmount += itemInfo.price*cartItems[item];
//         }
//     }
//     return totalAmount;
//    }


    const contextValue = {


   
         ItemList,
         cartItems,
         setCartItems,
         addToCart,
         removeFromCart,
      

    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider