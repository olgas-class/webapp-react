import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main>
      <section>
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active position-relative">
              <img
                src="/images/banner.png"
                className="d-block w-100"
                alt="..."
              />
              <div className="text-center position-absolute top-50 start-50 translate-middle bg-body-tertiary p-2">
                <h1>Consulta il catalogo, lascia recensioni</h1>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      <section className="container py-5">
        <h2 className="text-center">Consulta il nostro catalogo</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
          suscipit quod saepe ullam impedit enim omnis asperiores dicta
          consequatur odit, iste recusandae beatae adipisci aperiam atque modi
          nisi quidem mollitia?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati
          laborum minus animi impedit, nostrum aliquid voluptates dicta, velit
          esse explicabo accusamus repellendus repellat iure necessitatibus
          reiciendis quia mollitia voluptate. Excepturi.
        </p>
        <Link className="btn btn-warning" to="/books">
          Vedi tutti i nostri libri
        </Link>
      </section>
    </main>
  );
};

export default Home;
