import { useState, useRef, useContext,} from 'react';
import AuthContext from '../../store/auth-context';
import { useHistory } from 'react-router-dom';
import React from 'react';



import classes from './AuthForm.module.css';

const AuthForm = () => {

 
 
  const history=useHistory();
  const emailref=useRef();
  const pasref=useRef();
  const authctx=useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(false);
  const [Isloading, setIsloading] = useState(false);


  const switchAuthModeHandler = () => {

    setIsLogin((prevState) => !prevState);
  };


  const submithandler=async (event)=>{
    event.preventDefault();
    const email=emailref.current.value;
    const pass=pasref.current.value;
  
    setIsloading(true);
    if(isLogin){
      const respose = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDW55X8yrfY3DYfPEVnvQZamzWMl7FuhzE",
        {
          method: "POST",
          body: JSON.stringify({
            email:email,
            password:pass,
            returnSecureToken:true
          }),
          headers: {
            "Content-type": "application/json",
          },
        }
        );
        const data = await respose.json();
        if(data.idToken!==undefined){
        localStorage.setItem('id', data.idToken);
        localStorage.setItem('email', email);
        }
        authctx.login(localStorage.getItem('id'));
        if(localStorage.getItem('id')){
        history.replace('/store');
        }
        if(!respose.ok)
        {
         
         
          alert(data.error.message);
          history.replace('/auth');

            

        }
        

    }
    else{
      const respose = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDW55X8yrfY3DYfPEVnvQZamzWMl7FuhzE",
        {
          method: "POST",
          body: JSON.stringify({
            email:email,
            password:pass,
            returnSecureToken:true
          }),
          headers: {
            "Content-type": "application/json",
          },
        }
        );
        if(!respose.ok)
        {
         
          const data = await respose.json();
          alert(data.error.message);
            

        }
      
    }

    //--------------------------------------SET TIME OUT -------------------------------------------------------->
    setIsloading(false);
    const logout=()=>{
      authctx.logout();
      history.replace('/auth')
     
           
    }
    setTimeout(()=>{
      logout();
   
    },300000);
    
  
  }
 

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form >
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailref}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            ref={pasref}
          />
        </div>
        
       <div className={classes.actions}>
         {!Isloading&&<button onClick={submithandler}>{isLogin ? 'Login' : 'Sign Up'}</button>}
          {Isloading&&<p>Sending Request...</p>}
         
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
     
    </section>
  );

};

export default AuthForm;
