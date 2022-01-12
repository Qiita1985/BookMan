import React from "react";
import ky from 'ky';

function Search({data}) {
  const encodedtitle=encodeURI(data)
  const applictionId='1096604682215741435'
  const url = 'https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?fformat=json&title='+encodedtitle+'&applicationId='+applictionId
  return(
   console.log(url)
  )
  }

export default Search;
