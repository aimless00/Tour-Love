import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const OrderDetails = () => {
    const { id } = useParams();
    const [order, setOrder] = useState();
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        fetch(`https://ghastly-ghost-60094.herokuapp.com/tours/${id}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [id])
    const onSubmit = data => {
        data.status = "Pending "
        fetch("https://ghastly-ghost-60094.herokuapp.com/orders", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order Succesfully')
                    reset(data);
                }
            })
        console.log(data)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-light form">
            <h2>Order Review</h2>
            <label htmlFor="name">
                Name
                <input className="input" defaultValue={user?.displayName} {...register("name")} />
            </label>
            <br />
            <label htmlFor="email">
                Tour Name
                <input defaultValue={user?.email} className="input" {...register("email")} />
            </label>
            <br />
            <label >
                Tour Name
                <input defaultValue={order?.name} className="input" {...register("tourName")} />
            </label>
            <br />
            <label>
                Img Link
                <input defaultValue={order?.img} className="input" {...register("img")} />
            </label>
            <br />
            <label>
                Description:
                <input defaultValue={order?.descrip} className="input" placeholder="description" {...register("despcrip")} />
            </label>
            <br />
            <label>
                Your Location
                <input className="input" placeholder="Your Location" {...register("location", { required: true })} />
            </label>
            <br />
            <input className="btn btn-primary" type="submit" />
        </form>
    );
};

export default OrderDetails;