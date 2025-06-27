import axios from "axios";
import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/books`).then((resp) => {
      setBooks(resp.data.data);
    });
  }, []);

  return (
    <>
      <main>
        <section className="container py-5">
          <h1 className="text-center mb-4">Nostri libri</h1>
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
