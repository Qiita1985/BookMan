import { useState } from "react";
import ky from "ky";

export default function useBookInfo() {
  const [fetching, setFetching] = useState(false);
  const [books, setBook] = useState("");
  const [loading, setLoading] = useState(false);
  const [ranks, setRanks] = useState("");
  const [title, setTitle] = useState("");

  //楽天APIのURL
  const BASE_URL =
    "https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?format=json&title=";
  const RANKING_URL =
    "https://app.rakuten.co.jp/services/api/IchibaItem/Ranking/20170628?format=json&genreId=200162&&";
  const applicationId = process.env.REACT_APP_ID;

  //検索ボタンが押された時の処理
  async function fetchBook(data) {
    setTitle(data);
    setFetching(true);
    const encodedParams = encodeURI(data);
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

  //検索のデータ移行
  const onSubmit = (data) => {
    if (!fetching) {
      fetchBook(data.example);
    } else {
      alert("ただいま検索中です");
    }
  };

  return {
    books,
    fetchBook,
    fetching,
    loading,
    ranks,
    title,
    rankingBook,
    onSubmit,
  };
}
