
export const Item = ({name, img, description}) => {
  return (
    <div className="border m-2">
      <div className="card ">
        <div className="card-body ">
          <h5 className="card-title">{name}</h5>
          <img src={img} alt="" />
          <p className="card-text"> {description} </p>
          <button className="btn btn-outline-success">Detalles</button>
        </div>
      </div>
    </div>
  );
};
