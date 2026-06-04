export default function Servicos() {
  return (
    <section className="section servicos" id="servicos" aria-label="Serviços">
      <div className="container">
        <h2 className="section-title section-title--grad">
          Serviços<span className="section-title__rule"></span>
        </h2>
        <ul className="services-grid">
          <li className="card reveal">
            <span className="card__icon">
              <span className="icon-mask" data-icon="globe"></span>
            </span>
            <h3 className="card__title">Agenciamento de carga internacional</h3>
            <p className="card__text">
              Gestão completa e integrada do transporte de mercadorias de ponta
              a ponta.
            </p>
          </li>
          <li className="card reveal">
            <span className="card__icon">
              <span className="icon-mask" data-icon="shipment"></span>
            </span>
            <h3 className="card__title">Serviços NVOCC</h3>
            <p className="card__text">
              Emissão de documentação própria (House BL) e consolidação autônoma
              de cargas, garantindo total independência das linhas marítimas
              tradicionais.
            </p>
          </li>
          <li className="card reveal">
            <span className="card__icon">
              <span className="icon-mask" data-icon="ship"></span>
            </span>
            <h3 className="card__title">Frete marítimo</h3>
            <p className="card__text">
              Transporte marítimo global com foco na otimização de rotas e
              aproveitamento inteligente de espaços nos navios.
            </p>
          </li>
          <li className="card reveal">
            <span className="card__icon">
              <span className="icon-mask" data-icon="airplane"></span>
            </span>
            <h3 className="card__title">Frete aéreo</h3>
            <p className="card__text">
              Soluções ágeis e urgentes de transporte para demandas corporativas
              que exigem um tempo de entrega reduzido (lead time).
            </p>
          </li>
          <li className="card reveal">
            <span className="card__icon">
              <span className="icon-mask" data-icon="truck"></span>
            </span>
            <h3 className="card__title">Transporte rodoviário</h3>
            <p className="card__text">
              Malha de transporte rodoviário nacional totalmente integrada e
              soluções dedicadas para movimentação de cargas no bloco do
              Mercosul.
            </p>
          </li>
          <li className="card reveal">
            <span className="card__icon">
              <span className="icon-mask" data-icon="brazil"></span>
            </span>
            <h3 className="card__title">Soluções logísticas do Mercosul</h3>
            <p className="card__text">
              Operações de logística transfronteiriça altamente especializadas
              no fluxo comercial entre os países membros do bloco sul-americano.
            </p>
          </li>
          <li className="card reveal">
            <span className="card__icon">
              <span className="icon-mask" data-icon="multimodal"></span>
            </span>
            <h3 className="card__title">Transporte multimodal</h3>
            <p className="card__text">
              Integração física, operacional e documental de múltiplos modais
              (marítimo, ferroviário e rodoviário) sob uma única gestão
              simplificada.
            </p>
          </li>
          <li className="card reveal">
            <span className="card__icon">
              <span className="icon-mask" data-icon="airplane-2"></span>
            </span>
            <h3 className="card__title">Comércio internacional</h3>
            <p className="card__text">
              Inteligência comercial com intermediação de negócios,
              identificação (sourcing) de fornecedores, análise de viabilidade e
              conexão estratégica entre mercados globais.
            </p>
          </li>
          <li className="card reveal">
            <span className="card__icon">
              <span className="icon-mask" data-icon="support"></span>
            </span>
            <h3 className="card__title">Apoio a negócios transfronteiriços</h3>
            <p className="card__text">
              Assessoria aduaneira completa, suporte documental rigoroso e
              garantia de segurança na liberação alfandegária.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}
