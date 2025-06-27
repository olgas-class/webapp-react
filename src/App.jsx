import { BrowserRouter, Route, Routes } from "react-router-dom";
import GuestLayout from "./layout/GuestLayout";
import Home from "./pages/Home";
import Books from "./pages/Books";
import SingleBook from "./pages/SingleBook";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<GuestLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<Books />} />
            <Route path="/books/:id" element={<SingleBook />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
