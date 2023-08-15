"use client"
import React, { useState } from "react";
import { StyledContact } from "./style";
import { IoLocationSharp, IoMail, IoPhonePortrait } from "react-icons/io5";

const Contact = () => {
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(contact),
    })
      .then(()=>alert("E-posta gönderildi")).then(()=>setContact({
        name: "",
        email: "",
        subject: "",
        message: "",
      }))
  };
  return (
    <StyledContact id="contact">
      <div className="container">
        <div className="row justify-content-between align-items-stretch">
          <div className="col-lg-5">
            <div className="contact-way contact-box">
              <div className="d-flex gap-3 mb-4">
                <div className="icon-wrap">
                  <IoLocationSharp />
                </div>
                <div>
                  <h5 className="m-0">Address</h5>
                  <p className="m-0">Istanbul/ TURKEY</p>
                </div>
              </div>
              <div className="d-flex gap-3 mb-4">
                <div className="icon-wrap">
                  <IoMail />
                </div>
                <div>
                  <h5 className="m-0">Mail</h5>
                  <p className="m-0">Kagancoskun32@gmail.com</p>
                </div>
              </div>
              <div className="d-flex gap-3 mb-4">
                <div className="icon-wrap">
                  <IoPhonePortrait />
                </div>
                <div>
                  <h5 className="m-0">Phone</h5>
                  <p className="m-0">+90545 520 65 12</p>
                </div>
              </div>
            </div>
            <div className="map"></div>
          </div>
          <div className="col-lg-7">
            <form className="contact-form contact-box" onSubmit={handleSubmit}>
              <div className="row">
                <div className="mb-3 col-6">
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    required
                    name="name"
                    onChange={handleChange}
                    value={contact.name}
                  />
                </div>
                <div className="mb-3 col-6">
                  <label htmlFor="exampleFormControlInput1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    required
                    name="email"
                    onChange={handleChange}
                    value={contact.email}
                  />
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Mail Subject
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  required
                  name="subject"
                  onChange={handleChange}
                  value={contact.subject}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  required
                  name="message"
                  onChange={handleChange}
                  value={contact.message}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </StyledContact>
  );
};

export default Contact;
