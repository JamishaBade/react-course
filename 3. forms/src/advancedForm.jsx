import React, { useState } from "react";

function AdvancedForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    agreeToTerms: false,
  }); // state properties ( single state that holds multiple properties)

  const [errors, setErrors] = useState({});
  // this is required to ensure the user put in correct inputs
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.includes("@"))
      newErrors.email = "Invalid email address";
    if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (!formData.agreeToTerms)
      newErrors.agreeToTerms = "You must agree to the terms";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData, //spread data
      [name]: type === "checkbox" ? checked : value, //computed property name ( im talking about the [] )(allows value of the object as the key ig idk)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      // Here you can handle the form data, like sending it to an API
      console.log("Form submitted successfully with:", formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="agreeToTerms"
            checked={formData.agreeToTerms}
            onChange={handleChange}
          />
          I agree to the terms and conditions
        </label>
        {errors.agreeToTerms && (
          <p style={{ color: "red" }}>{errors.agreeToTerms}</p>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default AdvancedForm;
