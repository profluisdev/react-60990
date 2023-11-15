

import { createContext, useState } from "react";

// Creamos el context
export const GlobalContext = createContext(null);


// Creamos el provider 
export const GlobalContextProvider = ( { children } ) => {
    const products = [
        { id: "1", name: "Camisa", img: "url-img", price: 100, category: "Calzados", description: "Una camisa", stock: 10 },
        { id: "2", name: "Corbata", img: "url-img", price: 100, category: "Calzados", description: "Una Corbata", stock: 10 },
        { id: "3", name: "Pantalón", img: "url-img", price: 100, category: "Calzados", description: "Un Pantalón", stock: 10 },
        { id: "4", name: "Zapatilla", img: "url-img", price: 100, category: "Calzados", description: "Una Zapatilla", stock: 10 },
        { id: "5", name: "Remera", img: "url-img", price: 100, category: "Verano", description: "Una Remera", stock: 10 },
        { id: "6", name: "Camisa", img: "url-img", price: 100, category: "Verano", description: "Una Camisa", stock: 10 },
        { id: "7", name: "Bermuda", img: "url-img", price: 100, category: "Verano", description: "Una Bermuda", stock: 10 },
      ];

    const [message, setMessage] = useState("");

    const [cart, setCart] = useState([]);    
    
    const handleMessage = (e) => { 
        setMessage(e.target.value);
     }

    
    const handleAddProductCart = ( product ) => {
        
        setCart([...cart, product]);
    }
    
     const objetProvider = {
        message,
        handleMessage,
        products,
        handleAddProductCart,
        cart,
     }

    return <GlobalContext.Provider value={ objetProvider } > {children} </GlobalContext.Provider>
}
