import React from 'react';
import Nav from '../../components/navbar';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <>
      <Nav />
      <div className="contact-container">
        <h1 className="contact-header">Contact Us</h1>
        <form className="contact-form">
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <br />
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <br />
          <label for="message">Message:</label>
          <textarea id="message" name="message" required />
          <br />
          <button type="submit" className="contact-button">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default ContactPage;