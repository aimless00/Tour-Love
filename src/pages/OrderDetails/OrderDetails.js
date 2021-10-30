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
        fetch(`http://localhost:5000/tours/${id}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [id])
    const onSubmit = data => {
        fetch("http://localhost:5000/orders", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Order Succesfully')
                    reset();
                }
            })
        console.log(data)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-light form">
            <h2>Order Review</h2>
            <label htmlFor="name">
                Name
                <input className="input" value={user?.displayName} {...register("name")} />
            </label>
            <br />
            <label htmlFor="email">
                Tour Name
                <input value={user?.email} className="input" {...register("email", { required: true })} />
            </label>
            <br />
            <label >
                Tour Name
                <input value={order?.name} className="input" {...register("tourName", { required: true })} />
            </label>
            <br />
            <label>
                Img Link
                <input value={order?.img} className="input" {...register("img", { required: true })} />
            </label>
            <br />
            <label>
                Description:
                <input value={order?.descrip} className="input" placeholder="description" {...register("despcrip", { required: true })} />
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