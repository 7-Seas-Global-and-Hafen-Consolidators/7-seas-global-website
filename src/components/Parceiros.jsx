import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';


const PARTNERS = [
  { src: '/assets/img/partner-bifa.png', alt: 'BIFA — British International Freight Association' },
  { src: '/assets/img/partner-azfreight.png', alt: 'AZFreight' },
  { src: '/assets/img/partner-emirates.png', alt: 'Emirates SkyCargo' },
  { src: '/assets/img/partner-cma.png', alt: 'CMA CMG' },
  { src: '/assets/img/partner-eurail.jpeg', alt: 'Eurail' },
  { src: '/assets/img/partner-evergreen.jpg', alt: 'Evergreen' },
  { src: '/assets/img/partner-fiata.jpeg', alt: 'Fiata' },
  { src: '/assets/img/partner-gla.jpeg', alt: 'GLA' },
  { src: '/assets/img/partner-iata.jpeg', alt: 'IATA' },
  { src: '/assets/img/partner-latam-cargo.jpeg', alt: 'Latam Cargo' },
  { src: '/assets/img/partner-lufthansa.jpeg', alt: 'Lufthansa Cargo' },
  { src: '/assets/img/partner-msc.jpeg', alt: 'MSC' },
  { src: '/assets/img/partner-wca.jpeg', alt: 'WCA World' },
  { src: '/assets/img/partner-saudia.jpeg', alt: 'Saudia Cargo' },

];

export default function Parceiros() {
  const { t } = useTranslation();
  const n = PARTNERS.length;
  const mid = Math.floor(n / 2);
  const [center, setCenter] = useState(Math.min(1, n - 1));
  const startX = useRef(null);

  const step = (dir) => setCenter((c) => (c + dir + n) % n);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') { step(-1); e.preventDefault(); }
    if (e.key === 'ArrowRight') { step(1); e.preventDefault(); }
  };

  const handleTouchStart = (e) => { startX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    if (startX.current === null) return;
    const dx = e.changedTouches[0].clientX - startX.current;
    if (Math.abs(dx) > 40) step(dx < 0 ? 1 : -1);
    startX.current = null;
  };

  const ordered = [];
  for (let off = -mid; off <= n - 1 - mid; off++) {
    ordered.push((center + off + n) % n);
  }

  return (
    <section className="section parceiros" id="parceiros" aria-label="Parceiros">
      <div className="container">
        <h2 className="section-title section-title--grad">
          {t("parceiros.title")}<span className="section-title__rule"></span>
        </h2>
        <div
          className="carousel"
          data-carousel
          tabIndex={0}
          role="group"
          aria-roledescription="carrossel"
          aria-label="Parceiros"
          onKeyDown={handleKeyDown}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            className="carousel__arrow carousel__arrow--prev"
            type="button"
            aria-label="Anterior"
            onClick={() => step(-1)}
          >
            &lsaquo;
          </button>
          <div className="carousel__viewport">
            <ul className="carousel__track">
              {ordered.map((origIdx, k) => {
                const p = PARTNERS[origIdx];
                return (
                  <li
                    key={origIdx}
                    className={`partner${k === mid ? ' is-active' : ''}`}
                  >
                    <img src={p.src} alt={p.alt} loading="lazy" decoding="async" />
                  </li>
                );
              })}
            </ul>
          </div>
          <button
            className="carousel__arrow carousel__arrow--next"
            type="button"
            aria-label="Próximo"
            onClick={() => step(1)}
          >
            &rsaquo;
          </button>
          <div className="carousel__dots">
            {PARTNERS.map((_, i) => (
              <button
                key={i}
                className={`carousel__dot${i === center ? ' is-active' : ''}`}
                type="button"
                aria-label={`Mostrar parceiro ${i + 1}`}
                onClick={() => setCenter(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
