import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import useBookInfo from "./hooks/UseKy";
import Bodys from "./Bodys";
import Ranking from "./Ranking";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { books, fetchBook, fetching, loading, ranks, rankingBook, title } =
    useBookInfo();
  const onSubmit = (data) => {
    fetchBook(data.example);
  };
  useEffect(() => {
    rankingBook();
  }, []);
  return (
    <div>
      <header>
        <div className=" flex mx-5 my-5 ">
          <a href="/">
            <div className="ml-9 text-4xl">BookMan</div>
          </a>
          <form onSubmit={handleSubmit(onSubmit)} className="pl-9">
            <input
              placeholder="タイトル、著者名"
              {...register("example", { required: true })}
              className="rounded-lg "
            />
            {errors.exampleRequired && <span>This field is required</span>}
            <input
              type="submit"
              className="inline-block px-5 rounded-lg bg-red-600 text-white font-semibold "
            />
          </form>
        </div>
      </header>
      <div className="bg-stone-200 pt-2 flex">
        {loading ? <Ranking ranks={ranks} /> : <p>loading</p>}
        {fetching ? <p>loading</p> : <Bodys books={books} title={title} />}
      </div>
    </div>
  );
}
