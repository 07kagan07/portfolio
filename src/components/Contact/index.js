import React from "react";
import { StyledContact } from "./style";
import { IoLocationSharp, IoMail, IoPhonePortrait } from "react-icons/io5";

const Contact = () => {
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
            <form className="contact-form contact-box">
              <div className="row">
                <div class="mb-3 col-6">
                  <label for="exampleFormControlInput1" class="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    required
                  />
                </div>
                <div class="mb-3 col-6">
                  <label for="exampleFormControlInput1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    required
                  />
                </div>
              </div>
              <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Mail Subject
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    required
                  />
                </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary w-100">Send</button>
            </form>
          </div>
        </div>
      </div>
    </StyledContact>
  );
};

export default Contact;
