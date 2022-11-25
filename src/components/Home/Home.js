import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Card/Card';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css';

const Home = () => {
    const tshirts = useLoaderData();

    const [cart, setCart] = useState([]);

    const handleAddToCart = (tshirt) =>{
        const exists  = cart.find(ts => ts._id === tshirt._id);
        if(exists){
            alert('T-shirt already added');
        }
        else{
            const newCart = [...cart, tshirt];
            setCart(newCart);   
            // alert('Successfully Added'); 
        }
        
    }

    const handleRemoveItem = (tshirt) =>{
        const remaining = cart.filter(ts => ts._id !== tshirt._id );
        setCart(remaining);
    }

    return (
        <div className='home-container'>
           <div className="tshirt-container">
                {
                tshirts.map(tshirt => <Tshirt
                key={tshirt._id}
                tshirt={tshirt}
                handleAddToCart ={handleAddToCart}
                ></Tshirt>)   
                } 
           </div>
           <div className="cart-container">
            <Card
             cart={cart}
             handleRemoveItem={handleRemoveItem}
             ></Card>
           </div>
        </div>
    );
};

export default Home;