import React from 'react'
import InputNLabel from './InputNLabel';
import axios from 'axios';
import './Signup.css';
import {Link} from 'react-router-dom'

export default function Signup() {
  const [formValues, setFormValues] = React.useState({
    signupName: "",
    signEmail: "",
    signPartner: "",
    signPartnerEmail: "",
    signPassword: ""
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
    
        const res = await axios.post("http://localhost:5000/api/signup", formValues);
        console.log("User created:", res.data);
        alert("Signup successful!");
      } catch (err) {
        console.error("Error posting data:", err);
        alert("Signup failed!");
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
        <button type="submit" className="submitBtn">Submit</button>
        <div style={{display:"flex",justifyContent:"center",marginTop:"10px"}}><Link to="/login">Login</Link></div>
      </form>
    </div>
  );
}

let array = [
  { inpId: "signupName", label: "Name", inpType: "text", inpPlaceholder: "Enter Your Name", containerCls: "signTxtcon", inpCls: "signinp" },
  { inpId: "signEmail", label: "Email", inpType: "text", inpPlaceholder: "Enter Your Email", containerCls: "signTxtcon", inpCls: "signinp" },
  { inpId: "signPartner", label: "Partner Name", inpType: "text", inpPlaceholder: "Enter Your Partner Name", containerCls: "signTxtcon", inpCls: "signinp" },
  { inpId: "signPartnerEmail", label: "Partner Email", inpType: "text", inpPlaceholder: "Enter Your Partner Email", containerCls: "signTxtcon", inpCls: "signinp" },
  { inpId: "signPassword", label: "Password", inpType: "password", inpPlaceholder: "Enter Password", containerCls: "signTxtcon", inpCls: "signinp" }
];
