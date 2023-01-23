import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { UserAuth } from '../context/AuthContext';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { createUser } = UserAuth();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await createUser(email, password);
      navigate('/account');
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  return (
    <div className='max-w-[700px] mx-auto my-16 p-4'>
      <div>
        <h1 className='text-2xl font-bold py-2'>Register an account</h1>
        <p className='py-2'>
          Already have an account?{' '}
          <Link to='/' className='underline'>
            Log in!
          </Link>
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>Email address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className='border py-3'
            type='email'
          />
        </div>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className='border py-3'
            type='password'
          />
        </div>
        <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'>
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
