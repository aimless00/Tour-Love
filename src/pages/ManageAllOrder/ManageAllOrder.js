import React, { useState } from 'react';
import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import ManageOrder from '../ManageOrder/ManageOrder';

const ManageAllOrder = () => {
    const [manageOrders, setManageOrder] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setManageOrder(data))

    }, [])
    console.log(manageOrders);
    return (
        <div className="mx-5 my-5">
            <h3 className="text-primary">Manage All Order</h3>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>Order Id</th>
                        <th>Coustomer Name</th>
                        <th>Tour Name</th>
                        <th>Coustomer Email</th>
                        <th>Order Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        manageOrders.map(manageOrder => <ManageOrder
                            key={manageOrder._id}
                            manageOrder={manageOrder}
                        ></ManageOrder>
                        )
                    }
                </tbody>
            </Table>

        </div>
    );
};

export default ManageAllOrder;