import React, { useState } from "react";
import "./create.css";
import {adduser} from "../feature/UserReducer";
import { useDispatch ,useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
 

const Create = () => {
  // State to store the form values
  const [site, setSite] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate =useNavigate();

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the form values
    // console.log({ site, username, password });

    dispatch(
      adduser({ id: users[users.length-1].id +1, site: site, username: username, password: password })
    );

    // You can later dispatch these values to a Redux store or send to a backend
    // Reset form fields
    setSite("");
    setUsername("");
    setPassword("");
    navigate("/")
  };

  return (
    <div className="form-container">
      <h2>Create Password Entry</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="site">Site URL</label>
          <input
            type="url"
            id="site"
            value={site}
            onChange={(e) => setSite(e.target.value)}
            placeholder="https://example.com"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter your username"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Create;
