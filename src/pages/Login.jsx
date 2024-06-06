import React, { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { Context, server } from "../main";
import toast from "react-hot-toast";
import axios from "axios";

function Login() {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
  const { isAuthenticated, SetIsAuthenticated } = useContext(Context);

   const submitHandler = async (e) => {
     e.preventDefault();
     try {
       const { data } = await axios.post(
         `${server}/users/login`,
         {
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

       toast(data.message);
       SetIsAuthenticated(true);
     } catch (error) {
       toast.error(error.response.data.message);
       SetIsAuthenticated(false);
     }
   };
     if (isAuthenticated) return <Navigate to={"/"} />;

  return (
    <div className="login">
      <section>
        <form onSubmit={submitHandler}>
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
          <button type="submit">Login</button>
          <h4>Or</h4>
          <Link to="/register">Sign Up</Link>
        </form>
      </section>
    </div>
  );
}

export default Login;
