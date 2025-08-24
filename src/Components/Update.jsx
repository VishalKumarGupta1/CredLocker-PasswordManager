import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { updateuser } from "../feature/UserReducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const { id } = useParams();

  const user = useSelector((state) => state.users);
  const existuser = user.filter((f) => f.id == id);

  const { site, username, password } = existuser[0];

  const [usite, setusite] = useState(site);
  const [uusername, setuusername] = useState(username);
  const [upassword, setupassword] = useState(password);
  const dispatch = useDispatch();
  const navigate =useNavigate();


  const handleupdate = (e) => {
    e.preventDefault();
    dispatch(
      updateuser({
        id: id,
        site: usite,
        username: uusername,
        password: upassword,
      })
    );
    navigate("/")
  };

  return (
    <>
      <div className="form-container">
        <h2>Update Password Entry</h2>
        <form onSubmit={handleupdate}>
          <div className="input-group">
            <label htmlFor="site">Site URL</label>
            <input
              type="url"
              id="site"
              placeholder="https://example.com"
              required
              value={usite}
              onChange={(e) => setusite(e.target.value)} // Handle change
            />
          </div>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              placeholder="Enter your username"
              required
              value={uusername}
              onChange={(e) => setuusername(e.target.value)} // Handle change
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
              value={upassword}
              onChange={(e) => setupassword(e.target.value)} // Handle change
            />
          </div>
          <button type="submit" className="submit-btn">
            Update
          </button>
        </form>
      </div>
    </>
  );
};

export default Update;
