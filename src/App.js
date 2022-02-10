import Home from "./components/Home";
import BookDetail from "./components/BookDetail";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/:id" element={<BookDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
