import { useState } from 'react';
import '../styles/ContactPage.css'

function Contact({ props, ref }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      setStatus(data.message);
    } catch (error) {
      console.error(error);
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <div ref={ref} className='contact-container'>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Your Name" onChange={handleChange} required />
          <input name="email" type="email" placeholder="Your Email" onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" onChange={handleChange} required />
          <button type="submit">Send</button>
          <p className={(status == "") ? "empty" : "full"}>{status}</p>
      </form>
    </div>
  );
}

export default Contact;
