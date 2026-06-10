import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function Contato() {
  const { t } = useTranslation();
  const formRef = useRef(null)
  const [statusText, setStatusText] = useState('')
  const [statusColor, setStatusColor] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    const fields = formRef.current.querySelectorAll('[required]')
    let ok = true
    fields.forEach(function (f) {
      if (!f.value.trim()) { ok = false; f.style.outline = '2px solid #c0563f' }
      else { f.style.outline = '' }
    })
    if (!ok) {
      setStatusText('Por favor, preencha todos os campos.')
      setStatusColor('#e6a17f')
      return
    }

    setStatusColor('var(--c-gold)')
    setStatusText('Envio direto em configuração — por favor utilize os canais do rodapé.')
  }

  return (
    <section className="section contato" id="contato" aria-label="Contato">
      <div className="container container--narrow">
        <h2 className="section-title section-title--grad">{t("contato.title")}<span className="section-title__rule"></span></h2>
        <form className="form" noValidate ref={formRef} onSubmit={handleSubmit}>
          <div className="field">
            <label className="field__label" htmlFor="f-nome">{t("contato.label_nome")}</label>
            <input className="field__input" id="f-nome" name="nome" type="text" placeholder={t("contato.label_nome")} required />
          </div>
          <div className="field">
            <label className="field__label" htmlFor="f-tel">{t("contato.label_tel")}</label>
            <input className="field__input" id="f-tel" name="e-mail" type="text" placeholder={t("contato.place_tel")} required />
          </div>
          <div className="field">
            <label className="field__label" htmlFor="f-msg">{t("contato.label_msg")}</label>
            <textarea className="field__input field__input--area" id="f-msg" name="mensagem" rows="5" placeholder={t("contato.place_nome")} required></textarea>
          </div>
          <button className="btn btn--block" type="submit">{t("contato.btn_send")}</button>
          <p className="form__status" role="status" aria-live="polite" style={{ color: statusColor }}>{statusText}</p>
        </form>
      </div>
    </section>
  )
}
