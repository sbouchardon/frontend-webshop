
import React, { useState, useEffect } from 'react';

import Info from './Info.jsx';

export default function Card(props) {

    const [like, setLike] = useState(false);
    const [cart, setCart] = useState(false);
    const [showInfo, setShowInfo] = useState(false);

    const updateLike = () => {
        setLike(prev => !prev);
        
        if(!like){
            setShowInfo(true); // Show the info message
        }
        
    };

    const updateCart = () => {
        setCart(prev => !prev);
        
        if(!cart){
            setShowInfo(true); // Show the info message
        }
        
    };

    // Auto-hide info after 5 seconds
    useEffect(() => {
        if (showInfo) {
            const timer = setTimeout(() => setShowInfo(false), 5000);
            return () => clearTimeout(timer);
        }
    }, [showInfo]);

    return (
        <>

            <Info visible={showInfo} img={props.image} message="added to the liked products"/>

            <div className="w-80 flex items-center justify-center">
                <div className="card bg-beige rounded-md shadow-md flex flex-col items-center text-center space-y-2 ">
                    <img className="cardImage" src={props.image} alt={props.name} />

                    <div className="cardTitle">
                        <h1>{props.name}</h1>
                    </div>

                    <div className="cardDescription">
                        <p>{props.description}</p>
                    </div>

                    <div className="cardPrice">
                        <p>{props.price} €</p>
                    </div>

                    <div className="relative flex h-20 items-center justify-between">
                        <div className="p-4">
                            <button onClick={updateLike}>
                                <img className="nav-button" src={like ? "/liked.svg" : "/like.svg"} alt="like" />
                            </button>
                        </div>

                        <div className="p-4">
                            <button className="button" onClick={updateCart}>
                                Add to cart
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}