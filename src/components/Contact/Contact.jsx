import React from "react";
import Header from "../Header/Header";
import Map from "../Map/Map";
import PageTitle from "../PageTitle/PageTitle";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact-page">
      <Header />
      <PageTitle title="CONTACT" color="#344654" />
      <h3>CONTACT US</h3>
      <Map />
      <form>
        <label htmlFor="fname">
          First Name<span className="asterick">*</span>
        </label>
        <br />
        <input type="text" id="fname" name="fname" required />
        <br />
        <label htmlFor="lname">
          Last Name<span className="asterick">*</span>
        </label>
        <br />
        <input type="text" id="lname" name="lname" required />
        <br />
        <label htmlFor="email">
          Email<span className="asterick">*</span>
        </label>
        <br />
        <input type="text" id="email" name="email" required />
        <br />
        <label htmlFor="company">
          Company Name<span className="asterick">*</span>
        </label>
        <br />
        <input type="text" id="company" name="company" required />
        <br />
        <label htmlFor="message">Message</label>
        <br />
        <textarea id="message" name="message" rows="10" cols="50"></textarea>
        <br />
      </form>
    </div>
  );
};

export default Contact;
