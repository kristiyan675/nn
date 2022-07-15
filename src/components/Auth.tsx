import classes from './Auth.module.css';
import { authActions } from '../store/index'
import { useDispatch } from 'react-redux';
import React from 'react';
import axios from 'axios';

const Auth = () => {
  const dispatch = useDispatch();

  const loginSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    axios.get('https://jsonplaceholder.typicode.com/todos/1').then(data => console.log(data))

    
    dispatch(authActions.login())
  }

  return (
    <main className={classes.auth}>
      <section>
        <form onSubmit={loginSubmitHandler}>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' />
          </div>
          <button >Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
