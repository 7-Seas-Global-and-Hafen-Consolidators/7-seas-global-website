export default function Sobre() {
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
            Com mais de 15 anos de sólida experiência
          </h2>
          <p>
            No mercado de Liechtenstein, a 7 Seas Global atua como agente de
            carga internacional, NVOCC e trading, conectando continentes através
            de soluções inteligentes de transporte multimodal.
          </p>
        </div>
        <div className="sobre__block sobre__block--b reveal">
          <h2 className="sobre__title">Nosso grande diferencial</h2>
          <p>
            É a presença física e operacional ativa onde a concorrência hesita:
            estruturamos coletas e entregas{" "}
            <strong className="text-gold">last-mile</strong> em regiões
            complexas e rotas negligenciadas do mapa.
          </p>
        </div>
      </div>
    </section>
  );
}
