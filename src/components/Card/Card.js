import React from 'react';

const Card = ({cart,handleRemoveItem }) => {
    return (
        <div>
            <h2>Orders Summary: </h2>
            <h5>Order Quantity: {cart.length}</h5>
            {
              cart.map(tshirt =><p
                  key={tshirt._id}
                >
                  {tshirt.name}
                  <button onClick={() =>handleRemoveItem(tshirt)}>X</button>  
              </p> )  
            }
        </div>
    );
};

export default Card;