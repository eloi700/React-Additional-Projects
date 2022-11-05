import React, { useState } from 'react';

function Signupform() {
  const [signForm, setSignForm] = useState({
    email: '',
    password: '',
    confpassword: '',
    joinNewspaper: false,
  });

  function handleChange(e) {
    const { name, value, checked, type } = e.target;

    if (type === 'checkbox' && checked) {
      console.log('Thanks for signing up for our newsletter!');
    }

    setSignForm((prevForm) => ({
      ...prevForm,
      [name]: type === 'checkbox' ? checked : value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (signForm.password === signForm.confpassword) {
      console.log('Successfully signed up');
    } else {
      console.log('Please check your password');
    }
  }

  //   if (signForm.joinNewspaper) {
  //     console.log('Thanks for signing up for our newsletter!');
  //   } //OR UP but this need to return after Pls. check password

  return (
    <div className='form-container'>
      <form className='signup--form' onSubmit={handleSubmit}>
        <input
          type='email'
          name='email'
          placeholder='Email address'
          className='form--input'
          value={signForm.email}
          onChange={handleChange}
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          className='form--input'
          value={signForm.password}
          onChange={handleChange}
        />

        <input
          type='password'
          name='confpassword'
          placeholder='Confirm password'
          className='form--input'
          value={signForm.confpassword}
          onChange={handleChange}
        />

        <div className='form--marketing'>
          <input
            id='okayToEmail'
            type='checkbox'
            name='joinNewspaper'
            checked={signForm.joinNewspaper}
            onChange={handleChange}
          />
          <label htmlFor='okayToEmail'>I want to join the newsletter</label>
        </div>
        <button className='form--submit'>Sign up</button>
      </form>
    </div>
  );
}

export default Signupform;
