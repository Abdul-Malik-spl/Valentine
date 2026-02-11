import React from 'react'
import InputNLabel from './InputNLabel';
import axios from 'axios';
import './Login.css';
import {Link} from 'react-router-dom'
export default function Login() {
  const [formValues, setFormValues] = React.useState({
    loginEmail: "",
    loginPassword: ""
  });

  const [errors, setErrors] = React.useState({});

  const handleChange = (id, value) => {
    setFormValues({ ...formValues, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    let newErrors = {};
    Object.keys(formValues).forEach((key) => {
      if (!formValues[key].trim()) {
        newErrors[key] = `${key} is required`;
      }
    });

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
       
        const res = await axios.post("http://localhost:5000/api/login", formValues);
        console.log("Login success:", res.data);
        alert("Login successful!");
      } catch (err) {
        console.error("Error logging in:", err);
        alert("Login failed!");
      }
    }
  };

  return (
    <div className="glassFormWrapper">
      <form className="glassForm" onSubmit={handleSubmit}>
        {array.map((field) => (
          <InputNLabel
            key={field.inpId}
            {...field}
            inpValue={formValues[field.inpId]}
            onChange={(e) => handleChange(field.inpId, e.target.value)}
            error={!!errors[field.inpId]}
            errormsg={errors[field.inpId]}
          />
        ))}
        <button type="submit" className="submitBtn">Login</button>
<div style={{display:"flex",justifyContent:"center",marginTop:"10px"}}><Link to='/'>SignUp</Link></div>
      </form>
    </div>
  );
}

let array = [
  { inpId: "loginEmail", label: "Email", inpType: "text", inpPlaceholder: "Enter Your Email", containerCls: "signTxtcon", inpCls: "signinp" },
  { inpId: "loginPassword", label: "Password", inpType: "password", inpPlaceholder: "Enter Password", containerCls: "signTxtcon", inpCls: "signinp" }
];
