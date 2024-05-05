import React, { useEffect, useState } from "react";
import "../Form1/form1.css";
import "../Form2/form2.css";

const Form1 = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [landmark, setLandmark] = useState("");
  const [region, setRegion] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [company, setCompany] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [vat, setVat] = useState("");

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
    if (!address1?.trim()) {
      errors.address1 = "Address line 1 is required";
    }
    if (!address2?.trim()) {
      errors.address2 = "Address line 2 is required";
    }
    if (!landmark?.trim()) {
      errors.landmark = "Landmark is required";
    }
    if (!region?.trim()) {
      errors.region = "Region is required";
    }
    if (!city?.trim()) {
      errors.city = "City is required";
    }
    if (!zip?.trim()) {
      errors.zip = "Zip is required";
    }
    if (!company?.trim()) {
      errors.company = "Company is required";
    }
    if (!phoneNumber?.trim()) {
      errors.phoneNumber = "Phone Number is required";
    }
    if (!vat?.trim()) {
      errors.vat = "VAT is required";
    }

    if (Object.keys(errors).length === 0) {
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
            type="text"
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
        <h3 className="form-heading">Where should we send your order ?</h3>
        <div className="form-deliver">
          <div className="form-group-deliver">
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
          <div className="form-group-deliver">
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
            {errors.lastName && <div className="error">{errors.lastName}</div>}
          </div>
          <div className="form-group-deliver">
            <input
              type="text"
              className={`input-field ${errors.address1 ? "error" : ""}`}
              placeholder="Apartment / Street / Building"
              value={address1}
              onChange={(e) => {
                delete errors.address1;
                setErrors(errors);
                setAddress1(e.target.value);
              }}
            />
            {errors.address1 && <div className="error">{errors.address1}</div>}
          </div>
          <div className="form-group-deliver">
            <input
              type="text"
              className={`input-field ${errors.address2 ? "error" : ""}`}
              placeholder="Street Address"
              value={address2}
              onChange={(e) => {
                delete errors.address2;
                setErrors(errors);
                setAddress2(e.target.value);
              }}
            />
            {errors.address2 && <div className="error">{errors.address2}</div>}
          </div>
          <div className="form-group-deliver">
            <input
              type="text"
              className={`input-field ${errors.landmark ? "error" : ""}`}
              placeholder="Landmark"
              value={landmark}
              onChange={(e) => {
                delete errors.landmark;
                setErrors(errors);
                setLandmark(e.target.value);
              }}
            />
            {errors.landmark && <div className="error">{errors.landmark}</div>}
          </div>
          <div className="form-group-deliver">
            <select className="select-field">
              <optgroup label="Country">
                <option value="US">United States</option>
                <option value="UK">United Kingdom</option>
                {/* Add more options as needed */}
              </optgroup>
            </select>
          </div>
          <div className="form-group-deliver">
            <select
              className={`select-field ${errors.region ? "error" : ""}`}
              value={region}
              onChange={(e) => {
                delete errors.region;
                setErrors(errors);
                setRegion(e.target.value);
              }}
            >
              <option value="">
                Please select a region, state or a province
              </option>
              <option value="CA">California</option>
              <option value="NY">New York</option>
            </select>
            {errors.region && <div className="error">{errors.region}</div>}
          </div>
          <div style={{ gap: "10px", display: "flex" }}>
            <div className="form-group-deliver form-group-deliver--half">
              <input
                type="text"
                className={`input-field ${errors.city ? "error" : ""}`}
                placeholder="City"
                value={city}
                onChange={(e) => {
                  delete errors.city;
                  setErrors(errors);
                  setCity(e.target.value);
                }}
              />
              {errors.city && <div className="error">{errors.city}</div>}
            </div>
            <div className="form-group-deliver form-group-deliver--half">
              <input
                type="number"
                className={`input-field ${errors.zip ? "error" : ""}`}
                placeholder="Zip / Postal Code"
                value={zip}
                onChange={(e) => {
                  delete errors.zip;
                  setErrors(errors);
                  setZip(e.target.value);
                }}
              />
              {errors.zip && <div className="error">{errors.zip}</div>}
            </div>
          </div>
          <div className="form-group-deliver">
            <input
              type="text"
              className={`input-field ${errors.company ? "error" : ""}`}
              placeholder="Company"
              value={company}
              onChange={(e) => {
                delete errors.company;
                setErrors(errors);
                setCompany(e.target.value);
              }}
            />
            {errors.company && <div className="error">{errors.company}</div>}
          </div>
          <div className="form-group-deliver phone-input">
            <select className="country-code-dropdown select-field">
              <option value="+1" selected>
                +1
              </option>
              <option value="+44">+44</option>
              {/* Add more options as needed */}
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

          {/* <div className="form-group-deliver">
              <input
                type="text"
                className={`input-field ${errors.phoneNumber ? "error" : ""}`}
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={(e) => {
                  delete errors.phoneNumber;
                  setErrors(errors);
                  setPhoneNumber(e.target.value);
                }}
              />
              {errors.phoneNumber && (
                <div className="error">{errors.phoneNumber}</div>
              )}
            </div> */}
          <div className="form-group-deliver">
            <input
              type="text"
              className={`input-field ${errors.vat ? "error" : ""}`}
              placeholder="VAT Number"
              value={vat}
              onChange={(e) => {
                delete errors.vat;
                setErrors(errors);
                setVat(e.target.value);
              }}
            />
            {errors.vat && <div className="error">{errors.vat}</div>}
          </div>
        </div>
        <div className="form-group-deliver form-group-deliver--submit">
          <button type="submit">Continue to Delivery</button>
        </div>
      </form>
      <div className="go-back-link">
        <a>&lt; Back to bag</a>
      </div>
    </>
  );
};

export default Form1;
