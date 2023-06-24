
//import {FaToggleOn } from 'react-icons/fa';
//import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React ,{useState} from 'react'
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;


const Signup = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  

  const { register } = useForm();
 
  const handleSignup = async () => {
    try {
      const response = await fetch('/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Signup successful, perform necessary actions (e.g., redirect, show success message)
        console.log('Signup successful');
      } else {
        // Signup failed, handle error (e.g., show error message)
        console.error('Signup failed');
      }
    } catch (error) {
      console.error('An error occurred', error);
    }
  };

  return (
    <div className='container  mt-sm-4'>
        <center>
        <br/>
        <label>User ID</label>&nbsp;&nbsp;&nbsp;
        <input type='text' placeholder='Enter Username...'value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
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
        {...register('Password',{ required: "This is required." })} value={password}
          onChange={(e) => setPassword(e.target.value)} />
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
        <button type="submit" onClick={handleSignup}>
        Signup
      </button>
        <br/>
        <span>Already have an account? </span> 
          <Link to='/login'>LogIn</Link>
        </center>
    </div>
  );
}

export default Signup;