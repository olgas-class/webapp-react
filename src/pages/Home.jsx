import { useState } from "react";
import HeroBanner from "../components/HeroBanner";
import axios from "axios";
import BookCard from "../components/BookCard";

export default function Home() {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState([]);

  const backendBaseUrl = import.meta.env.VITE_BACKEND_URL;

  function handleSubmit(event) {
    event.preventDefault();
    getBooks();
  }

  function getBooks() {
    axios
      .get(`${backendBaseUrl}/api/books/search?key=${search}`)
      .then((resp) => {
        setBooks(resp.data.results);
      });
  }

  return (
    <>
      <HeroBanner />
      <section className="container py-5">
        <h2>Cerca un libro</h2>
        <form onSubmit={handleSubmit}>
          <input
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            type="search"
            className="form-control"
          />
          <button type="submit" className="btn btn-warning">
            Cerca
          </button>
        </form>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
          {books.map((book) => (
            <div className="col" key={book.id}>
              <BookCard book={book} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
