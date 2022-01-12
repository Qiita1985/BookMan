import { useState } from "react";
import ky from "ky";

// Rakuten APIで用意されているエンドポイント
const BASE_URL =
  "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20170706?format=json";
const applicationId = "1096604682215741435";

const useData = (data) => {
  // エラーを管理するstate
  const [error, setError] = useState({
    freeWord: false,
  });
  // ローディングする際に使うstate
  const [fetching, setFetching] = useState(false);
  // レスポンスを格納するstate
  const [result, setResult] = useState({});

  // submitボタン押下
    const params = data
    if (params) {
      // ローディング開始
      setFetching(true);

      const encodedParams = encodeURI(params);

      // apiコール
      const data = ky
        .get(
          `${BASE_URL}&keyword=${encodedParams}&page=1&applicationId=${applicationId}`
        )
        .then(() => {
          setResult(data);
          // ローディング終了
          setFetching(false);
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
          setFetching(false);
        });
    } else {
      // nullの時はエラー
      console.log("検索条件を入力してください。");
      setError({
        freeWord: true,
      });
      setFetching(false);
    }
  // データをオブジェクト型で返す
  return { error, setError, fetching, result, };
};
export default useData;
