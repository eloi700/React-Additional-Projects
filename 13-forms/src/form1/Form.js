import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    isFriendly: true,
    employment: '',
  });

  console.log(formData.employment);

  function handleChange(e) {
    const {name, value, type, checked} = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  }

  return (
    <form className='form'>
      <input
        type='text'
        placeholder='First Name'
        name='firstName'
        value={formData.firstName}
        onChange={handleChange}
      />

      <input
        type='text'
        placeholder='Last Name'
        name='lastName'
        value={formData.lastName}
        onChange={handleChange}
      />

      <input
        type='email'
        placeholder='Email'
        name='email'
        value={formData.email}
        onChange={handleChange}
      />

      <textarea
        cols='30'
        rows='10'
        id='message'
        name='message'
        placeholder='Message:'
        value={formData.message}
        onChange={handleChange}
      ></textarea>

      <label htmlFor='friendlyCheckbox'>
        <input
          type='checkbox'
          id='friendlyCheckbox'
          name='isFriendly'
          checked={formData.isFriendly}
          onChange={handleChange}
        />
        {'  '}
        Are you friendly?
      </label>

      <fieldset>
        <legend className='legend'>Current Employment Status</legend>
        <input
          type='radio'
          id='unemployed'
          name='employment'
          value="unemployed"
          onChange={handleChange}
        />
        {'  '}
        <label htmlFor='unemployed'>Unemployed</label>
        <br />
        <input
          type='radio'
          id='part-time'
          name='employment'
          value="part-time"
          onChange={handleChange}
        />
        {'  '}
        <label htmlFor='part-time'>Part-time</label>
        <br />
        <input
          type='radio'
          id='full-time'
          name='employment'
          value="full-time"
          onChange={handleChange}
        />
        {'  '}
        <label htmlFor='full-time'>Full-time</label>
        <br />
      </fieldset>
    </form>
  );
}

export default Form;
