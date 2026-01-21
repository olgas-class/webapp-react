import axios from "axios";
import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";

export default function BooksPage() {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(null);

  const backendBaseUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    axios
      .get(`${backendBaseUrl}/api/books?page=${page}`)
      .then((resp) => {
        setBooks(resp.data.results);
        setTotalPages(resp.data.info.pages);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  return (
    <>
      <section className="py-5 mt-5 container">
        <h1>Lista di tutti i libri</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
          {books.map((book) => (
            <div className="col" key={book.id}>
              <BookCard book={book} />
            </div>
          ))}
        </div>
        <div className="mt-3">
          <span className="me-3">
            Pagina: {page} / {totalPages}
          </span>

          <button
            disabled={page === 1}
            onClick={() => {
              setPage(page - 1);
            }}
            className="btn btn-success me-1"
          >
            Prev
          </button>
          <button
            disabled={page === totalPages}
            onClick={() => {
              setPage(page + 1);
            }}
            className="btn btn-success me-1"
          >
            Next
          </button>
        </div>
      </section>
    </>
  );
}
