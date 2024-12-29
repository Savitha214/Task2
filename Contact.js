import React, { useState } from 'react';
import './Contact.css';
import { useNavigate } from 'react-router-dom';


const Contact  = () => {
   
   const[name,setName]=useState('');
    const [email, setEmail] = useState('');
   const[message,setMessage]=useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Name',name);
        console.log('Email', email);
        console.log('Message',message);
    };
   const handle=()=>
   {
       alert("Your message has been received");
   }
    return (
       
        <div className="contact-container">
            <center>
            <div className="contact-form-container">
                <h2>Contact us</h2>
                <p>We would love to hear from you! Please fill out the form below and we will get in touch with you shortly.</p>
                <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                        <label htmlFor="name">Name:</label>
                        <input
                            type="name"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message:</label>
                        <textarea
                            type="message"
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </div>
                    
              <center> <table><tr> <td>   <button type="submit" className="contact-button" onClick={handle}>Submit</button></td></tr></table></center>
                </form>
            </div>
            </center>
        </div>
    );
};

export default Contact;