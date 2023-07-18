import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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

  const addedUser = async () => {
    await alert("Signin successful");
    nav("/");
  };

  const alreadyExist = async () => {
    await alert("User already exist");
    nav("/signup");
  };

  const getAuthEmail = async (data) => {
    if (data.length > 0) {
      await axios
        .post(`http://localhost:8010/signup`, data[0])
        .then(async () => {
          await addedUser();
        })
        .catch(async () => {
          await alreadyExist();
        });
    }
  };
  let prodata = useSelector((store) => store.user);
  useEffect(() => {
    getData();
    getAuthEmail(prodata);
  }, [prodata]);
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
            verify: true,
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
          })
          .catch(() => {
            alert("User already exist");
            getData();
            setFname("");
            setLname("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
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
        <input type="submit" value="Signup" className="submit fw-500" />
      </form>
    </div>
  );
};

export default Form;
