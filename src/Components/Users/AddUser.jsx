import React, { useState } from "react";
import TextField from "../TextField";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../redux/slices/UserSlice";

const AddUser = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const handelAddUser = () => {
    if (values.name !== "" && values.email !== "") {
      setValues({
        name: "",
        email: "",
      });
      dispatch(
        addUser({
          id: users.length + 1,
          name: values.name,
          email: values.email,
        })
      );
      navigate("/");
    } else {
      alert("Please enter all The data!");
    }
  };

  return (
    <div className="add-form">
      <TextField
        label="Name"
        value={values.name}
        onChange={({ target }) => setValues({ ...values, name: target.value })}
        inputProps={{ type: "text", placeholder: "John Doe" }}
      />
      <TextField
        label="Email"
        value={values.email}
        onChange={({ target }) => setValues({ ...values, email: target.value })}
        inputProps={{ type: "email", placeholder: "JohnDoe@mail.com" }}
      />
      <Button onClick={handelAddUser}>Submit</Button>
    </div>
  );
};

export default AddUser;
