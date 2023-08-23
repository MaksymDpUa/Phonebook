import { useEffect } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';
import { FormUpdate } from 'components/Forms/FormUpdate';

const Modal = ({ closeModal, initialName, initialNumber, id }) => {
  useEffect(() => {
    const handlePressEsc = e => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handlePressEsc);
    return () => {
      window.removeEventListener('keydown', handlePressEsc);
    };
  }, [closeModal]);

  const handleOverlayClick = e => {
    if (e.currentTarget === e.target) closeModal();
  };

  return (
    <div className={css.overlay} onClick={handleOverlayClick}>
      <FormUpdate
        textBtn="Update contact"
        className={css.modal}
        initialName={initialName}
        initialNumber={initialNumber}
        closeModal={closeModal}
        id={id}
      />
    </div>
  );
};

Modal.propTypes = {
  alt: PropTypes.string,
  closeModal: PropTypes.func,
  largeImage: PropTypes.string,
};

export default Modal;
