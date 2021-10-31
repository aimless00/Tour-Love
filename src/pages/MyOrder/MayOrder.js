import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Order from '../Order/Order';
import './MyOrder.css'

const MayOrder = () => {
    // const [sreacrOrder, setSearchOderder] = useState([]);
    const [orders, setOrder] = useState([]);
    const { user } = useAuth();

    // setSearchOderder(data)
    useEffect(() => {
        fetch('https://ghastly-ghost-60094.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => {
                const myOrderd = data.filter(order => order.email === user.email);
                setOrder(myOrderd)
            })


    }, [orders])

    return (
        <div>
            <h1>This is My Order </h1>
            <div className="my-order">
                {
                    orders.map(order => <Order
                        key={order._id}
                        order={order}
                    ></Order>)
                }
            </div>
        </div>
    );
};

export default MayOrder;