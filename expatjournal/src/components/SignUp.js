import React from 'react';
import { Link } from 'react-router-dom';

import useForm from '../Utils/useForm';
import axios from 'axios';

export default function SignUp(props) {
    const [ formInfo, handleChanges, clearForm ] = useForm();

    const submitHandler = e => {
        e.preventDefault();
        const{ name, password } = formInfo;
        axios.post('https://expat-journal.herokuapp.com/api/auth', { name, password })
        .then(res => {
            console.log(res);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('username', name);
            props.history.push('/dashboard');
        })
        .catch(err => console.log(err));

        clearForm();
    }

    //function to check on if the form is filled or not??

    return (
        <div className='auth-form'>
            <h1>Sign up to start your Journal</h1>

            <form onSubmit={submitHandler}>
                <input
                  className={formInfo.error ? 'error' : ''}
                  type='text'
                  name='name'
                  placeholder='Enter a user name'
                  value={formInfo.name || ''}
                  onChange={handleChanges}
                  required
                />

                <input
                  className={formInfo.error ? 'error' : ''}
                  type='email'
                  name='email'
                  placeholder='Enter an Email address'
                  value={formInfo.email || ''}
                  onChange={handleChanges}
                  required
                />

                <input
                  className={formInfo.error ? 'error' : ''}
                  type='password'
                  name='password'
                  placeholder='Enter a password'
                  value={formInfo.password || ''}
                  onChange={handleChanges}
                  required
                />

                <input
                  className={formInfo.error ? 'error' : ''}
                  type='password'
                  name='confirmPassword' 
                  value={formInfo.confirmPassword || ''}
                  onChange={handleChanges}
                  required
                />

                <button type='submit' className='submit-btn'>Join Now!</button>        
            </form>

            <h3>Already have an account? <Link to='/sign-in'>Sign in</Link>here</h3>
        </div>
    );
}