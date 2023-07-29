import { PasswordInput, TextInput } from "@mantine/core";
import React, { useState } from "react";
import { useRegisterMutation } from "../ApiRedux/Api/Authapi";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_confirmation] = useState("");
  const [register] = useRegisterMutation();
  const formHandler = async (e) => {
    try {
      e.preventDefault();
      const user = { name, email, password, password_confirmation };
      console.log(user);
      const { data } = await register(user);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" h-screen flex justify-center items-center">
      <form
        onSubmit={formHandler}
        className=" flex flex-col w-96 border shadow  gap-4 p-5"
      >
        <h2 className=" text-xl text-center">Register</h2>
        <TextInput
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name...."
        />
        <TextInput
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email...."
        />
        <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password..."
        />
        <PasswordInput
          value={password_confirmation}
          onChange={(e) => setPassword_confirmation(e.target.value)}
          placeholder="Password Confirm"
        />
        <div className="flex gap-2">
          <p className=" text-xs text-slate-500 font-mono">
            Already have an accout?
          </p>
          <Login to="/login">
            <p className=" text-xs text-slate-500 cursor-pointer font-mono">
              Log In
            </p>
          </Login>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-800 text-white py-1"
        >
          Sign Up
        </button>
      </form>
    </div>
   
  );
};

export default Register;
