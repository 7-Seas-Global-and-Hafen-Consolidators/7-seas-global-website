export default function Porque() {
  return (
    <section className="section porque" id="porque" aria-label="Por que nós">
      <div className="container">
        <div className="grid-panel reveal">
          <h2 className="grid-panel__title">Onde os outros hesitam, nós já estamos presente</h2>
          <p className="grid-panel__lead">Não somos uma empresa de logística tradicional que apenas espera a carga chegar aos grandes centros como São Paulo ou Santos. Nosso diferencial é o <strong className="text-gold">Deep Market Grid</strong>: uma rede operacional real e robusta que cobre as regiões mais desafiadoras e esquecidas pelo mercado.</p>

          <div className="region reveal">
            <h3 className="region__title">O extremo Norte:</h3>
            <div className="region__route">
              <span className="pin" style={{ '--x': '11%', '--y': '62%' }}><span className="pin__dot"></span>Roraima</span>
              <span className="pin" style={{ '--x': '45%', '--y': '15%' }}><span className="pin__dot"></span>Amapá</span>
              <span className="pin" style={{ '--x': '79%', '--y': '62%' }}><span className="pin__dot"></span>Acre</span>
              <svg className="region__lines" viewBox="0 0 100 80" preserveAspectRatio="none" aria-hidden="true"><polyline points="20,45 46,20 75,45" /></svg>
            </div>
          </div>

          <div className="region reveal">
            <h3 className="region__title">Litoral Sul ao Sudeste:</h3>
            <div className="region__route">
              <span className="pin" style={{ '--x': '12%', '--y': '50%' }}><span className="pin__dot"></span>Navegantes</span>
              <span className="pin" style={{ '--x': '45%', '--y': '50%' }}><span className="pin__dot"></span>Porto Alegre</span>
              <span className="pin" style={{ '--x': '79%', '--y': '50%' }}><span className="pin__dot"></span>Vitória</span>
              <svg className="region__lines" viewBox="0 0 100 80" preserveAspectRatio="none" aria-hidden="true"><polyline points="12,52 45,52 80,52" /></svg>
            </div>
          </div>

          <div className="region reveal">
            <h3 className="region__title">Centro-oeste ao Sudeste:</h3>
            <div className="region__route">
              <span className="pin pin--stack" style={{ '--x': '14%', '--y': '34%' }}><span className="pin__dot"></span>Oeste do Paraná</span>
              <span className="pin" style={{ '--x': '80%', '--y': '34%' }}><span className="pin__dot"></span>Cuiabá</span>
              <span className="pin" style={{ '--x': '47%', '--y': '90%' }}><span className="pin__dot"></span>Franca</span>
              <svg className="region__lines" viewBox="0 0 100 80" preserveAspectRatio="none" aria-hidden="true"><polyline points="18,37 47,66 76,37" /></svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
