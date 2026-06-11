import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from './Header';

export default function PoliticaPrivacidade() {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      
      <main>
        <section className="section politica" aria-label="Política de Privacidade">
          <div className="container container--narrow">
            <h1 className="section-title section-title--grad">
              {t('privacidade.title')}
              <span className="section-title__rule"></span>
            </h1>

            <div className="politica__content">
              <p>{t('privacidade.intro')}</p>

              <h2>{t('privacidade.s1_title')}</h2>
              <p>{t('privacidade.s1_text')}</p>
              <ul>
                <li>{t('privacidade.s1_item1')}</li>
                <li>{t('privacidade.s1_item2')}</li>
                <li>{t('privacidade.s1_item3')}</li>
              </ul>

              <h2>{t('privacidade.s2_title')}</h2>
              <p>{t('privacidade.s2_text')}</p>

              <h2>{t('privacidade.s3_title')}</h2>
              <p>{t('privacidade.s3_text')}</p>

              <h2>{t('privacidade.s4_title')}</h2>
              <p>
                {t('privacidade.s4_text')}{' '}
                <a href="mailto:privacidade@7seasglobal.com" className="text-gold fw-700">
                  privacidade@7seasglobal.com
                </a>.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}