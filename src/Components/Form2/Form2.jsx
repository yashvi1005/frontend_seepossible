import React, { useEffect, useState } from "react";
import "../Form2/form2.css";
import "../Form1/form1.css";

const Form2 = () => {
  const [email, setEmail] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};

    if (!email?.trim()) {
      errors.email = "Email is required";
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      errors.email = "Invalid email";
    } else {
      sessionStorage.setItem("email", email);
    }

    if (!firstName?.trim()) {
      errors.firstName = "First Name is required";
    }
    if (!lastName?.trim()) {
      errors.lastName = "Last Name is required";
    }
    if (!phoneNumber?.trim()) {
      errors.phoneNumber = "Phone Number is required";
    } else if (!/^\d+$/.test(phoneNumber)) {
      errors.phoneNumber = "Phone Number must contain only digits";
    }

    if (Object.keys(errors).length === 0) {
      console.log("Form submitted successfully!");
    } else {
      errors.hasError = true;
      setErrors(errors);
    }
  };

  useEffect(() => {
    const prevEmail = sessionStorage.getItem("email");
    setEmail(prevEmail ?? null);
  }, []);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-heading">
          <h3 style={{ marginBlockEnd: "auto" }}>Contact Information</h3>
          <h5 className="login-link">
            Have an account? <a href="#">Login</a>
          </h5>
        </div>
        <div className="form-deliver">
          <input
            type="email"
            className={`input-field ${errors.email ? "error" : ""}`}
            placeholder="Email"
            value={email}
            onChange={(e) => {
              delete errors.email;
              setErrors(errors);
              setEmail(e.target.value);
            }}
          />
          {errors.email && <div className="error">{errors.email}</div>}
        </div>
        <h4 className="form-heading">Who will pickup the order ?</h4>
        <div className="form-pickup">
          <div style={{ gap: "18px", display: "flex" }}>
            <div className="form-group-pickup form-group-pickup--half">
              <input
                type="text"
                className={`input-field ${errors.firstName ? "error" : ""}`}
                placeholder="First Name"
                value={firstName}
                onChange={(e) => {
                  delete errors.firstName;
                  setErrors(errors);
                  setFirstName(e.target.value);
                }}
              />
              {errors.firstName && (
                <div className="error">{errors.firstName}</div>
              )}
            </div>
            <div className="form-group-pickup form-group-pickup--half">
              <input
                type="text"
                className={`input-field ${errors.lastName ? "error" : ""}`}
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => {
                  delete errors.lastName;
                  setErrors(errors);
                  setLastName(e.target.value);
                }}
              />
              {errors.lastName && (
                <div className="error">{errors.lastName}</div>
              )}
            </div>
          </div>
          <div className="form-group-deliver phone-input">
            <select className="country-code-dropdown select-field">
              <option value="+1" selected>
                +1
              </option>
              <option value="+44">+44</option>
            </select>
            <input
              type="number"
              className={`input-field ${errors.phoneNumber ? "error" : ""}`}
              placeholder="Phone Number"
              value={phoneNumber}
              onChange={(e) => {
                delete errors.phoneNumber;
                setErrors(errors);
                setPhoneNumber(e.target.value);
              }}
            />
          </div>
          {errors.phoneNumber && (
            <div className="error">{errors.phoneNumber}</div>
          )}
        </div>
        <div className="form-group-pickup form-group-pickup--submit">
          <button type="submit">Continue to store selection</button>
        </div>
      </form>
      <div className="go-back-link">
        <a>&lt; Return to Bag</a>
      </div>
    </>
  );
};

export default Form2;
