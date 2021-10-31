import React, { useEffect, useState } from 'react';
import Tour from '../Tour/Tour';
import './Tours.css'

const Tours = () => {
    const [tours, setTours] = useState([]);
    useEffect(() => {
        fetch('https://ghastly-ghost-60094.herokuapp.com/tours')
            .then(res => res.json())
            .then(data => setTours(data))
    }, [])
    return (
        <div>
            <h1 className="my-5 text-primary">FEATURED TOURS</h1>
            {tours ? <div className="tours-section">
                {
                    tours.map(tour => <Tour
                        key={tour._id}
                        tour={tour}
                    ></Tour>)
                }
            </div> : <div class="spinner-border text-info" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>}
        </div>
    );
};

export default Tours;