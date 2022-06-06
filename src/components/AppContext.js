import { createContext } from "react";
import { useState } from "react";





export const contexto = createContext();
const { Provider } = contexto;



const AppContext = ({children}) => {

    const [cart,setCart] = useState([]);


    const isInCart = (id)=>{
        return cart.find(  producto  => producto.item.id === id);
        }


        

      
 
    const addItem = (item,quantity) => {

        if (isInCart(item.id)) {
          const newCart = [...cart]
        for(const  element  of  newCart){ 
            if(element.item.id === item.id){
                element.quantity = element.quantity + quantity;
           }
             setCart(newCart);
        }
       
    } else {
        setCart([...cart,{item:item,quantity:quantity}]);
    
    }}

    
    const removeItem = (id)=>{
        const newCart = [...cart].filter(producto => producto.item.id  !==  id);
        setCart(newCart);
    }
    
    const carroVacio = ()=>{
        setCart([])
    }
    
    
    


    return (           
        <Provider value={{ cart , addItem , carroVacio, removeItem ,isInCart }}> 
            {children}
        </Provider>
    );

}
export default AppContext