import React from "react";
import "./Home.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteuser } from "../feature/UserReducer";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Home = () => {
  const user = useSelector((state) => state.users);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteuser({ id: id }));
  };

  return (
    <div className="container">
      <h1>Password Manager</h1>
      <Link to="/create" id="create-btn">
        Create +
      </Link>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Site</th>
            <th>Username</th>
            <th>Password</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {user.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>
                <a href={item.site} target="_blank" rel="noopener noreferrer">
                  {item.site}
                </a>
              </td>
              <td>{item.username}</td>
              <td>{item.password}</td>
              <td>
                <Link className="editbtn" to={`/edit/${item.id}`}>
                  <FaEdit />
                </Link>
                <button onClick={() => handleDelete(item.id)}>
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
