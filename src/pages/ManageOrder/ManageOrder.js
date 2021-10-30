import React from 'react';

const ManageOrder = ({ manageOrder }) => {
    const { _id, name, email, tourName } = manageOrder
    return (
        <tr>
            <td>{_id}</td>
            <td>{name}</td>
            <td>{tourName}</td>
            <td>{email}</td>
            <td><button className="btn-primary">pending</button></td>
        </tr>
    );
};

export default ManageOrder;