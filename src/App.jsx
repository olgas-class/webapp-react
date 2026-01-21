import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import BooksPage from "./pages/BooksPage";
import BookDetailPage from "./pages/BookDetailPage";

function App() {
  const nomeApp = "Books App";
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout nomeApp={nomeApp} />}>
            <Route element={<Home />} path="/" />
            <Route element={<BooksPage />} path="/books" />
            <Route element={<BookDetailPage />} path="/books/:id" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
