import "./HeaderNav.scss";

export function HeaderNav({
  onPageChange,
}: {
  onPageChange: (page: string) => void;
}) {
  return (
    <div className="header-nav">
      <div className="grid-container header-nav__grid">
        <span className="header-nav__title">Felipe Silva</span>
        <nav className="header-nav__list">
          <ul>
            <li>
              <a
                href=""
                onClick={(evt) => {
                  evt.preventDefault();
                  onPageChange("home");
                }}
              >
                Início
              </a>
            </li>
            <li>
              <a
                href=""
                onClick={(evt) => {
                  evt.preventDefault();
                  onPageChange("about");
                }}
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href=""
                onClick={(evt) => {
                  evt.preventDefault();
                  onPageChange("career");
                }}
              >
                Carreira
              </a>
            </li>
            <li>
              <a
                href=""
                onClick={(evt) => {
                  evt.preventDefault();
                  onPageChange("fsdt-libs");
                }}
              >
                FSDT Libs
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
