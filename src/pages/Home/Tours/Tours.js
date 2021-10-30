import React, { useEffect, useState } from 'react';
import Tour from '../Tour/Tour';
import './Tours.css'

const Tours = () => {
    const [tours, setTours] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/tours')
            .then(res => res.json())
            .then(data => setTours(data))
    }, [])
    return (
        <div>
            <h1 className="my-5 text-primary">FEATURED TOURS</h1>
            <div className="tours-section">
                {
                    tours.map(tour => <Tour
                        key={tour._id}
                        tour={tour}
                    ></Tour>)
                }
            </div>
        </div>
    );
};

export default Tours;