import { useState, useEffect } from 'react';

const initialFormValues = {fullName: '', phoneNumber: ''}
function Form({ addContact, contacts }) {
  const [form, setForm] = useState(initialFormValues);

  useEffect(() => {
    setForm(initialFormValues);
  }, [contacts]);

  const onChangeInput = e => {
    setForm({...form, [e.target.name]: e.target.value } )
  }

  const onSubmit = (e) => {
    e.preventDefault();
    
    if(form.fullName === '' || form.phoneNumber === '') {
      return false;
    }
    addContact([...contacts, form]);
    
    console.log('form', form)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input name="fullName" placeholder="Full name" onChange={onChangeInput} value={form.fullName}/>
        </div>
        <div>
          <input name="phoneNumber" placeholder="Phone number" onChange={onChangeInput} value={form.phoneNumber}/>
        </div>
        <button>Add</button>
      </form>
    </div>
    
  );
}

export default Form;
