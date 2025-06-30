import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  const { slug, title, author, abstract, image } = book;
  return (
    <div className="card h-100">
      <img
        src={image || "https://placehold.co/334x344?text=No image"}
        className="card-img-top"
        alt={`Immagine di ${title}`}
      />
      <div className="card-body">
        <h5 className="card-title">
          {author} - {title}
        </h5>
        <p className="card-text">{abstract}</p>
        <Link to={`/books/${slug}`} className="btn btn-primary">
          Vedi dettagli
        </Link>
      </div>
    </div>
  );
};

export default BookCard;
