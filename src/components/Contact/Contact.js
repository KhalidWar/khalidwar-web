import React, { useState } from "react";
import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

const serviceId = "gmail";
const templateId = "template_anbvf1j";
const userId = "user_IiaxIChNn0Q3Dtg79dxhB";
const emailRegRexp =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showError, setShowError] = useState(false);

  const isEmailValid = emailRegRexp.test(formData.email);

  function updateForm(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
  }

  function resetFormsAndErrors() {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setShowError(false);
  }

  async function sendMessage() {
    try {
      const areFormValid =
        formData.name && formData.email && isEmailValid && formData.message;

      if (areFormValid) {
        await emailjs.send(serviceId, templateId, formData, userId);
        toast.success("Message sent!");
        resetFormsAndErrors();
      } else {
        setShowError(true);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.text);
    }
  }

  return (
    <section id="contact">
      <div className="container">
          <div className="contact-us">
            <ToastContainer
              position="bottom-left"
              autoClose={3000}
              closeOnClick
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
            <h2>Get in touch!</h2>
            <p>Contract me for your projects.</p>
          </div>
          <div className="contact-card">
            <TextField
              id="outlined-basic"
              variant="outlined"
              label="Full Name"
              name="name"
              required
              error={showError && !formData.name}
              helperText={showError && !formData.name && "Name is required"}
              value={formData.name}
              onChange={updateForm}
            />
            <TextField
              id="outlined-basic"
              variant="outlined"
              label="Email"
              name="email"
              required
              error={
                (showError && !formData.email) || (showError && !isEmailValid)
              }
              helperText={
                (showError && !formData.email && "Email is required") ||
                (showError && !isEmailValid && "Email is invalid")
              }
              value={formData.email}
              onChange={updateForm}
            />
            <TextField
              className="message-input"
              id="outlined-multiline-static"
              label="Message"
              name="message"
              multiline
              rows={4}
              required
              error={showError && !formData.message}
              helperText={
                showError && !formData.message && "Message is required"
              }
              value={formData.message}
              onChange={updateForm}
            />
            <Button
              className="submit-button"
              variant="contained"
              color="error"
              size="large"
              onClick={sendMessage}
            >
              Submit
            </Button>
          </div>
      </div>
    </section>
  );
}

export default Contact;
