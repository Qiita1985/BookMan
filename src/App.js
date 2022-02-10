import Home from "./components/Home";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";
import BookDetail from "./components/BookDetail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookDetail:sbin" element={<BookDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
