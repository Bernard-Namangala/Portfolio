import React, { useState } from "react";
import axios from "axios";
const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  //function tp clear all form inputs
  const clearFormInputs = () => {
    let inputs = document.getElementsByClassName("form-control");
    for (const input of inputs) {
      input.value = "";
    }
  };

  // name validations
  const handleNameChange = e => {
    setName(e.target.value);
  };
  const validateName = e => {
    const name_error = document.getElementById("name-error");
    if (name.length > 50) {
      name_error.textContent =
        "Name is too long maximum of 50 characters is allowed";
      e.target.focus();
    } else if (name.length < 3) {
      name_error.textContent = "Name is too short";
      e.target.focus();
    } else {
      name_error.textContent = "";
    }
  };

  // email validations
  const EmailValidationRegex = email => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const validateEmail = e => {
    let valid_status = EmailValidationRegex(email);
    const email_error = document.getElementById("email-error");
    if (valid_status) {
      email_error.textContent = "";
    } else {
      email_error.textContent = "invalid email";
      e.target.focus();
    }
  };

  const handleEmailChange = e => {
    setEmail(e.target.value);
  };

  // message validations
  const handleMessageChange = e => {
    setMessage(e.target.value);
  };
  const validateMessage = e => {
    const message_error = document.getElementById("message-error");
    if (message.length > 1500) {
      message_error.textContent = "Message is too long";
      e.target.focus();
    } else {
      message_error.textContent = "";
    }
  };

  const submitMessage = e => {
    e.preventDefault();

    const contactInfo = {
      name: name,
      email: email,
      message: message
    };
    axios
      .post("api/v1/contact/", contactInfo)
      .then(res => {
        let success_message = document.getElementById("post-submit-message");
        success_message.className = "text-success";
        success_message.textContent = "Form successfully submitted";
        clearFormInputs();
      })
      .catch(error => {
        let success_message = document.getElementById("post-submit-message");
        success_message.className = "text-danger";
        success_message.textContent = "oops there was an error";
        console.log(error);
      });
  };
  return (
    <div className="row">
      <form className="form w-100">
        <h2 id="post-submit-message"></h2>
        <div className="form-group d-flex justify-content-center mb-0">
          <input
            value={name}
            onChange={handleNameChange}
            className="form-control"
            onBlur={validateName}
            type="text"
            placeholder="Name"
          />
        </div>
        <div className="d-flex justify-content-center mb-3">
          <span className="error text-danger" id="name-error"></span>
        </div>
        <div className="form-group d-flex justify-content-center mb-0">
          <input
            value={email}
            onChange={handleEmailChange}
            onBlur={validateEmail}
            className="form-control"
            type="email"
            placeholder="Email Address"
            id="email"
          />
        </div>
        <div className="d-flex justify-content-center mb-3">
          <span className="text-danger" id="email-error"></span>
        </div>
        <div className="form-group d-flex justify-content-center mb-0">
          <textarea
            value={message}
            onChange={handleMessageChange}
            onBlur={validateMessage}
            className="form-control"
            rows={5}
            placeholder="Your message..."
            id="message"
          ></textarea>
        </div>
        <div className="d-flex justify-content-center mb-3">
          <span className="text-danger" id="message-error"></span>
        </div>
        <div className="form-group d-flex justify-content-center">
          <button onClick={submitMessage} className="btn btn-success btn-lg">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
