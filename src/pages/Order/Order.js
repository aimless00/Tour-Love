import React from 'react';

const Order = ({ order }) => {
    const { name, img, email, _id, tourName, despcrip, location, status } = order;


    const handleCancelOrder = id => {
        const url = `https://ghastly-ghost-60094.herokuapp.com/orders/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Your Order has Deleted');

                }
            })

    }
    return (
        <div className="border border-1 p-5 bg-light w-75 mx-auto ">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="text-start mt-4">
                <h3>Your Name: {name}</h3>
                <h5>Order Id: {_id}</h5>
                <p>Your Order Status: <span className="text-danger">{status}</span></p>
                <h6>Tour Route: <span className="text-success">{tourName}</span></h6>
                <p>Your Email: {email}</p>
                <p><small>Your Location: {location}</small></p>
                <p><span className="fs-5 text-center">Description</span>: {despcrip.slice(0, 150)}</p>
            </div>
            <button onClick={() => handleCancelOrder(_id)} className="btn btn-success">Cancel Order</button>
        </div>
    );
};

export default Order;