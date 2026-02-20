import "./SocialBar.scss";

export function SocialBar() {
  return (
    <div className="social-bar">
      <a
        target="_blank"
        href="https://www.linkedin.com/in/felipesilvadevtech/"
        aria-label="LinkedIn"
      >
        <img src="/icons/social-linkedin.svg" alt="LinkedIn" />
      </a>
      <a
        target="_blank"
        href="https://github.com/felipe-silva-devtech"
        aria-label="GitHub"
      >
        <img src="/icons/social-github.svg" alt="GitHub" />
      </a>
      <a
        target="_blank"
        href="mailto:felipe.silva.devtech@gmail.com"
        aria-label="E-mail"
      >
        <img src="/icons/social-mail.svg" alt="E-mail" />
      </a>
    </div>
  );
}
