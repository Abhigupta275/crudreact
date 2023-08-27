import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Create() {
  const navigate = useNavigate();

  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };

  const [formDataList, setFormDataList] = useState([initialFormData]);

  const [errors, setErrors] = useState([]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const updatedFormDataList = [...formDataList];
    updatedFormDataList[index][name] = value;
    setFormDataList(updatedFormDataList);
  };

  const handleAddNew = () => {
    setFormDataList([...formDataList, initialFormData]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = formDataList.map((data) => {
      return !data.firstName || !data.lastName || !data.email || !data.phone;
    });

    if (validationErrors.every((error) => !error)) {
      const storedData = JSON.parse(localStorage.getItem("formData")) || [];
      const updatedData = [...storedData, ...formDataList];
      localStorage.setItem("formData", JSON.stringify(updatedData));

      setFormDataList([initialFormData]);
      navigate("/read");
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="border rounded p-3 shadow-sm">
      <div className="d-flex justify-content-between mt-3 mb-2">
        <h2>Create Data</h2>
        <Link to="/read">
          <button className="btn btn-warning">Read Data</button>
        </Link>
      </div>
      {formDataList.map((formData, index) => (
        <form key={index}>
          <div className="mb-3">
            <label htmlFor={`firstName${index}`} className="form-label">
              Firstname<span className="text-danger">*</span>
            </label>
            <input
              id={`firstName${index}`}
              className="form-control"
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) => handleInputChange(index, e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor={`lastName${index}`} className="form-label">
              Lastname<span className="text-danger">*</span>
            </label>
            <input
              id={`lastName${index}`}
              className="form-control"
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) => handleInputChange(index, e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor={`email${index}`} className="form-label">
              Email address<span className="text-danger">*</span>
            </label>
            <input
              id={`email${index}`}
              className="form-control"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={(e) => handleInputChange(index, e)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor={`phone${index}`} className="form-label">
              Phone<span className="text-danger">*</span>
            </label>
            <input
              id={`phone${index}`}
              className="form-control"
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={(e) => handleInputChange(index, e)}
            />
          </div>
          {errors[index] && (
            <p className="text-danger">All fields are required</p>
          )}
        </form>
      ))}
      <div className="d-flex justify-content-between">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleAddNew}
        >
          Add More
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default Create;
