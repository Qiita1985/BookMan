import {useState} from 'react';
import ky from 'ky';

//楽天apiのURL
const base_url = 
'https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?fformat=json&title=';
const applicationId = '1096604682215741435';
const UseKyData = () =>{
 const [error, setError] = useState({
   freeword:false,
 });
 const [useky, setuseky] = useState(false)
 const [result,setResult]= useState({});
 const handleSubmit = (value)=>{
   const params = value.freeword;
   
   if(params){
     setuseky(true);

     const encodedParams = encodeFreeWord(params);

    const data = ky.get(`${base_url}&title=${encodedParams}&applicationId=${applicationId}`
     ).then((response) =>{
       setResult(response.data);
       setuseky(false);
     })
     .catch((error) =>{
       console.log(error);
       setuseky(false);
     });
   }else{
     console.log('条件を入力してください');
     setError({
       freeword:true,
     });
     setuseky(false);
   }
 };
 //エンコード処理
 const encodeFreeWord = (params) =>{
   const urlEncode = require('urlencode');
   return urlEncode(params);
 };
 return {error,setError,useky,result,handleSubmit};
};
export default UseKyData;