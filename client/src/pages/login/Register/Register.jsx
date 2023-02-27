import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import "./style.css"

const schema = yup.object({
  username: yup.string().required().min(3),
  email: yup.string().required().email(),
  password: yup.string().min(8).required(),
  image: yup.mixed().test("file", "You need to provide a file", (value) => {
    if (value.length > 0) {
      return true;
    }
    return false;
  }),

}).required();

function Register({account,setAccount}) {
  const [selectimage, setSelectİmage] = useState("")
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });
  const onSubmit = data => console.log(data);
  const handleİmage = (e) => {
    const reader = new FileReader()
    reader.onload = () => {
      setSelectİmage(reader.result)
    }
    reader.readAsDataURL(e.target.files[0])
    console.log("salam")
  }
  const handleClick=()=>{
    setAccount(false)
}
  return (
    <div className='register'>
      <div className='register-area'>
        <h1>Register</h1>
        <form className='register-form' onSubmit={handleSubmit(onSubmit)}>
          <div className='input-box'>
            <input type="text" id='name' name='username' placeholder='username' {...register("username")} />
            <p>{errors.username?.message}</p>
          </div>
          <div className='input-box'>
            <input type="text" id='email' name='email' placeholder='email' {...register("email")} />
            <p>{errors.email?.message}</p>
          </div>
          <div className='input-box'>
            <input type="password" id='password' name='password' placeholder='password' {...register("password")} />
            <p>{errors.password?.message}</p>
          </div>
          <div className='input-box'>
            <div className='file-image'>
              <div className='image'>
                {selectimage ? <img src={selectimage} alt="" /> : ""}
              </div>
              <label className='choosenlabel' htmlFor="image">Choose İmage</label>
              <input type="file" id='image' name='image' onChange={handleİmage} hidden {...register("image")} />
            </div>
            <p>{errors.image?.message}</p>
          </div>
          <button className='submitbtn' type='submit'>Submit</button>
          <div className='route'>
            <p>
              Do you already have an account?</p>
            <span onClick={handleClick}>Login now</span>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
