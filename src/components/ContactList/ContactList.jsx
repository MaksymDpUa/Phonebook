import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import { ContactListItem } from 'components/ContactListItem/ContactListItem';

import {
  getContacts,
  getError,
  getIsLoading,
  selectDeletingContactId,
} from 'redux/contactsSlice';
import { getFilter } from 'redux/filterSlice';
import { fetchContacts } from 'redux/operations';
import { useAuth } from 'hooks/useAuth';

import css from './ContactList.module.css'

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const error = useSelector(getError);
  const isLoading = useSelector(getIsLoading);
  const deletingContactId = useSelector(selectDeletingContactId);

  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();
  const getVisibleContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  useEffect(() => {
    if (!isLoggedIn) return;
    dispatch(fetchContacts());
  }, [dispatch, isLoggedIn]);

  const visibleContacts = getVisibleContacts();

  return (
    <ul className={css.list}>
      {isLoading && <div>Is loading...</div>}
      {error && <div>Something go wrong:( Please, try letter</div>}
      {visibleContacts?.map(contact => {
        return (
          <ContactListItem
            key={contact.name}
            deletingContactId={deletingContactId}
            {...contact}
          />
        );
      })}
    </ul>
  );
};

ContactList.propTypes = {
  deleteHandle: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.number,
    })
  ),
};
