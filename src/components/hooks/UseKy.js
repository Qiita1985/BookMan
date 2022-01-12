import {useState} from 'react';
import ky from 'ky';

//楽天apiのURL
const base_url = 
'https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?fformat=json&title=';
const applicationId = '1096604682215741435';
const [Useky, setUseky] = useState(false)
const [Result,setResult]= useState({});
const UseData =(data)=>{
  const encodedData = encodeURI(data)
  console.log(encodedData)
}

export default UseData