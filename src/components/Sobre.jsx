import { useTranslation } from "react-i18next";

export default function Sobre() {

  const { t } = useTranslation();

  return (
    <section className="section sobre" id="sobre" aria-label="Sobre nós">
      <img
        className="sobre__map"
        src="/assets/brand/brazil-map.png"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
      />
      <div className="container sobre__grid">
        <div className="sobre__block sobre__block--a reveal">
          <h2 className="sobre__title">
            {t("sobre.title_a")}
          </h2>
          <p>
            {t("sobre.text_a")}
          </p>
        </div>
        <div className="sobre__block sobre__block--b reveal">
          <h2 className="sobre__title">{t("sobre.title_b")}</h2>
          <p>
            {t("sobre.text_b_1")}{" "}
            <strong className="text-gold">last-mile</strong> {t("sobre.text_b_2")}
          </p>
        </div>
      </div>
    </section>
  );
}
