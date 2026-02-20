import "./HeaderNav.scss";

export function HeaderNav() {
  return (
    <div className="header-nav">
      <div className="grid-container header-nav__grid">
        <h1 className="header-nav__title">Felipe Silva</h1>
        <nav className="header-nav__list">
          <ul>
            <li>
              <a href="#home">Início</a>
            </li>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#portfolio">Portfólio</a>
            </li>
            <li>
              <a href="#fsdt-libs">FSDT Libs</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
