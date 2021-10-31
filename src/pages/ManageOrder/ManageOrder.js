import React from 'react';

const ManageOrder = ({ manageOrder }) => {
    const { _id, name, email, tourName, status } = manageOrder;
    const handleUpdate = (id) => {
        const url = `https://ghastly-ghost-60094.herokuapp.com/orders/${id}`;
        const updateStatus = { status: "Confrim" }
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateStatus)
        })
            .then(res => res.json())
            .then(data => {
                if (Promise) {
                    alert("Order Approve")
                }
            })


    }
    const handleDeleteOrder = id => {
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
        <tr>
            <td>{_id}</td>
            <td>{name}</td>
            <td>{tourName}</td>
            <td>{email}</td>
            <td><button onClick={() => handleUpdate(_id)} className="btn-primary">
                {status}</button></td>
            <td><button onClick={() => handleDeleteOrder(_id)} className="btn-danger">Delete Order</button></td>
        </tr>
    );
};

export default ManageOrder;