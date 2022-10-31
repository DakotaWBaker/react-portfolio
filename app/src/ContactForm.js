import React, { useState } from "react";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/333dee80-593c-11ed-b82c-5d75eaa7ccff";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }

  return (
    // <form
    //   action={FORM_ENDPOINT}
    //   onSubmit={handleSubmit}
    //   method="POST"
    //   target="_blank"
    // >

    <form id="contact-form" className="form-horizontal" role="form"
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
    <div className="form-group mb-3 mt-5">
      <div className="col-sm-12">
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="NAME"
          name="name"
          defaultValue=""
          required=""
        />
      </div>
    </div>
    <div className="form-group mb-3">
      <div className="col-sm-12">
        <input
          type="email"
          className="form-control"
          id="email"
          placeholder="EMAIL"
          name="email"
          defaultValue=""
          required=""
        />
      </div>
    </div>
    <textarea
      className="form-control"
      rows={10}
      placeholder="MESSAGE"
      name="message"
      required=""
      defaultValue={""}
    />
    <button
      className="btn btn-primary send-button"
      id="submit"
      type="submit"
      value="SEND"
    >
      <div className="alt-send-button">
      <i class="bi bi-send-fill"></i>
        <span className="send-text">SEND</span>
      </div>
    </button>
  </form>
  
  
    // {/* </form> */}
  );
};

export default ContactForm;