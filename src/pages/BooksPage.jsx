import axios from "axios";
import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";

export default function BooksPage() {
  const [books, setBooks] = useState([]);

  const backendBaseUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    axios
      .get(`${backendBaseUrl}/api/books`)
      .then((resp) => {
        setBooks(resp.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
      </section>
    </>
  );
}
