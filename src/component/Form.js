import React from 'react';
import {useForm} from 'react-hook-form'
import {useState} from 'react'
import UseKyData from './components/UseKy';


export default function Form() {
  const { register, watch,handleSubmit, formState: { errors } } = useForm();
  const {error,setError,useky,result} =UseKyData();
  const [value,setvalue] =useState({
    freeWord:'',
  })
  const handleFreeWord = (e) =>{
    setError({
      freeWord:false,
    });
    setvalue({ [e.target.name]:e.target.value})
  } 
  const onSubmit = data=>console.log(data)
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="タイトル 著者名" {...register("example")} />
      {/* {errors.exampleRequired && <span>This field is required</span>} */}
      <input type="submit" className='bg-pink-700 text-white' value='検索' />
    </form>
  );
}