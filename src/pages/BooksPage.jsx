import axios from "axios";
import { useEffect, useState } from "react";

export default function BooksPage() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    console.log("Chiamo API");
    axios
      .get("http://localhost:3000/api/books")
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
        <ul>
          {books.map((book) => (
            <li key={book.id}>{book.title}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
