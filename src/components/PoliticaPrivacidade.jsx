import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '../components/Header'; 

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

              <h2>{t('privacidade.s2_title')}</h2>
              <p>{t('privacidade.s2_text')}</p>

              <h2>{t('privacidade.s3_title')}</h2>
              <p>{t('privacidade.s3_text')}</p>

              <h2>{t('privacidade.s4_title')}</h2>
              <p>{t('privacidade.s4_text')}</p>

              <h2>{t('privacidade.s5_title')}</h2>
              <p>{t('privacidade.s5_text')}</p>

              <h2>{t('privacidade.s6_title')}</h2>
              <p>{t('privacidade.s6_text')}</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}