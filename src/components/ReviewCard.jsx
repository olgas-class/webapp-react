export default function ReviewCard({ review }) {
  return (
    <div className="card w-75 mb-3">
      <div className="card-body">
        <h5 className="card-title">
          Scritto da {review.name} <span>{review.vote}</span>
        </h5>
        <p className="card-text">{review.text}</p>
        <p className="text-end">{review.created_at}</p>
      </div>
    </div>
  );
}
