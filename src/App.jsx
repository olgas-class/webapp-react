import { BrowserRouter, Route, Routes } from "react-router-dom";
import GuestLayout from "./layout/GuestLayout";
import Home from "./pages/Home";
import Books from "./pages/Books";
import SingleBook from "./pages/SingleBook";
import NotFound404 from "./pages/NotFound404";
import CreateBook from "./pages/CreateBook";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<GuestLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/books">
              <Route path="" element={<Books />} />
              <Route path=":slug" element={<SingleBook />} />
              <Route path="create" element={<CreateBook />} />
            </Route>

            <Route path="*" element={<NotFound404 />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
