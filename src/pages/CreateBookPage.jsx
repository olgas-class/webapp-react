import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const initialData = {
  title: "",
  author: "",
  abstract: "",
  image: null,
};

export default function CreateBookPage() {
  const [formData, setFormData] = useState(initialData);
  const [imagePreviewUrl, setImagePreviewUrl] = useState(null);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const navigate = useNavigate();

  function updateFormData(event) {
    const { value, name, type } = event.target;
    if (type === "file") {
      const image = event.target.files[0];
      const imagePreview = URL.createObjectURL(image);
      setImagePreviewUrl(imagePreview);

      setFormData({
        ...formData,
        [name]: image,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  }

  function handleSubmitForm(event) {
    event.preventDefault();
    const dataToSend = new FormData();
    for (const key in formData) {
      dataToSend.append(key, formData[key]);
    }

    axios
      .post(`${backendUrl}/api/books`, dataToSend, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((resp) => {
        const slug = resp.data.bookSlug;
        navigate(`/books/${slug}`);
      })
      .catch((err) => {
        console.log("Gestisco errore", err);
      });
  }

  return (
    <section className="container py-5 mt-5">
      <h1 className="text-center">Aggiungi un nuovo libro</h1>
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <form onSubmit={handleSubmitForm}>
            <div className="mb-3">
              <label className="form-label" htmlFor="title">
                Titolo
              </label>
              <input
                value={formData.title}
                onChange={updateFormData}
                className="form-control"
                type="text"
                id="title"
                name="title"
              />
            </div>
            <div className="mb-3">
              <label className="form-label" htmlFor="author">
                Autore
              </label>
              <input
                type="text"
                id="author"
                className="form-control"
                name="author"
                value={formData.author}
                onChange={updateFormData}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="abstract" className="form-label">
                Descrizione
              </label>
              <textarea
                className="form-control"
                name="abstract"
                id="abstract"
                value={formData.value}
                onChange={updateFormData}
              ></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="image">Immagine di copertina</label>
              <input
                className="form-control"
                type="file"
                name="image"
                id="image"
                onChange={updateFormData}
              />

              <div className="mt-3">
                {imagePreviewUrl && (
                  <img className="w-25" src={imagePreviewUrl} alt="" />
                )}
              </div>
            </div>

            <button className="mt-3 btn btn-primary">Invia</button>
          </form>
        </div>
      </div>
    </section>
  );
}
