import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Form = () => {
  let [fname, setFname] = useState();
  let [lname, setLname] = useState();
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  let [confirmpassword, setConfirmPassword] = useState();
  let proEmail = useSelector((store) => store.users[0].email);
  let filled = false;

  const getData = () => {
    axios.get("http://localhost:8010/users");
  };
  useEffect(() => {
    getData();
  }, []);
  const handleSignUp = (e) => {
    e.preventDefault();
    if (!fname && !lname && !email && !password && !confirmpassword) {
      alert("Please fill the blank field");
    } else if (password || confirmpassword) {
      if (password !== confirmpassword) {
        alert("Please write the correct password");
        setConfirmPassword("");
      } else {
        axios
          .post(`http://localhost:8010/signup`, {
            fname: fname,
            lname: lname,
            email: email,
            password: password,
            confirmpassword: confirmpassword,
            product: [],
          })
          .then(() => {
            alert("Done");
            getData();
            setFname("");
            setLname("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            filled = true;
          })
          .catch(() =>
            alert("User already exist")
          );
      }
    }
  };
  if (proEmail) {
    email = proEmail;
  }
  return (
    <div>
      <form onSubmit={handleSignUp} className="mt-3">
        <label className="fw-600">fname</label>
        <input
          autoFocus
          placeholder="Enter your first name"
          value={fname}
          type="text"
          onChange={(e) => setFname(e.target.value)}
        />
        <label className="fw-600">lname</label>
        <input
          placeholder="Enter your last name "
          value={lname}
          type="text"
          onChange={(e) => setLname(e.target.value)}
        />
        <label className="fw-600">email</label>
        <input
          placeholder="Enter your email"
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="fw-600">password</label>
        <input
          placeholder="Enter your password"
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <label className="fw-600">confirm-password</label>
        <input
          placeholder="Rewrite your password"
          value={confirmpassword}
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {filled === true ? (
          <Link to="/login">
            <input type="submit" value="Signup" className="submit fw-500" />
          </Link>
        ) : (
          <input type="submit" value="Signup" className="submit fw-500" />
        )}
      </form>
    </div>
  );
};

export default Form;
