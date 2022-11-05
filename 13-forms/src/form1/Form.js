import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  console.log(formData);

  function handleChange(e) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  }

  return (
    <form className='form'>
      <input
        type='text'
        placeholder='First Name'
        name='firstName'
        onChange={handleChange}
      />

      <input
        type='text'
        placeholder='Last Name'
        name='lastName'
        onChange={handleChange}
      />

      <input
        type='email'
        placeholder='Email'
        name='email'
        onChange={handleChange}
      />
    </form>
  );
}

export default Form;
