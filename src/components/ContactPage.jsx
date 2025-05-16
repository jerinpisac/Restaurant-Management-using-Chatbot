import { useState } from 'react';
import '../styles/ContactPage.css'
import axios from 'axios';

function Contact({ props, ref }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      await axios.post("http://localhost:5000/send-email", { name, email, subject, message });
      setStatus("Email sent successfully!");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (error) {
      setStatus("Failed to send email.");
    }
  };

  return (
    <div ref={ref} className='contact-container'>
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit}>
          <input value={name} placeholder="Your Name" onChange={(e) => setName(e.target.value)} required />
          <input value={email} type="email" placeholder="Your Email" onChange={(e) => setEmail(e.target.value)} required />
          <input value={subject} type="text" placeholder="Subject" onChange={(e) => setSubject(e.target.value)} required />
          <textarea value={message} placeholder="Your Message" onChange={(e) => setMessage(e.target.value)} required />
          <button type="submit">Send</button>
          <p className={(status == "") ? "empty" : "full"}>{status}</p>
      </form>
    </div>
  );
}

export default Contact;
