import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import useBookInfo from "./hooks/UseKy";
import Bodys from "./Bodys";
import Ranking from "./Ranking";
import Loading from "./Loading";
import { ImSearch } from "react-icons/im";
import { GiBookshelf } from "react-icons/gi";

export default function Home() {
  const {
    register,
    handleSubmit,
  } = useForm();
  const { books, fetchBook, fetching, loading, ranks, rankingBook, title } =
    useBookInfo();
  const onSubmit = (data) => {
    if (!fetching) {
      fetchBook(data.example);
    } else {
      alert("ただいま検索中です");
    }
  };
  useEffect(() => {
    rankingBook();
  }, []);
  return (
    <div>
      <header className="bg-white border-b-sky-400 border-b-4">
        <div className=" flex px-5 py-5 ">
          <a href="/">
            <div className="ml-9 text-4xl flex">
              <GiBookshelf />
              BookMan
            </div>
          </a>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="box-border px-5 pt-2 border-solid border rounded-3xl
            bg-white ml-10"
          >
            <input
              placeholder="タイトル、著者名"
              {...register("example", { required: true })}
              className="bg-white outline-none"
            />
            <button>
              <ImSearch />
            </button>
          </form>
        </div>
      </header>
      <div className=" pt-2 flex">
        <div className="rounded-lg w-950 border-solid bg-white pl-20 py-10">
          {fetching ? <Loading /> : <Bodys books={books} title={title} />}
        </div>
        <div className="bg-stone-100 mx-10  py-5 rounded-lg mr-auto">
          {loading ? <Ranking ranks={ranks} /> : <Loading />}
        </div>
      </div>
    </div>
  );
}
