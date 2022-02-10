import React, { useEffect } from "react";
import useBookInfo from "./hooks/UseKy";
import Bodys from "./Bodys";
import Ranking from "./Ranking";
import Loading from "./Loading";
import Header from "./Header";

export default function Home() {
  const { books, fetching, loading, ranks, rankingBook, title, onSubmit } =
    useBookInfo();
  useEffect(() => {
    rankingBook();
  }, []);
  return (
    <div>
      <Header onSubmit={onSubmit} />
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
