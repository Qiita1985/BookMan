import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useBookInfo from "./hooks/UseKy";
import Body from "./Body";
export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { book, fetchBook, fetching } = useBookInfo();
  const [click, setClick] = useState(false);
  const onSubmit = (data) => {
    fetchBook(data.example);
    setClick(true);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="タイトル、著者名"
          {...register("example", { required: true })}
        />
        {errors.exampleRequired && <span>This field is required</span>}
        <input type="submit" />
        <div>
          {click && <Body book={book} />}
          {!click && <p>こんにちは</p>}
        </div>
      </form>
    </div>
  );
}
