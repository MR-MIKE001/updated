import React, { useState } from 'react'
import './contact.css'
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { themeContext } from "../../contest";
import { useContext } from "react";

function Contact() {
    const darkMode = useContext(themeContext).state.darkMode;
      const [user,setuser]=useState("")
      const [email,setemail]=useState("")
      const [content,setcontent]=useState("")
  
          const form = useRef();
        
          const sendEmail=(e)=>{
           e.preventDefault();
           emailjs.sendForm('service_n1uaqvd', 'template_njdb4ji', form.current, '40FBwbA7TtkG8a-e9')
           .then((result)=>{
            alert("message sent")
            setcontent("")
            setemail("")
            setuser("")
           })
           .catch((err)=>{alert("failled")
            setcontent("")
            setemail("")
            setuser("")
           });
          }
          
    
  return (
    <div style={{background:darkMode?" #2f2f2f":" #c7bebeff"}} className='contact' id='contact'>
        <div className='c-left'>
            <div className='awesome'>
                <span style={{ color: darkMode ? "white" : "" }}>GET IN TOUCH</span>
                <span>CONTACT US</span>
                <div className='blur s-blur1' style={{background:"#abf1ff94"}}></div>
     
            </div>
        </div>
        <div className='c-right'> 
        <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='user-name' value={user} onChange={ev=>setuser(ev.target.value)} className='user' placeholder='name'/>
            <input type="email" name='user-email' value={email} onChange={ev=>setemail(ev.target.value)} className='user' placeholder='email'/>
            <textarea name='message' className='user' value={content} onChange={ev=>setcontent(ev.target.value)} placeholder='message'>

            </textarea>
            <button type='summit' value="send" className='button ebutton'>sent</button>
            <div className='blur c-blur1' style={{background:"var(--purple)"}}></div>
        </form>
        </div>
    </div>
  )
}

export default Contact