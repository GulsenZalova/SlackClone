import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
  password: yup.string().min(8).required(),
}).required();

function Confirm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => console.log(data);
  return (
    <div className='register'>
    <div className='register-area'>
        <h1>Confirm</h1>
        <form className='register-form' onSubmit={handleSubmit(onSubmit)} >
            <div className='input-box'>
                <input type="password" id='password' name='password' placeholder='password' {...register("password")} />
                <p>{errors.password?.message}</p>
            </div>
            <button className='submitbtn' type='submit'>Submit</button>
        </form>
    </div>
</div>
  )
}

export default Confirm
