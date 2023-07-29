import React from 'react'

function Card({product}) {
  return (
    <div className="card p-3" style={{ width: "15rem" }} key={product.id}>
      <div className="card-body">
        <img src={product.image} alt="" height="100px" />
        <h4 className="text-primary text-truncate">{product.title}</h4>
        <p className="text-truncate small">{product.description}</p>
        <button className="btn btn-primary p-1">Add to cart</button>
      </div>
    </div>
  );
}

export default Card