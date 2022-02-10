import Home from "./components/Home";
import BookDetail from "./components/BookDetail";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookDetail/:id" element={<BookDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
