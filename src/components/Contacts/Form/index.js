import { useState } from 'react';

function Form() {
  const [form, setForm] = useState({fullName: '', phoneNumber: ''});

  const onChangeInput = e => {
    setForm({...form}, [e.target.name] = e.target.value )
  }

  const onSubmit = () => {
    console.log('form', form)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input name="fullName" placeholder="Full name" onChange={onChangeInput}/>
        </div>
        <div>
          <input name="phoneNumber" placeholder="Phone number" onChange={onChangeInput}/>
        </div>
        <button>Add</button>
      </form>
    </div>
    
  );
}

export default Form;
