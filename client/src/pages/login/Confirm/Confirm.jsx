import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate, useLocation } from 'react-router-dom';
import * as yup from "yup";
import { authContext } from '../../../store/AuthContext';
import { api } from '../../../network/api';
import { useContext } from 'react';
const schema = yup.object({
  password: yup.string().min(4).required(),
}).required();

function Confirm() {
  let location = useLocation()
  const navigate = useNavigate();
  const { loginStatus, setloginStatus } = useContext(authContext);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => {
    api.add('/auth/confirmcode', {confirmCode:data.password, webUserId: location.state.webUserId})
    .then(res => {
        navigate('/home')
        localStorage.setItem('token', res.token);
        setloginStatus(true);
    })
    .catch(err => {
        alert('Confirm Code Error!!');
    })
  
  };
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
