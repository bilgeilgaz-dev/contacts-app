import { useState, useEffect } from 'react'
import List from './List';
import From from './Form';

function Contacts() {
  const [contacts, setContacts] = useState([
    {fullName: 'Bilge', phoneNumber: '123'},
    {fullName: 'Ahmet', phoneNumber: '456'},
    {fullName: 'Isis', phoneNumber: '789'}
  ]);

  useEffect(() => {
    console.log('contacts: ', contacts);
  }, [contacts]);

  return (
    <div>
      <List contacts={contacts}/>
      <From addContact={setContacts} contacts={contacts}/>
    </div>
  );
}

export default Contacts;
