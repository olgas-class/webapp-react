import axios from "axios";
import { useState } from "react";

const ReviewForm = ({ book_id, reloadReviews }) => {
  const emptyReview = {
    name: "",
    vote: 1,
    text: "",
  };
  const [formData, setFormData] = useState(emptyReview);

  const setFieldValue = (event) => {
    const { value, name } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // fare la chiamata al API
    axios
      .post(`http://localhost:3000/books/${book_id}/reviews`, formData)
      .then((resp) => {
        console.log(resp);
        // Quando arriva la risposta
        //    resetto il form
        setFormData(emptyReview);
        //    ricarico i dati della pagina per mostrare i dati aggiornati
        reloadReviews();
      });
  };

  return (
    <form className="card-body" onSubmit={handleFormSubmit}>
      <div className="mb-3">
        <label className="form-label" htmlFor="name">
          Nome
        </label>
        <input
          className="form-control"
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={setFieldValue}
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="vote">
          Voto
        </label>
        <select
          className="form-select"
          name="vote"
          id="vote"
          value={formData.vote}
          onChange={setFieldValue}
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="text">
          Commento
        </label>
        <textarea
          className="form-control"
          name="text"
          id="text"
          value={formData.text}
          onChange={setFieldValue}
        ></textarea>
      </div>
      <button className="btn btn-primary" type="submit">
        Invia
      </button>
    </form>
  );
};

export default ReviewForm;
