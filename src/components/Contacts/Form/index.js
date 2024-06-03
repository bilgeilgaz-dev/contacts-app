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
  
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className='form-input'>
          <input name="fullName" placeholder="Full name" onChange={onChangeInput} value={form.fullName}/>
        </div>
        <div className='form-input'>
          <input name="phoneNumber" placeholder="Phone number" onChange={onChangeInput} value={form.phoneNumber}/>
        </div>
        <div className='add-button'>
          <button>Add</button>
        </div>
        
      </form>
    </div>
    
  );
}

export default Form;
