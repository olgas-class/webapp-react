import { Link } from "react-router-dom";
import NoImagePlaceholder from "../assets/images/no-image-placeholder.jpg";

export default function BookCard({ book }) {
  const backendBaseUrl = import.meta.env.VITE_BACKEND_URL;
  return (
    <div className="card h-100">
      <img
        src={
          book.image !== null
            ? `${backendBaseUrl}/images/${book.image}`
            : NoImagePlaceholder
        }
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">
          {book.title} - {book.author}
        </h5>
        <p className="card-text">{book.abstract}</p>
        <Link to={`/books/${book.id}`} className="btn btn-outline-primary">
          Vedi dettagli
        </Link>
      </div>
    </div>
  );
}
