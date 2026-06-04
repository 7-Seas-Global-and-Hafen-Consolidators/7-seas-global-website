export default function Header() {
  return (
    <header className="header" id="header">
      <div className="header__inner">
        <a className="brand" href="#hero" aria-label="7 Seas Global — início">
          <img className="brand__mark" src="/assets/brand/compass.png" alt="" />
          <span className="brand__text">
            <span className="brand__name">7 SEAS</span>
            <span className="brand__sub">GLOBAL</span>
          </span>
        </a>
        <nav className="nav" aria-label="Navegação principal">
          <ul className="nav__list">
            <li><a className="nav__link" href="#hero">Início</a></li>
            <li><a className="nav__link" href="#sobre">Sobre nós</a></li>
            <li><a className="nav__link" href="#servicos">Serviços</a></li>
            <li><a className="nav__link" href="#porque">Por que nós?</a></li>
            <li><a className="nav__link" href="#parceiros">Parceiros</a></li>
            <li><a className="nav__link nav__link--cta" href="#contato">Contato</a></li>
          </ul>
          <button className="lang" type="button" aria-label="Idioma">Pt-br</button>
          <button className="nav__toggle" type="button" aria-label="Abrir menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </nav>
      </div>
    </header>
  );
}
