export default function NotFound() {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-rose-500 text-3xl">ページが見つかりません</h1>
        <p>
          お探しのページは一時的にアクセスできないか、移動または削除された可能性があります
        </p>
        <a href="/" className="text-indigo-500">
          トップページに戻る
        </a>
        <img src="books.png" className=" block m-auto" />
      </div>
    </div>
  );
}
