import { ImSearch } from "react-icons/im";
import { GiBookshelf } from "react-icons/gi";
import { useForm } from "react-hook-form";

export default function Header({ onSubmit }) {
  const { register, handleSubmit } = useForm();
  return (
    <header className="bg-white border-b-sky-400 border-b-4">
      <div className=" flex px-5 py-5 ">
        <a href="/">
          <div className="ml-9 text-4xl flex">
            <GiBookshelf />
            BookMan
          </div>
        </a>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="box-border border-solid border px-5 pt-2  rounded-3xl
       ml-10"
        >
          <input
            placeholder="タイトル、著者名"
            {...register("example", { required: true })}
            type="text"
            className="outline-none "
            autoComplete="none"
          />
          <button>
            <ImSearch />
          </button>
        </form>
      </div>
    </header>
  );
}


