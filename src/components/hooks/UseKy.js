import { useState, useEffect } from "react";
import ky from "ky";

const BASE_URL =
  "https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?format=json&title=";
const applicationId = "1096604682215741435";

const useBookInfo = () => {
  const [fetching, setfetching] = useState(false)
  const [book, setBook] = useState("");
  async function fetchBook(example) {
    const encodedParams = encodeURI(example);
    const title = await ky
      .get(`${BASE_URL} ${encodedParams}&applicationId=${applicationId}`)
      .json();
    setBook(title);
    setfetching(true);
  }
  useEffect(() => {
    console.log(book);
  }, [book]);
  return {
    book,
    fetchBook,
    fetching,
  };
};

export default useBookInfo;
