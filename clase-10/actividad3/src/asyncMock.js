const products = [
    { id: "1", name: "Camisa", img: "url-img", price: 100, category: "Calzados", description: "Una camisa", stock: 10 },
    { id: "2", name: "Corbata", img: "url-img", price: 100, category: "Calzados", description: "Una Corbata", stock: 10 },
    { id: "3", name: "Pantalón", img: "url-img", price: 100, category: "Calzados", description: "Un Pantalón", stock: 10 },
    { id: "4", name: "Zapatilla", img: "url-img", price: 100, category: "Calzados", description: "Una Zapatilla", stock: 10 },
    { id: "5", name: "Remera", img: "url-img", price: 100, category: "ropa", description: "Una Remera", stock: 10 },
    { id: "6", name: "Camisa", img: "url-img", price: 100, category: "ropa", description: "Una Camisa", stock: 10 },
    { id: "7", name: "Pantalón", img: "url-img", price: 100, category: "ropa", description: "Una Pantalón", stock: 10 },
  ];
  
  export const getProducts = () => {
    return new Promise((resolve, reject) => {
      
      if (products.length > 0) {
        setTimeout(() => {
          resolve(products);
        }, 3000);
      } else {
        reject("No hay productos");
      }
    });
  };

  export const getProduct = ( id ) => {
    return new Promise((resolve, reject) => {
      
      const product = products.find( product => product.id === id); 
      setTimeout( () => { 
        if(!product) {
          reject("No se encontró el producto solicitado")
        } else {
          resolve(product);
        }
       }, 2000 )
      
    });
  };