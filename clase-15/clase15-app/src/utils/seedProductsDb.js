import { addDoc, collection } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

const products = [
  { name: "Zapato", img: "url-img", price: 500, category: "calzados", description: "Una Zapato", stock: 10 },
  { name: "Bota", img: "url-img", price: 140, category: "calzados", description: "Una Bota", stock: 10 },
  { name: "Ojota", img: "url-img", price: 550, category: "calzados", description: "Un Ojota", stock: 10 },
  { name: "Zapatilla", img: "url-img", price: 730, category: "calzados", description: "Una Zapatilla", stock: 10 },
  { name: "Remera", img: "url-img", price: 130, category: "ropa", description: "Una Remera", stock: 10 },
  { name: "Camisa", img: "url-img", price: 955, category: "ropa", description: "Una Camisa", stock: 10 },
  { name: "Pantalón", img: "url-img", price: 476, category: "ropa", description: "Una Pantalón", stock: 10 },
];

export const seedProductsDb = () => {
  products.forEach((product) => {
    addDoc(collection(db, "products"), product);
  });
};
