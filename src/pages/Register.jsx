import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import  {server } from "../main";
import toast from "react-hot-toast";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   const submitHandler = async (e) => {
    
     e.preventDefault();
     try {
       const { data } = await axios.post(
         `${server}/users/new`,
         {
           name,
           email,
           password,
         },
         {
           headers: {
             "Content-Type": "application/json",
           },
           withCredentials: true,
         }
       );

       toast("nice")
       
     } catch (error) {
       toast.error(error.response.data.message);
       
     }
   };
  return (
    <div className="login">
      <section>
        <form onSubmit={submitHandler}>
          <input
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
          <h4>Or</h4>
          <Link to="/login">Log In</Link>
        </form>
      </section>
    </div>
  );
}

export default Register;
