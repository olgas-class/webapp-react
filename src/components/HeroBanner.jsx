import BannerImage from "../assets/images/banner.png";
export default function HeroBanner() {
  return (
    <section className="hero-bg vh-100 d-flex align-items-center">
      {/* <img src={BannerImage} alt="" /> */}
      <div className="container">
        <h1>Benvenuti nella Migliore App dei Libri</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          autem corporis exercitationem eos perspiciatis molestiae architecto
          assumenda nam ipsa voluptas reprehenderit dignissimos debitis, a nihil
          facere? Sapiente est omnis labore?
        </p>
      </div>
    </section>
  );
}
