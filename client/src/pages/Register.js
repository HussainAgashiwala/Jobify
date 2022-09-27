import React, { useState, useEffect} from "react";
import {useNavigate} from 'react-router-dom'
import Wrapper from "../assets/wrappers/RegisterPage";
import { Logo, FormRow, Alert } from "../components";
import { useAppContext } from "../context/appContext";

const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};
const Register = () => {
  const navigate=useNavigate();
  const [values, setValues] = useState(initialState);
  const {showAlert,isLoading,displayAlert,registerUser,loginUser,user}=useAppContext();
  const handleChange = (e) => {
    setValues({
      ...values,[e.target.name]:e.target.value
    })
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const {name,email,password,isMember}=values
    if(!password || !email || (!isMember && !name)){
      displayAlert();
      return
    }
    if(isMember){
      loginUser({email,password})
    }else{
      registerUser({name,email,password});
    }
  };
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };
  useEffect(()=>{
    if(user){
      setTimeout(()=>{
        navigate('/')
      },3000)
    }
  },[user])
  return (
    <Wrapper className="full-page">
      <form onSubmit={handleSubmit} className="form">
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert />}
        {/*name input*/}
        {!values.isMember && (
          <FormRow
            type="text"
            name="name"
            value={values.name}
            handleChange={handleChange}
          />
        )}
        {/*email input*/}
        <FormRow
          type="email"
          name="email"
          value={values.email}
          handleChange={handleChange}
        />
        {/*password input*/}
        <FormRow
          type="password"
          name="password"
          value={values.password}
          handleChange={handleChange}
        />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          submit
        </button>
        <p>
          {values.isMember ? 'Not a member yet':'Already a member?'}
          <button type="button" className="member-btn" onClick={toggleMember}>
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
