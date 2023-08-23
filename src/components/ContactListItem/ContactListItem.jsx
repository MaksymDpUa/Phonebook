import Modal from 'components/modal/Modal';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import css from './ContactListItem.module.css';

export const ContactListItem = ({ name, number, id, deletingContactId }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <li className={css.contactsItem}>
      <p className={css.contactInfo}>
        <span className={css.contactName}>{name}</span>: {number}
      </p>
      <div className={css.buttonBlock}>
        {' '}
        <button type="button" className={css.updateBtn} onClick={openModal}>
          Update
        </button>
        <button
          disabled={deletingContactId === id}
          type="button"
          className={css.deleteBtn}
          onClick={() => dispatch(deleteContact(id))}
        >
          Delete
        </button>
      </div>

      {showModal && (
        <Modal
          closeModal={closeModal}
          initialName={name}
          initialNumber={number}
          id={id}
        />
      )}
    </li>
  );
};

ContactListItem.propTypes = {
  deleteHandle: PropTypes.func,
  number: PropTypes.string,
  name: PropTypes.string,
  contactId: PropTypes.string,
};
