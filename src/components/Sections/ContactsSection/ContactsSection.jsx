import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { FormAdd } from 'components/Forms/FormAdd';

import css from './ContactsSection.module.css';

const ContactsSection = () => {
  return (
    <section className={css.section}>
      <h1 className={css.title}>Phonebook</h1>
      <h2 className={css.title}>Contacts</h2>
      <div className={css.container}>
        <div className={css.contactsBlock}>
          <Filter name="filter" />
          <ContactList />
        </div>      
        <FormAdd className={css.addForm} textBtn="Add contact" />
       
      </div>
    </section>
  );
};
export default ContactsSection;
