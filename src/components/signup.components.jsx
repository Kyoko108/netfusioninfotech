
//import {FaToggleOn } from 'react-icons/fa';
//import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React ,{useState} from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;


const Signup = () => {
const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    
    console.log(data);
  };


  return (
    <div className='container  mt-sm-4'>
        <center>
        <br/>
        <label>User ID</label>&nbsp;&nbsp;&nbsp;
        <input type='text' placeholder='Enter Username...'/>
        <br/>
        <br/>
        <label>Password</label>&nbsp;&nbsp;&nbsp;
         {/* <View>
          <TextInput placeholder="Enter your password " autocorrect={false} secureTextEntry={true} textContentType = 'password'/>
          <FaToggleOn style = {{
            position : 'absolute',
            right : 20 ,
          }} />
         </View> */}
        <input  placeholder='Enter Password...'type={passwordShown ? "text" : "password"}
        {...register('Password',{ required: "This is required." })} />
         <i onClick={togglePasswordVisiblity}>{eye}</i>{" "}
        <br/>
        <br/>
        <span>Type of account: </span>
        <input type='radio' name='account' id='User' value='User' />
        <label htmlFor='User'><span> User  </span></label>
        <input type='radio' name='account' id='Admin' value='Admin'/>
        <label htmlFor='Admin'><span> Admin  </span></label>
        <br/>
        <br/>
        <button type="submit" onClick={handleSubmit(onSubmit)}>
        Signup
      </button>
        <br/>
        <span>Already have an account? </span> 
          <Link to='/'>LogIn</Link>
        </center>
    </div>
  );
}

export default Signup;