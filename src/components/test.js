class BookSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      sortType: 'sales',
      result: [],
      isStarted: false,
      itemDetails: {},
      selectedItem: '',
    };
    // コールバック関数としてthisが機能するようにthisをbindする
    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSort = this.handleSort.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }
 
  // 引数eにはイベントオブジェクトが渡されます
  handleInput(event) {
    // イベントオブジュエクトからフォームに入力されたvalue値を取得
    const newKeyword = event.target.value;
    // this.setStateを返し、state.keywordを取得したvalue値で更新し、
    // コンポーネントを再レンダリング
    this.setState({ keyword: newKeyword });
  }
 
  handleClick() {
    // this.state.keywordが空でなかった場合
    if (this.state.keyword !== '') {
      // this.setFetchedData()メソッドを呼び出す
      this.setFetchedData();
    }
  }
 
  fetchData(callback) {
    // リクエストURLのパラメータの定義
    const params = '?'
      + 'formatVersion=2'
      + '&applicationId=1073694800328578192'
      + `&sort=${this.state.sortType}`
      + `&keyword=${this.state.keyword}`;

    // Fecth APIを使った非同期通信
    fetch(`https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404${params}`, {
      method: 'get',
    }).then((response) => {
      // レスポンスのstatusが200だった場合
      if (response.status === 200) {
        // レスポンスの結果をjson形式で返します
        return response.json();
      }
    }).then(
      // レスポンスをコールバック関数の引数に渡し、コールバック関数を返します。
      response => callback(response.Items)
    ).catch(
      // エラーの場合
      response => console.error(response)
    );
  }
 
  setFetchedData(obj = {}) {
    this.setState(
      // state.sortTypeを更新
      obj,
      // stateを更新し、コンポーネントの再レンダリング後に呼び出すようにする
      () => this.fetchData(
        apiResult => this.setState({
          result: apiResult,
          isStarted: true,
        }),
      ),
    );
  }
 
  handleSort(event) {
    // イベントオブジュエクトからラジオボタンで選択されたsvalue値を取得
    const newSortType = event.target.value;
    // 入力フォームにキーワードが1文字以上入力されており、
    // かつ選択されたソート順が現在のソート順と異なる場合
    if (this.state.keyword !== '' && newSortType !== this.state.sortType) {
      // sort順を指定したオブジェクトを引数に渡しthis.setFetchDate()メソッドを呼び出す
      this.setFetchedData({ sortType: newSortType });
    }
  }
  
  handleShow(item) {
    this.setState({
      itemDetails: item,
      selectedItem: item.itemUrl,
    });
  }
  
  render() {
    return (
      <div>
        <BookSearchHeader
          keyword={this.state.keyword}
          handleInput={this.handleInput}
          handleClick={this.handleClick}
        />
        <BookSearchResult
          keyword={this.state.keyword}
          result={this.state.result}
          isStarted={this.state.isStarted}
          sortType={this.state.sortType}
          selectedItem={this.state.selectedItem}
          handleSort={this.handleSort}
          handleShow={this.handleShow}
        />
        <BookSearchDetails item={this.state.itemDetails} />
      </div>
    );
  }
}

const BookSearchHeader = (props) => {
  return (
    <header>
      <h1>BookSearch! <span>by 楽天ブックス</span></h1>
      <BookSearchFormInput
        keyword={props.keyword}
        handleInput={props.handleInput}
      />
      <BookSearchFormButton handleClick={props.handleClick} />
    </header>
  );
}

const BookSearchFormInput = (props) => {
  return (
    <input type="text" placeholder="キーワード" value={props.keyword} onChange={props.handleInput} />
  )
};

const BookSearchFormButton = (props) => {
  return (
    <button onClick={props.handleClick}>検索</button>
  );
};

const BookSearchResult = (props) => {
  const displayRadioButton = () => {
    if (props.result.length !== 0) {
      return <BookSearchFormRadio handleSort={props.handleSort} sortType={props.sortType} />;
    }
    return null;
  };
  const displayItemNodes = () => {
    // props.result.lengthが「0」（検索結果がなく）かつ
    // props.isStartedがfalseではない（検索を1回以上行なっている）場合
    if (props.result.length === 0 && props.isStarted !== false) {
      // 検索結果がない旨のメッセージを表示
      return <p className="nonMessage">お探しの書籍はありませんでした</p>;
    // 上記の条件以外の場合だが、props.isStartedはfalseではない場合（検索結果がある場合）
    } else if (props.isStarted !== false) {
      // props.resultをmap()メソッドで展開し、
      // それぞれの要素の数だけBookSearchItemコンポーネントを生成し、
      // 検索結果をitemとkeyという名前をつけて渡す
      return props.result.map((item) => (
        <BookSearchItem
          item={item}
          key={item.itemUrl}
          selectedItem={props.selectedItem}
          handleShow={props.handleShow}
        />
      ));
    }
    // 最初の状態: 何も表示しない
    return null;
  };

  return (
    <div className="item-list">
      {displayRadioButton()}
      <div>{displayItemNodes()}</div>
    </div>
  );
};

const BookSearchFormRadio = (props) => {
  return (
    <div>
      <label htmlFor="sales">
        <input
          id="sales"
          type="radio" name="sortType"
          value="sales"
          checked={props.sortType === 'sales'}
          onChange={props.handleSort}
        /> 売れている順
      </label>
      <label htmlFor="releaseDate">
        <input
          id="releaseDate"
          type="radio" name="sortType"
          value="-releaseDate"
          checked={props.sortType === '-releaseDate'}
          onChange={props.handleSort}
        /> 発売順
      </label>
    </div>
  );
};

const BookSearchItem = (props) => {
  const handleShow = () => props.handleShow(props.item);
  const selected = (props.selectedItem === props.item.itemUrl) ? 'item selected' : 'item';
  return (
    <div onClick={handleShow} className={selected}>
      <figure>
        <img src={props.item.smallImageUrl} alt={props.item.title} />
      </figure>
      <p>{props.item.title}</p>
    </div>
  );
};

const BookSearchDetails = (props) => {
  const style = {
    color: '#e53935',
    fontSize: '18px',
    fontWeight: 'bold',
  }
  console.log(props.item);
  // item変数にprops.itemを代入
  const item = props.item;
  // displayItemDetails変数にDOMを出力する無名関数を代入
  const displayItemDetails = () => {
    // itemオブジェクトのプロパティが1つ以上ある場合
    if (Object.keys(item).length !== 0) {
      return (
        <div>
          <ul className="details-list">
            <li>
              <a href={item.itemUrl} target="_blank" rel="noopener noreferrer">
                <img src={item.largeImageUrl} alt={item.title} />
              </a>
            </li>
            <li><strong style={{ fontSize: '18px' }}>{item.title}</strong></li>
            <li>著者: {item.author}</li>
            <li>出版社: {item.publisherName}</li>
            <li>発売日: {item.salesDate}</li>
            <li>ISBN: {item.isbn}</li>
            <li>評価: {item.reviewAverage}</li>
            <li>価格: <span style={style}>{item.itemPrice}円</span></li>
            <li>{item.itemCaption}</li>
            <li className="details-link">
              <a href={item.itemUrl} target="_blank" rel="noopener noreferrer">
                購入する
              </a>
            </li>
          </ul>
        </div>
      );
    }
    return null;
  };
  return (
    <div className="item-details">
      {/* 上記で定義したdisplayItemDetails関数を実行し、DOMを出力 */}
      { displayItemDetails() }
    </div>
  );
};

ReactDOM.render(
  <BookSearch />,
  document.querySelector('.content')
);