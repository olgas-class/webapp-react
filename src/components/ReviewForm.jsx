import axios from "axios";
import { useState } from "react";
import { useGlobal } from "../context/GlobalContext";

const initialFormData = {
  name: "",
  vote: 1,
  text: "",
};

export default function ReviewForm({ bookId, reloadreviews }) {
  const [formData, setFormData] = useState(initialFormData);

  const { backendUrl } = useGlobal();

  function updateFormData(event) {
    const value = event.target.value; // 5
    const key = event.target.name; // vote
    setFormData({
      ...formData,
      [key]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post(`${backendUrl}/api/books/${bookId}/reviews`, formData)
      .then((resp) => {
        setFormData(initialFormData);
        reloadreviews();
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-2">
        <label className="form-label" htmlFor="name">
          Nome
        </label>
        <input
          value={formData.name}
          onChange={updateFormData}
          className="form-control"
          type="text"
          id="name"
          name="name"
          required
        />
      </div>
      <div className="mb-2">
        <label className="form-label" htmlFor="vote">
          Voto
        </label>
        <input
          value={formData.vote}
          onChange={updateFormData}
          className="form-control"
          type="number"
          id="vote"
          name="vote"
          required
          max="5"
          min="1"
        />
      </div>
      <div className="mb-2">
        <label className="form-label" htmlFor="text">
          Testo
        </label>
        <textarea
          value={formData.text}
          onChange={updateFormData}
          className="form-control"
          name="text"
          id="text"
        ></textarea>
      </div>
      <button className="btn btn-success">Invia</button>
    </form>
  );
}
