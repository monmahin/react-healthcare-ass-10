import React from 'react';
import './Shipping.css'
import { useForm } from 'react-hook-form';
import useAuth from '../../Hook/useAuth';
import { useParams } from 'react-router';

const Shipping = () => {
    const { productId } = useParams()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {user}=useAuth()
    const onSubmit = data => console.log(data);
    return (
        <div>
            <h1>{ productId}</h1>
            <form className="shipping-form" onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <input defaultValue={user.displayName} {...register("name")} />
      
      {/* include validation with required or other standard HTML validation rules */}
      <input  defaultValue={user.email} {...register("email", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.email && <span className="error">This field is required</span>}
      <input placeholder="Address" defaultValue="" {...register("address")} />
      <input placeholder="City" defaultValue="" {...register("city")} />
      <input placeholder="Contact" defaultValue="" {...register("phone")} />
      <input className="btn-submit" type="submit" />
    </form>
        </div>
    );
};

export default Shipping;