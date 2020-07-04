import React from 'react';
import '../assets/stylesheets/contact.css';

function Contact() {
  return (
    <div id="contact">
      <h1 id="contact-heading">Contact Us</h1>
      <hr className="hr" id="hr-contact" />
      <div id="container">
        <div id="form">
          <form>
            <input id="name"className="dark" type="text" placeholder="Name" />
            <br />
            <br />
            <input id="email"className="dark" type="email" placeholder="Email" />
            <br />
            <br />
            <textarea className="dark"id="textarea" placeholder="Message" /> <br />
            <br />
            <button onSubmit={(e)=>{e.preventDefault()}} className="dark" id="submit" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div id="info">
          <p id="larger">Under the Sea</p>
          <br />
          <p id="small">2212 By the Gulf, Austin, TX</p>
          <br />
          <p  id="small">underthesea@gmail.com</p>
          <br />
          <p  id="small">555-555-5555</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
