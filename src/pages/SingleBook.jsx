import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import ReviewsList from "../components/reviews/ReviewsList";
import Stars from "../components/Stars";

const SingleBook = () => {
  const { id } = useParams();

  const [book, setBook] = useState(null);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/books/${id}`).then((resp) => {
      setBook(resp.data.data);
    });
  }, []);

  return (
    <main className="pb-5">
      {book && book.image && (
        <section>
          <img className="banner" src={book.image} alt="" />
        </section>
      )}
      {book && (
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
      )}
    </main>
  );
};

export default SingleBook;
