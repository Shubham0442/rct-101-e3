import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext"; 



const Login = () => {

   const [email, setemail] = useState("user@gmail.com")
   const [password, setPassword] = useState("user123")

  return (
    <div>
      <form >
        <div>
        <input data-cy="login-email" value = {email} onChange = {(e)=>setemail(e.target.value)}/>
        </div> 
          <div>
               <input data-cy="login-password" value = {password} onChange = {(e)=>setPassword(e.target.value)}/>
          </div>
          <div>
              <button data-cy="login-submit" onClick={handleLogin}>Login</button>
          </div>   
      </form>
    </div>
  );
};

export default Login;
