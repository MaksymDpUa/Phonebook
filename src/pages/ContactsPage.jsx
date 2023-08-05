import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { FormAdd } from 'components/Forms/FormAdd';

import css from '../components/App/App.module.css';

const ContactsPage = () => {
  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <FormAdd textBtn="Add contact" />
      <h2>Contacts</h2>
      <Filter name="filter" />
      <ContactList />
    </div>
  );
};
export default ContactsPage;
