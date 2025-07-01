import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import ReviewsList from "../components/reviews/ReviewsList";
import Stars from "../components/Stars";

const SingleBook = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/books/${slug}`)
      .then((resp) => {
        setBook(resp.data.data);
      })
      .catch((err) => {
        if (err.status === 404) {
          navigate("/not-found");
        }
      });
  }, []);

  return (
    <main className="pb-5">
      {book && book.image && (
        <section>
          <img className="banner" src={book.image} alt="" />
        </section>
      )}
      {book !== null ? (
        <>
          <section className="container py-4">
            <BackButton />
            <h1 className="text-center my-4">
              {book.title} - {book.author}
            </h1>
            <div className="text-center mb-4">
              <Stars vote={book.vote_avg} />
            </div>
            <p className="text-center">{book.abstract}</p>
          </section>
          <section className="container">
            <h2>Recensioni</h2>
            <ReviewsList reviews={book.reviews} />
          </section>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </main>
  );
};

export default SingleBook;
