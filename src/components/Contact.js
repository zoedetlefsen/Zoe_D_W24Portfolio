import React, { useState } from 'react';
import '../assets/styles/Contact.css'; // Make sure to create this CSS file

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you would typically handle form submission, like sending an email
    console.log('Name:', name, 'Email:', email, 'Message:', message);
    // Reset form fields after submission
    setName('');
    setEmail('');
    setMessage('');
    alert('Thank you for your message!');
  };

  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
