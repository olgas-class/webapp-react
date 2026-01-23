import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import BooksPage from "./pages/BooksPage";
import BookDetailPage from "./pages/BookDetailPage";
import CreateBookPage from "./pages/CreateBookPage";

function App() {
  const nomeApp = "Books App";
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout nomeApp={nomeApp} />}>
            <Route element={<Home />} path="/" />
            <Route path="/books">
              <Route element={<BooksPage />} path="" />
              <Route element={<CreateBookPage />} path="create" />
              <Route element={<BookDetailPage />} path=":slug" />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
