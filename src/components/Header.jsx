import { useTranslation } from 'react-i18next';

export default function Header() {

  const { i18n } = useTranslation();
  const activeLang = i18n.language.toUpperCase();
  const handleLangChange = (lang) => {
    i18n.changeLanguage(lang.toLowerCase());
  };
  const { t } = useTranslation();

  return (
    <header className="header" id="header">
      <div className="header__inner">
        <a className="brand" href="/#hero" aria-label="7 Seas Global — início">
          <img className="brand__mark" src="/assets/brand/compass.png" alt="" />
          <span className="brand__text">
            <span className="brand__name">7 SEAS</span>
            <span className="brand__sub">GLOBAL</span>
          </span>
        </a>
        <nav className="nav" aria-label="Navegação principal">
          <ul className="nav__list">
            <li><a className="nav__link" href="/#hero">{t('nav.inicio')}</a></li>
            <li><a className="nav__link" href="/#sobre">{t('nav.sobre')}</a></li>
            <li><a className="nav__link" href="/#servicos">{t('nav.servicos')}</a></li>
            <li><a className="nav__link" href="/#porque">{t('nav.porque')}</a></li>
            <li><a className="nav__link" href="/#parceiros">{t('nav.parceiros')}</a></li>
            <li><a className="nav__link" href="/#contato">{t('nav.contato')}</a></li>
            <div className="ling">
              <div className="lang-switch" role="radiogroup" aria-label="Seletor de idioma">
                <div className={`lang-switch__slider is-${activeLang.toLowerCase()}`} aria-hidden="true"></div>
                  <button 
                    className={`lang-switch__btn ${activeLang === 'PT' ? 'is-active' : ''}`}
                    type="button" 
                    onClick={() => handleLangChange('PT')}>
                    PT
                  </button>
                  <button 
                    className={`lang-switch__btn ${activeLang === 'EN' ? 'is-active' : ''}`}
                    type="button" 
                    onClick={() => handleLangChange('EN')}>
                    EN
                  </button>
                  <button 
                    className={`lang-switch__btn ${activeLang === 'ESP' ? 'is-active' : ''}`}
                    type="button" 
                    onClick={() => handleLangChange('ESP')} >
                    ESP
                  </button>
                </div>
            </div>
          </ul>
          <button className="nav__toggle" type="button" aria-label="Abrir menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </nav>
      </div>
    </header>
  );
}
