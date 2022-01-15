import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import useBookInfo from "./hooks/UseKy";
import Bodys from "./Bodys";
export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { books, fetchBook, fetching } = useBookInfo();
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
          {click && <Bodys books={books} />}
          {!click && <p>読みたい本を検索してください</p>}
        </div>
      </form>
    </div>
  );
}
