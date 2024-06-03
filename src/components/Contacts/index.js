import { useState, useEffect } from 'react'
import List from './List';
import From from './Form';

function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    console.log('contacts: ', contacts);
  }, [contacts]);

  return (
    <div>
      <List />
      <From addContact={setContacts} contacts={contacts}/>
    </div>
  );
}

export default Contacts;
