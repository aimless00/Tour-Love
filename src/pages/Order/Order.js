import React from 'react';

const Order = ({ order }) => {
    const { name, img, email, _id, tourName, despcrip, location } = order;


    const handleCancelOrder = id => {
        const url = `http://localhost:5000/orders/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('Your Order has Deleted');
                    window.location.reload()
                }
            })
        console.log(id)

    }
    return (
        <div className="border border-1 p-5 bg-light w-75 mx-auto ">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="text-start mt-4">
                <h3>Your Name: {name}</h3>
                <h5>Order Id: {_id}</h5>
                <h4>Tour Route: {tourName}</h4>
                <p>Your Email: {email}</p>
                <p><small>Your Location: {location}</small></p>
                <p><span className="fs-5 text-center">Description</span>: {despcrip.slice(0, 150)}</p>
            </div>
            <button onClick={() => handleCancelOrder(_id)} className="btn btn-success">Cancel Order</button>
        </div>
    );
};

export default Order;