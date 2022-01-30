import { useState } from "react";
import ky from "ky";

//楽天APIのURL
const BASE_URL =
  "https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?format=json&title=";
const RANKING_URL =
  "https://app.rakuten.co.jp/services/api/IchibaItem/Ranking/20170628?format=json&genreId=200162&&";
const applicationId = process.env.REACT_APP_ID;

const useBookInfo = () => {
  const [fetching, setFetching] = useState(false);
  const [books, setBook] = useState("");
  const [loading, setLoading] = useState(false);
  const [ranks, setRanks] = useState("");
  const [title, setTitle] = useState("");

  //検索ボタンが押された時の処理
  async function fetchBook(example) {
    setTitle(example);
    setFetching(true);
    const encodedParams = encodeURI(example);
    const title = await ky
      .get(
        `${BASE_URL} ${encodedParams}&field=0&availability=0&applicationId=${applicationId}`
      )
      .json();
    setBook(title);
    setFetching(false);
  }

  //初回レンダーされた時にランキングを取得する
  async function rankingBook() {
    setLoading(true);
    const books = await ky
      .get(
        `${RANKING_URL}&field=0&availability=0&applicationId=${applicationId}`
      )
      .json();
    setRanks(books);
  }
  
  return {
    books,
    fetchBook,
    fetching,
    loading,
    ranks,
    title,
    rankingBook,
  };
};

export default useBookInfo;
