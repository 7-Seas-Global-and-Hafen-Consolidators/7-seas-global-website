import { useTranslation } from 'react-i18next';

export default function Hero() {

  const { t } = useTranslation();

  return (
    <section className="hero" id="hero" aria-label="Apresentação">
      <div className="hero__bg"><img src="/assets/img/hero-ship.webp" alt="Navio porta-contêineres no mar aberto" width="1920" height="1026" /></div>
      <div className="hero__overlay"></div>
      <div className="container hero__inner">
        <h1 className="hero__title">
          <span className="hero__title-strong">{t('welcome')}</span> <span className="hero__title-light">global</span><br />
          sem fronteiras
        </h1>
        <p className="hero__lead">Nosso verdadeiro diferencial é a capacidade de estabelecer presença física e operacional em locais complexos e rotas negligenciadas pela concorrência.</p>
        <a className="btn btn--gold" href="#sobre">Saiba Mais</a>
      </div>
    </section>
  );
}
