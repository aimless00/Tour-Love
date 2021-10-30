import React from 'react';
import { useForm } from "react-hook-form";
import './AddTour.css'

const AddTour = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch("http://localhost:5000/tours", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Add Succesfully')
                    reset()
                }
            })
        console.log(data)
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="bg-light form">
            <h2>Add your Tour</h2>
            <input className="input" placeholder="name" defaultValue="" {...register("name")} />
            <br />
            <input className="input" placeholder="img link" {...register("img", { required: true })} />
            <br />
            <input className="input" placeholder="description" {...register("despcrip", { required: true })} />
            <br />
            <input className="input" placeholder="location" {...register("location", { required: true })} />
            <br />

            <input className="btn btn-primary" type="submit" />
        </form>
    );
};

export default AddTour;