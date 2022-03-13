import React from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Header from "../Header/Header";
import Map from "../Map/Map";
import PageTitle from "../PageTitle/PageTitle";
import "./style.css";

const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_USER_ID;

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID).then(
      (result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Message Sent Successfully",
        });
      },
      (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong",
          text: error.text,
        });
      }
    );
    e.target.reset();
  };

  return (
    <div id="contact-page">
      <Header />
      <PageTitle title="CONTACT" color="#344654" />
      <div id="map-and-contact">
        <Map />
        <Form id="contact-form" onSubmit={sendEmail}>
          <h2>CONTACT US</h2>
          <Form.Field
            id="form-input-control-first-name"
            control={Input}
            label="First Name"
            name="fname"
            placeholder="First Name"
            required
            icon="user circle"
            iconPosition="left"
          />
          <Form.Field
            id="form-input-control-last-name"
            control={Input}
            label="Last Name"
            name="lname"
            placeholder="Last Name"
            required
            icon="user circle"
            iconPosition="left"
          />

          <Form.Field
            id="form-input-control-email"
            control={Input}
            label="Email"
            name="email"
            placeholder="Email"
            required
            icon="mail"
            iconPosition="left"
          />

          <Form.Field
            id="form-input-control-company"
            control={Input}
            label="Company Name"
            name="company"
            placeholder="Company"
            required
            icon="users"
            iconPosition="left"
          />

          <Form.Field
            id="form-textarea-control-opinion"
            control={TextArea}
            label="Message"
            name="message"
            placeholder="Message"
            required
          />
          <Button id="contact-submit" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
