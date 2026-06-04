export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <img src="/assets/brand/logo-stacked.png" alt="7 Seas Global" loading="lazy" decoding="async" />
          </div>
          <p className="footer__tagline">Não entramos em mercados. Estabelecemos presença onde os outros hesitam. Não descobertos. Não anunciados. <strong className="text-gold fw-700">Lembrados.</strong></p>
        </div>

        <hr className="footer__rule" />

        <div className="footer__cols">
          <div className="footer__col">
            <h4 className="footer__head">Navegação</h4>
            <ul>
              <li><a href="#sobre">Sobre Nós</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#porque">Por que nós?</a></li>
              <li><a href="#parceiros">Parceiros</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4 className="footer__head">Contato</h4>
            <ul className="footer__contact">
              <li><span className="icon-mask icon-mask--sm" data-icon="email"></span><a href="#">e-mail {/* TODO-CONTATO */}</a></li>
              <li><span className="icon-mask icon-mask--sm" data-icon="whatsapp"></span><a href="#">whatsapp</a></li>
              <li><span className="icon-mask icon-mask--sm" data-icon="telegram"></span><a href="#">telegram</a></li>
              <li><span className="icon-mask icon-mask--sm" data-icon="phone"></span><a href="#">telefone 1</a></li>
              <li><span className="icon-mask icon-mask--sm" data-icon="phone"></span><a href="#">telefone 2</a></li>
            </ul>
          </div>
          <div className="footer__col">
            <h4 className="footer__head">Recrutamento</h4>
            <ul>
              <li>7 Seas Global</li>
              <li>Guiropa Systems</li>
            </ul>
          </div>
          <div className="footer__col">
            <h4 className="footer__head">Redes</h4>
            <ul className="footer__social">
              <li><span className="icon-mask icon-mask--sm" data-icon="instagram"></span><a href="#"><span>7 Seas Global</span><small>@7.seasglobal</small></a></li>
              <li><span className="icon-mask icon-mask--sm" data-icon="instagram"></span><a href="#"><span>Guiropa Systems</span><small>@guiropasystems</small></a></li>
            </ul>
          </div>
        </div>

        <hr className="footer__rule" />
        <p className="footer__copy">© 2026 7 Seas Global. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
