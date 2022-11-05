import React, { useState } from "react";
import TextField from "../TextField";
import Button from "../Button";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editUser } from "../../redux/slices/UserSlice";

const EditUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users);

  const param = useParams();

  const existingUser = users.filter((user) => user.id === +param.id);
  const { name, email } = existingUser[0];
  const [values, setValues] = useState({
    name,
    email,
  });

  const handelEditUser = () => {
    dispatch(
      editUser({
        id: +param.id,
        name: values.name,
        email: values.email,
      })
    );
    setValues({
      name: "",
      email: "",
    });
    navigate("/");
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
      <Button onClick={handelEditUser}>Edit</Button>
    </div>
  );
};

export default EditUser;
