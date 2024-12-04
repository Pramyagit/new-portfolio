import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Contact.css";
import "../App.css";
export const Contact = () => {
  return (
    <div className="contact  fw-bold">
      <Form className="form">
        <h2 className="title" data-aos="fade-down">
          Contact
        </h2>
        <Form.Group>
          <Form.Label className="label" data-aos="fade-right">
            Enter your full name:
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your full name"
            data-aos="fade-left"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="label" data-aos="fade-right">
            Enter your email address:
          </Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your your email address"
            data-aos="fade-left"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="label" data-aos="fade-right">
            Enter your age:
          </Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your age"
            data-aos="fade-left"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label className="label" data-aos="fade-right">
            Enter your query:
          </Form.Label>
          <div className="form-floating" data-aos="fade-left">
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
            ></textarea>
            {/* <label htmlFor="floatingTextarea">Comments</label> */}
          </div>
        </Form.Group>
        <br></br>
        <Button
          variant="primary"
          className="btn w-50  button-submit text-center "
          type="submit"
          // data-aos="fade-up"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};
