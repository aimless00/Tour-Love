import React from 'react';

const Tour = ({ tour }) => {
    const { name, img, location } = tour;
    return (
        <div className="d-flex justify-content-between bg-light align-items-center border-end border-3 shadow p-3 mb-2 rounded">
            <div className="d-flex justify-content-start align-items-center">
                <div>
                    <img width='300px' height="200px" src={img} alt="" />
                </div>
                <div className="text-start mx-2">
                    <h4>{name}</h4>
                    <p><i class="fas fa-map-marker-alt fs-4 mx-2"></i>{location}</p>
                </div>
            </div>
            <div>
                <button className="btn btn-primary">Book Now</button>
            </div>
        </div>
    );
};

export default Tour;