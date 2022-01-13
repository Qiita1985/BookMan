import React, { useState ,useEffect} from "react";
import { useForm } from "react-hook-form";
import useData from "./hooks/UseData";
import UseData from "./hooks/UseData";
import ItemSearch from "./ItemSearch";
import ky from "ky";

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [search, setSearch] = useState("");
  const BASE_URL =
    "https://app.rakuten.co.jp/services/api/BooksBook/Search/20170404?format=json&title=";
  const applicationId = "1096604682215741435";
  // const {error,setError,fetching,result} = UseData();
  async function onSubmit(data) {
    const encodedParams = encodeURI(data.example);
    const title =await ky
      .get(`${BASE_URL} ${encodedParams}&applicationId=${applicationId}`).json()
        setSearch(title);
  }
      useEffect(() => {
        console.log(search)
      }, [search])
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        placeholder="タイトル、著者名"
        {...register("example", { required: true })}
      />
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" />
    </form>
  );

  }
