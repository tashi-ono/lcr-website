import React from "react";
import Header from "../Header/Header";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact-page">
      <Header title="CONTACT" color="#344654" />
      <h3>CONTACT US</h3>
      <div>Google Map</div>
      <form>
        <label for="fname">
          First Name<span className="asterick">*</span>
        </label>
        <br />
        <input type="text" id="fname" name="fname" required />
        <br />
        <label for="lname">
          Last Name<span className="asterick">*</span>
        </label>
        <br />
        <input type="text" id="lname" name="lname" required />
        <br />
        <label for="email">
          Email<span className="asterick">*</span>
        </label>
        <br />
        <input type="text" id="email" name="email" required />
        <br />
        <label for="company">
          Company Name<span className="asterick">*</span>
        </label>
        <br />
        <input type="text" id="company" name="company" required />
        <br />
        <label for="message">Message</label>
        <br />
        <textarea id="message" name="message" rows="10" cols="50"></textarea>
        <br />
      </form>
    </div>
  );
};

export default Contact;
