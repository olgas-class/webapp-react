import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import BooksPage from "./pages/BooksPage";
import BookDetailPage from "./pages/BookDetailPage";
import CreateBookPage from "./pages/CreateBookPage";
import { GlobalProvider } from "./context/GlobalContext";
import { AlertProvider } from "./context/AlertContext";

function App() {
  const nomeApp = "Books App";
  return (
    <>
      <GlobalProvider>
        <AlertProvider>
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
        </AlertProvider>
      </GlobalProvider>
    </>
  );
}

export default App;
