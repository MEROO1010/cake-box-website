import React, { useState, useEffect } from 'react';
import axios from 'axios';

function CakeList() {
    const [cakes, setCakes] = useState([]);

    useEffect(() => {
        const fetchCakes = async () => {
            const response = await axios.get('http://localhost:8000/cakes/');
            setCakes(response.data);
        };
        fetchCakes();
    }, []);

    return (
        <div>
            {cakes.map((cake) => (
                <div key={cake.id}>
                    <h2>{cake.name}</h2>
                    <p>{cake.description}</p>
                    <img src={cake.image} alt={cake.name} />
                </div>
            ))}
        </div>
    );
}
