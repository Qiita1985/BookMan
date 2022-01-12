import {useState} from 'react'
import UseKyData from './UseKy'
import ItemSearch from './ItemSearch';

const Home = () =>{
  const {error,setError,kying,result,handlesubmit} = UseKyData();
  const [value, setValue] = useState({
    freeWrod:'',
  });

  const handoleFreeWord = (e) =>{
    setError({
      freeWord:false,
    });
    setValue({[e.target.name]:e.target.value});
  };

  return (
    <>
      <ItemSearch
      value={value}
      error={error}
      handoleFreeWord={handoleFreeWord}
      handlesubmit={handlesubmit}
      />
      <Result result={result}/>
    </>
  )
}

export default Home

