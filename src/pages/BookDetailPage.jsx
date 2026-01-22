import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import ReviewForm from "../components/ReviewForm";

export default function BookDetailPage() {
  const [book, setBook] = useState({});
  const { slug } = useParams();

  const backendBaseUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();

  useEffect(() => {
    getBook();
  }, [slug]);

  function getBook() {
    axios
      .get(`${backendBaseUrl}/api/books/${slug}`)
      .then((resp) => {
        setBook(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function goBack(event) {
    event.preventDefault();
    navigate(-1);
  }

  return (
    <>
      <section
        className="py-5 mt-5 ms_page-banner d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: `url(${backendBaseUrl}/images/${book.image})`,
        }}
      >
        <div className="container text-center ">
          <h1 className="text-white">{book.title}</h1>
        </div>
      </section>
      <section className="container py-5 text-center">
        <a href="" onClick={goBack}>
          Ritorna alla pagina precedente
        </a>
        <h3 className="mt-3">Autore: {book.author}</h3>
        <p>{book.abstract}</p>
      </section>
      <section className="container">
        <h2>Recensioni:</h2>
        <div className="row row-cols-1 g-3">
          {book.reviews && book.reviews.length > 0 ? (
            book.reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))
          ) : (
            <p>Nessuna recensione presente</p>
          )}
        </div>
      </section>
      <section className="container py-5">
        <div className="row">
          <div className="col-12 col-md-8">
            <h2>Lascia una review</h2>
            <ReviewForm bookId={book.id} reloadreviews={getBook} />
          </div>
        </div>
      </section>
    </>
  );
}
