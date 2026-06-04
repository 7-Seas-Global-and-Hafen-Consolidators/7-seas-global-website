import { useTranslation } from 'react-i18next';

export default function Hero() {

  const { t } = useTranslation();

  return (
    <section className="hero" id="hero" aria-label="Apresentação">
      <div className="hero__bg"><img src="/assets/img/hero-ship.webp" alt="Navio porta-contêineres no mar aberto" width="1920" height="1026" /></div>
      <div className="hero__overlay"></div>
      <div className="container hero__inner">
        <h1 className="hero__title">
          <span className="hero__title-strong">{t('hero.title_strong')}</span> <span className="hero__title-light">{t('hero.title_light')}</span><br />
          {t('hero.title_rest')}
        </h1>
        <p className="hero__lead">{t('hero.lead')}</p>
        <a className="btn btn--gold" href="#sobre">{t("hero.cta")}</a>
      </div>
    </section>
  );
}
