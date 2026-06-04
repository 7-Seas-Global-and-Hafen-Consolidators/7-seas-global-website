import { useTranslation } from "react-i18next";

export default function Servicos() {

  const { t } = useTranslation();

  return (
    <section className="section servicos" id="servicos" aria-label="Serviços">
      <div className="container">
        <h2 className="section-title section-title--grad">
          {t("servicos.title")}<span className="section-title__rule"></span>
        </h2>
        <ul className="services-grid">
          <li className="card reveal">
            <span className="card__icon">
              <span className="icon-mask" data-icon="globe"></span>
            </span>
            <h3 className="card__title">{t("servicos.s1_title")}</h3>
            <p className="card__text">
              {t("servicos.s1_text")}
            </p>
          </li>
          <li className="card reveal">
            <span className="card__icon">
              <span className="icon-mask" data-icon="shipment"></span>
            </span>
            <h3 className="card__title">{t("servicos.s2_title")}</h3>
            <p className="card__text">
              {t("servicos.s2_text")}
            </p>
          </li>
          <li className="card reveal">
            <span className="card__icon">
              <span className="icon-mask" data-icon="ship"></span>
            </span>
            <h3 className="card__title">{t("servicos.s3_title")}</h3>
            <p className="card__text">
              {t("servicos.s3_text")}
            </p>
          </li>
          <li className="card reveal">
            <span className="card__icon">
              <span className="icon-mask" data-icon="airplane"></span>
            </span>
            <h3 className="card__title">{t("servicos.s4_title")}</h3>
            <p className="card__text">
              {t("servicos.s4_text")}
            </p>
          </li>
          <li className="card reveal">
            <span className="card__icon">
              <span className="icon-mask" data-icon="truck"></span>
            </span>
            <h3 className="card__title">{t("servicos.s5_title")}</h3>
            <p className="card__text">
              {t("servicos.s5_text")}
            </p>
          </li>
          <li className="card reveal">
            <span className="card__icon">
              <span className="icon-mask" data-icon="brazil"></span>
            </span>
            <h3 className="card__title">{t("servicos.s6_title")}</h3>
            <p className="card__text">
              {t("servicos.s6_text")}
            </p>
          </li>
          <li className="card reveal">
            <span className="card__icon">
              <span className="icon-mask" data-icon="multimodal"></span>
            </span>
            <h3 className="card__title">{t("servicos.s7_title")}</h3>
            <p className="card__text">
              {t("servicos.s7_text")}
            </p>
          </li>
          <li className="card reveal">
            <span className="card__icon">
              <span className="icon-mask" data-icon="airplane-2"></span>
            </span>
            <h3 className="card__title">{t("servicos.s8_title")}</h3>
            <p className="card__text">
              {t("servicos.s8_text")}
            </p>
          </li>
          <li className="card reveal">
            <span className="card__icon">
              <span className="icon-mask" data-icon="support"></span>
            </span>
            <h3 className="card__title">{t("servicos.s9_title")}</h3>
            <p className="card__text">
              {t("servicos.s9_text")}
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
