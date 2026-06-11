import { useTranslation } from 'react-i18next';

export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <h3 className="modal-card__title">{title}</h3>
        
        <div className="modal-card__body">
          {children}
        </div>
        
        <button type="button" className="btn btn--modal-close" onClick={onClose}>
          {useTranslation().t("contato.modal_close", "Fechar")}
        </button>
      </div>
    </div>
  );
}