import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
    isFriendly: false,
    employment: '',
    favColor: '',
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  }

  function handleSubmit(e) {
    // submitToApi(formData)
    e.preventDefault()
    console.log(formData);
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
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

      {/* Text Area */}
      <textarea
        cols='30'
        rows='10'
        id='message'
        name='message'
        placeholder='Message:'
        value={formData.message}
        onChange={handleChange}
      ></textarea>

      {/* Check Box */}
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

      {/* Radio Button */}
      <fieldset>
        <legend className='legend'>Current Employment Status</legend>
        <input
          type='radio'
          id='unemployed'
          name='employment'
          value={formData.employment === 'unemployed'}
          onChange={handleChange}
        />
        {'  '}
        <label htmlFor='unemployed'>Unemployed</label>
        <br />
        <input
          type='radio'
          id='part-time'
          name='employment'
          value={formData.employment === 'part-time'}
          onChange={handleChange}
        />
        {'  '}
        <label htmlFor='part-time'>Part-time</label>
        <br />
        <input
          type='radio'
          id='full-time'
          name='employment'
          value={formData.employment === 'full-time'}
          onChange={handleChange}
        />
        {'  '}
        <label htmlFor='full-time'>Full-time</label>
        <br />
      </fieldset>

      {/* Select Options */}
      <label htmlFor='favColor' className='favColor'>
        What is your favorite color?
      </label>
      <select
        id='favColor'
        value={formData.favColor}
        onChange={handleChange}
        name='favColor'
      >
        <option value=''>--Choose--</option>
        <option value='red'>Red</option>
        <option value='orange'>Orange</option>
        <option value='yellow'>Yellow</option>
        <option value='green'>Green</option>
        <option value='blue'>Blue</option>
        <option value='indigo'>Indigo</option>
        <option value='violet'>Violet</option>
      </select>
      <button className='submit_btn'>Submit</button>
    </form>
  );
}

export default Form;


// FORM QUIZ
/*
1.) In a Vanilla JS App, at what point in the form submission process do you gather all the data from the filled out form?
---Right before the form is submitted.

2.) In a React App, when do you gather all the data from the filled-out form?
---As the form is being filled out. The data is all held in local state.

3.) Which attribute in the form elements (value, name, onChange, etc.) should match the property name being held in state for that input.
---"NAME" property

4.) What's the different about saving the data from checkbox element VS. other form elements?
---A checkbox use the "CHECKED" property to determine what should be saved in state.  Other form elements use the "VALUE" property instead.

5.) How do you want for a form to submit? How can you trigger a form submit?
---Can WATCH for the SUBMIT with the "ONSUBMIT" handler on the "form" element.
---Can TRIGGER the form submit with a BUTTON click.
*/