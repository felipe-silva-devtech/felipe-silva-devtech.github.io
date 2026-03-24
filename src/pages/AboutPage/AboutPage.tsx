import "./AboutPage.scss";

export function AboutPage() {
  return (
    <div className="about-page" id="about" data-section-type="page">
      <div className="about-page__photo"></div>

      <div className="about-page__content">
        <div className="about-page__content__section">
          <h2>Sobre mim</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet
            consectetur adipiscing elit quisque faucibus ex. Adipiscing elit
            quisque faucibus ex sapien vitae.
          </p>
          <a href="#">Mais sobre mim →</a>
        </div>
        <hr />
        <div className="about-page__content__section">
          <h2>Especialidades</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet
            consectetur adipiscing elit quisque faucibus ex. Adipiscing elit
            quisque faucibus ex sapien vitae.
          </p>
          <a href="#">Projetos que trabalhei →</a>
        </div>
        <hr />
        <div className="about-page__content__section">
          <h2>Entre em contato</h2>
        </div>
      </div>
    </div>
  );
}
