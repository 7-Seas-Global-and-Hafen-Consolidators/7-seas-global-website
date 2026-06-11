import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"; // Para redirecionar para a página de privacidade
import Modal from "./Modal"; // Importando o novo componente do modal

export default function Contato() {
  const { t } = useTranslation();
  const formRef = useRef(null);

  const [statusText, setStatusText] = useState("");
  const [statusColor, setStatusColor] = useState("");
  const [isTermsOpen, setIsTermsOpen] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const fields = formRef.current.querySelectorAll(
      'input[required]:not([type="checkbox"]), textarea[required]',
    );
    let ok = true;

    fields.forEach(function (f) {
      if (!f.value.trim()) {
        ok = false;
        f.style.outline = "2px solid #c0563f";
      } else {
        f.style.outline = "";
      }
    });

    if (!ok) {
      setStatusText(t("contato.status_error_fields"));
      setStatusColor("#e6a17f");
      return;
    }

    const checkbox = formRef.current.querySelector("#f-aceite");
    if (!checkbox.checked) {
      setStatusText(t("contato.status_error_checkbox"));
      setStatusColor("#e6a17f");
      return;
    }

    setStatusColor("var(--c-gold)");
    setStatusText(
      "Envio direto em configuração — por favor utilize os canais do rodapé.",
    );
  }

  return (
    <section className="section contato" id="contato" aria-label="Contato">
      <div className="container container--narrow">
        <h2 className="section-title section-title--grad">
          {t("contato.title")}
          <span className="section-title__rule"></span>
        </h2>

        <form className="form" noValidate ref={formRef} onSubmit={handleSubmit}>
          <div className="field">
            <label className="field__label" htmlFor="f-nome">
              {t("contato.label_nome")}
            </label>
            <input
              className="field__input"
              id="f-nome"
              name="nome"
              type="text"
              placeholder={t("contato.label_nome")}
              required
            />
          </div>

          <div className="field">
            <label className="field__label" htmlFor="f-tel">
              {t("contato.label_tel")}
            </label>
            <input
              className="field__input"
              id="f-tel"
              name="e-mail"
              type="text"
              placeholder={t("contato.place_tel")}
              required
            />
          </div>

          <div className="field">
            <label className="field__label" htmlFor="f-msg">
              {t("contato.label_msg")}
            </label>
            <textarea
              className="field__input field__input--area"
              id="f-msg"
              name="mensagem"
              rows="5"
              placeholder={t("contato.place_nome")}
              required
            ></textarea>
          </div>

          <div className="field field--checkbox">
            <input
              type="checkbox"
              id="f-aceite"
              name="aceite"
              className="field__checkbox"
              required
            />
            <label htmlFor="f-aceite" className="field__label-checkbox">
              {t("contato.checkbox_text_1")}
              <button
                type="button"
                className="field__link"
                onClick={() => setIsTermsOpen(true)}
              >
                {t("contato.checkbox_link_terms")}
              </button>
              {t("contato.checkbox_text_2")}
              <Link to="/privacidade" className="field__link">
                {t("contato.checkbox_link_privacy")}
              </Link>
              .
            </label>
          </div>

          <button className="btn btn--block" type="submit">
            {t("contato.btn_send")}
          </button>
          <p
            className="form__status"
            role="status"
            aria-live="polite"
            style={{ color: statusColor }}
          >
            {statusText}
          </p>
        </form>
      </div>

      <Modal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
        title={t("termos.title")}
      >
        <p>{t("termos.intro")}</p>
        <h4>{t("termos.s1_title")}</h4>
        <p>{t("termos.s1_text")}</p>
        <h4>{t("termos.s2_title")}</h4>
        <p>{t("termos.s2_text")}</p>
        <h4>{t("termos.s3_title")}</h4>
        <p>{t("termos.s3_text")}</p>
      </Modal>
    </section>
  );
}
