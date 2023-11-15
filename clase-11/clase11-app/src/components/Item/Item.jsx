import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";


export const Item = ({ id, name, img, description }) => {

  const { handleAddProductCart } = useContext(GlobalContext);
  const handleAddProduct = () => { 
      const product = {
        name,
        img,
        description,
        id
      }
      handleAddProductCart( product )
   }

  return (
    <div className="border m-2">
      <div className="card ">
        <div className="card-body ">
          <h5 className="card-title">{name}</h5>
          <img src={img} alt="" />
          <p className="card-text"> {description} </p>
            <button className="btn btn-outline-success" onClick={handleAddProduct} >Agregar al carrito</button>
        </div>
      </div>
    </div>
  );
};
