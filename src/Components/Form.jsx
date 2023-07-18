import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Form = () => {
  let [fname, setFname] = useState();
  let [lname, setLname] = useState();
  let [email, setEmail] = useState();
  let [password, setPassword] = useState();
  let [confirmpassword, setConfirmPassword] = useState();
  let [verify, setVerify] = useState();

  const getData = async () => {
    await axios.get("http://localhost:8010/users");
  };

  // const addedUser = (exist) => {
  //   alert("Signin successful");
  //   setVerify(exist)
  // };

  const alreadyExist = (notexist) => {
    // alert("User already exist");
    console.log("notdone");
    return setVerify(true);
  };

  const getAuthEmail = (data) => {
    if (data) {
      if (data.length > 0) {
        axios
          .post(`http://localhost:8010/signup`, data[0])
          .then(() => {
            console.log("done");
          })
          .catch((err) => {
            return alreadyExist();
          });
      }
    }
  };
  console.log(verify);
  useSelector((store) => getAuthEmail(store));
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
          .catch(() => alert("User already exist"));
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
        <Link type="submit" to="/signup">
          <input type="submit" value="Signup" className="submit fw-500" />
        </Link>
      </form>
    </div>
  );
};

export default Form;
