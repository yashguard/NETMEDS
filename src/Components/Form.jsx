import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { emailauth } from "./Config";

const Form = () => {
  let [fname, setFname] = useState();
  let [lname, setLname] = useState();
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  let [confirmpassword, setConfirmPassword] = useState();
  let nav = useNavigate();

  const getData = async () => {
    await axios.get("http://localhost:8010/users");
  };

  const addingUser = async (verify) => {
    await axios
      .post(`http://localhost:8010/signup`, {
        fname: fname,
        lname: lname,
        email: email,
        password: password,
        confirmpassword: confirmpassword,
        verify: verify,
        product: [],
      })
      .then(async () => {
        await alert("Signup successful");
        setFname("");
        setLname("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        nav("/");
      })
      .catch(async () => {
        await alreadyExist(email);
      });
  };

  const addedUser = (email) => {
    if (email) {
      setFname("");
      setLname("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      nav("/");
    }
  };

  const alreadyExist = (email) => {
    if (email) {
      alert("User already exist with email " + email);
      setFname("");
      setLname("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      nav("/login");
    }
  };

  const getAuthEmail = async (data) => {
    if (data.length > 0) {
      await axios
        .post(`http://localhost:8010/signup`, data[0])
        .then(async () => {
          await alert("Signin successful");
          await addedUser(data[0].email);
          data[0].email = await "";
        })
        .catch(async () => {
          await alreadyExist(data[0].email);
          data[0].email = await "";
        });
    }
  };

  let prodata = useSelector((store) => store.user);

  useEffect(() => {
    getData();
    getAuthEmail(prodata);
  }, [prodata]);

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (!fname && !lname && !email && !password && !confirmpassword) {
      alert("Please fill the blank field");
    } else if (password || confirmpassword) {
      if (password !== confirmpassword) {
        alert("Please write the correct password");
        setConfirmPassword("");
      } else {
        await emailauth(email, password)
          .then((res) => {
            addingUser(res);
          })
          .catch(async (err) => {
            if (
              err.message ===
              "Firebase: Password should be at least 6 characters (auth/weak-password)."
            ) {
              await alert("Password should be at least 6 characters");
            } else if (
              err.message === "Firebase: Error (auth/email-already-in-use)."
            ) {
              await alreadyExist(email);
            }
          });
      }
    }
  };

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
        <div className="row justify-content-between align-item-center">
          <div className="submit-btn col-xs-12 col-sm-12 col-md-5 col-lg-12 col-xl-12 col-xxl-5">
            <input type="submit" value="Signup" className="submit fw-500" />
          </div>
          <div className="signin-move-btn fw-600 col-xs-12 col-sm-12 col-md-7 col-lg-12 col-xl-12 col-xxl-7">
            <span>Already have an account<Link to="/login">Click here</Link></span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
