import React from 'react';

const Product = ({id, name, description, price, img, addProduct}) => {
    const productStyle = { height : '100px', width : '100px'};
    const card = { width : '200px'};
    return (
        <div >
            <div className="card" style={card}  id= {id}>
                <img  className="card-img-top" style={productStyle} src={img} alt="card"/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <button href="#" className="btn btn-primary" onClick={() => addProduct({id, name, description, img, price, units : 1})}>Add</button>
                    <span>&#8377;{price} </span>
                </div>
            </div>
        </div>        
    );
};

export default Product;