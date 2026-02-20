import { SocialBar } from "@/components/SocialBar/SocialBar";
import "./HomePage.scss";

export function HomePage() {
  return (
    <div className="home-page">
      <div className="home-page__profile-background">
        <img src="/images/profile-home.png" alt="Foto de Perfil" />
      </div>

      <div className="home-page__greetings">
        <h1>
          <span>Olá! Eu sou</span>
          <span>Felipe Silva,</span>
          <span>Desenvolvedor Front-end</span>
        </h1>
      </div>

      <div className="home-page__resume">
        <div className="home-page__resume__section">
          <h2>Sobre mim</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet
            consectetur adipiscing elit quisque faucibus ex. Adipiscing elit
            quisque faucibus ex sapien vitae.
          </p>
          <a href="#">Mais sobre mim →</a>
        </div>
        <hr />
        <div className="home-page__resume__section">
          <h2>Especialidades</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet
            consectetur adipiscing elit quisque faucibus ex. Adipiscing elit
            quisque faucibus ex sapien vitae.
          </p>
          <a href="#">Projetos que trabalhei →</a>
        </div>
        <hr />
        <div className="home-page__resume__section">
          <h2>Entre em contato</h2>
          <SocialBar />
        </div>
      </div>
    </div>
  );
}
