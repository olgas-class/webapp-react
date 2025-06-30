import axios from "axios";
import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getBooks();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    getBooks();
  };

  const getBooks = () => {
    const params = {};
    if (search) {
      params.search = search;
    }

    axios
      .get(`${import.meta.env.VITE_API_URL}/books`, {
        params,
      })
      .then((resp) => {
        setBooks(resp.data.data);
      });
  };

  return (
    <>
      <main>
        <section className="container py-5">
          <h1 className="text-center mb-4">Nostri libri</h1>
          <form
            onSubmit={handleSubmit}
            className="mb-4 d-flex justify-content-center"
          >
            <input
              className="form-control w-50"
              type="search"
              placeholder="iniza la ricerca..."
              aria-label="Cerca libro per titolo"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            <button className="btn btn-success" type="submit">
              Cerca
            </button>
          </form>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
            {books.map((curBook) => (
              <div key={curBook.id} className="col">
                <BookCard book={curBook} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Books;
