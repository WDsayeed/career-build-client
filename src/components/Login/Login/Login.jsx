import React, { useContext } from "react";
import { Form, Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from "../../providers/AuthProvider";

const Login = () => {

  const {signIn} = useContext(AuthContext)
  const handleLogin = event=>{
    event.preventDefault()
    const form = event.target 
    const email = form.email.value 
    const password = form.password.value 
    console.log(email, password)
    signIn(email, password)
    .then(result=>{
      const loggedUser = result.user 
      console.log(loggedUser)
    })
    .catch(error=>{
      console.log(error)
    })
  }
  return (
    <>
      <h2 className="text-center mt-16 mb-8 text-4xl">Please Login</h2>
      <Form className="hero mb-20 bg-base-200" onSubmit={handleLogin}>
        <div className="hero-content w-2/4 flex-col lg:flex-row-reverse">
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <button className=" h-12 rounded text-white bg-purple-600">
                  Login
                </button>
              </div>
              <div className="form-control mt-3">
                <button className="flex items-center justify-center gap-3 h-12 rounded text-white bg-purple-600">
                  <FaGoogle className="h-7 w-5"></FaGoogle>
                  Google Sign-in
                </button>
              </div>
              <div className="form-control mt-3">
                <button className="flex items-center justify-center gap-3 h-12 rounded text-white bg-purple-600">
                  <FaGithub className="h-7 w-5"></FaGithub>
                  GitHub Sign-in
                </button>
              </div>
              <p>
                Don't have an account?{" "}
                <Link to="/register" className="text-purple-600 underline">
                  create an account
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Form>
    </>
  );
};

export default Login;
