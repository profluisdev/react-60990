import { useEffect } from "react";

export const useLS = (key, value, setState) => { 

    const setLocalStorage = () => { 
        localStorage.setItem(key, JSON.stringify(value));
     }

    const getLocalStorage = () => { 
        return JSON.parse(localStorage.getItem(key)) || [] ;
     }

    useEffect( () => { 
        let lsTasks = getLocalStorage();
        if (lsTasks.length > 0) {
            setState(lsTasks);
        }     
     }, [] )

     useEffect(() => { 
           setLocalStorage() 
      }, [value])

    return {
        setLocalStorage,
        getLocalStorage
    }
 }