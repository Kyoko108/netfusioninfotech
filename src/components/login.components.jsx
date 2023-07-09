import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Navbar from "../components/navbar.components";
const eye = <FontAwesomeIcon icon={faEye} />;

const Login = () => {

     const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordShown(!passwordShown);
  };

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };


  return (
    <div className='container mt-sm-4'>
        <center>

          <Navbar/>
        <br/>
        <label>User ID </label> &nbsp;
        <input type='text' placeholder='Enter Username...' />
        <br/>
        <br/>
        <label>Password </label> &nbsp;
        <input  placeholder='Enter Password...' type={passwordShown ? "text" : "password"}
        {...register('Password',{ required: "This is required." })} />
         <i onClick={togglePasswordVisibility}>{eye}</i>{" "}
        <br/>
        <br/>
       <button type="submit" onClick={handleSubmit(onSubmit)}>
        Login
      </button>
        <br/>
        <span>Don't have an account? </span> 
          <Link to='/signup'>Signup</Link>
        </center>
    </div>
  )
}

export default Login;