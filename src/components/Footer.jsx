import { useTranslation } from "react-i18next";

export default function Footer() {
  
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <img src="/assets/brand/logo-stacked.png" alt="7 Seas Global" loading="lazy" decoding="async" />
          </div>
          <p className="footer__tagline">{t("footer.tagline_1")} <strong className="text-gold fw-700">{t("footer.tagline_2")}</strong></p>
        </div>

        <hr className="footer__rule" />

        <div className="footer__cols">
          <div className="footer__col">
            <h4 className="footer__head">{t("footer.nav_head")}</h4>
            <ul>
              <li><a href="#sobre">{t("footer.nav_1")}</a></li>
              <li><a href="#servicos">{t("footer.nav_2")}</a></li>
              <li><a href="#porque">{t("footer.nav_3")}</a></li>
              <li><a href="#parceiros">{t("footer.nav_4")}</a></li>
              <li><a href="#contato">{t("footer.nav_5")}</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4 className="footer__head">{t("footer.contact_head")}</h4>
            <ul className="footer__contact">
              <li><span className="icon-mask icon-mask--sm" data-icon="email"></span><a href="">e-mail {/* TODO-CONTATO */}</a></li>
              <li><span className="icon-mask icon-mask--sm" data-icon="whatsapp"></span><a href="https://w.app/josrfi">whatsapp</a></li>
              <li><span className="icon-mask icon-mask--sm" data-icon="telegram"></span><a href="tg://resolve?domain=guiropasystems&text=Olá,+estou+interessado+em+seus+serviços!">telegram</a></li>
              <li><span className="icon-mask icon-mask--sm" data-icon="phone"></span>+55 51 3027-4785</li>
              <li><span className="icon-mask icon-mask--sm" data-icon="phone"></span>+55 45 2021-0022</li>
            </ul>
          </div>
          <div className="footer__col">
            <h4 className="footer__head">{t("footer.rec_head")}</h4>
            <ul>
              <li>7 Seas Global</li>
              <li>Guiropa Systems</li>
            </ul>
          </div>
          <div className="footer__col">
            <h4 className="footer__head">{t("footer.social_head")}</h4>
            <ul className="footer__social">
              <li><span className="icon-mask icon-mask--sm" data-icon="instagram"></span><a href="#"><span>7 Seas Global</span><small>@7.seasglobal</small></a></li>
              <li><span className="icon-mask icon-mask--sm" data-icon="instagram"></span><a href="#"><span>Guiropa Systems</span><small>@guiropasystems</small></a></li>
            </ul>
          </div>
        </div>

        <hr className="footer__rule" />
        <p className="footer__copy">{t("footer.copy")}</p>
      </div>
    </footer>
  );
}
