import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateBook = () => {
  const navigate = useNavigate();

  const emptyBook = {
    title: "",
    author: "",
    abstract: "",
  };

  const [formData, setFormData] = useState(emptyBook);

  const setFieldValue = (event) => {
    const { value, name } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormChange = (event) => {
    event.preventDefault();
    axios
      .post(`${import.meta.env.VITE_API_URL}/books`, formData)
      .then((resp) => {
        const slug = resp.data.slug;
        navigate(`/books/${slug}`);
      });
  };

  return (
    <main className="container py-5">
      <h1 className="text-center">Aggiungi un libro</h1>
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-xl-6">
          <form onSubmit={handleFormChange}>
            <div className="mb-3">
              <label className="form-label" htmlFor="title">
                Titolo
              </label>
              <input
                className="form-control"
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={setFieldValue}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="author">
                Autore
              </label>
              <input
                className="form-control"
                type="text"
                id="author"
                name="author"
                value={formData.author}
                onChange={setFieldValue}
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="abstract">
                Descrizione
              </label>
              <textarea
                className="form-control"
                name="abstract"
                id="abstract"
                value={formData.abstract}
                onChange={setFieldValue}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-success">
              Crea
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default CreateBook;
