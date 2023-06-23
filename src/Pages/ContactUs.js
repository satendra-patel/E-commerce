import React, { useState } from 'react'
import MainHeader from '../Components/Header/MainHeader'

export default function ContactUs() {

  const [name,setName]=useState('');
  const [email,setEmail]=useState('');
  const [problem,setProblem]=useState('');

  const nameHandler=(event)=>{
    setName(event.target.value);
  }
  const emailHandler=(event)=>{
    setEmail(event.target.value)
  }
  const problemHandler=(event)=>{
    setProblem(event.target.value);
  }
  const formSubmitHandler=(event)=>{
    event.preventDefault();
    const Contact={
      name:name,
      email:email,
      problem:problem
    }
    console.log(Contact);
    setEmail('');
    setName('');
    setProblem('');
  }

  return (<>
    <MainHeader/>
    <section>
      <form onSubmit={formSubmitHandler}>
        <label>your Name:</label>
        <input type='text' value={name} onChange={nameHandler}></input>
        <br></br>
        <label>Email</label>
        <input type='email' value={email} onChange={emailHandler}></input>
        <br></br>
        <label>your problem</label>
        <input type='text' value={'your problem'} onChange={problemHandler}></input>
        <button type='submit'>Send Request</button>
      </form>
    </section>
    
  </>
  
  )
}
