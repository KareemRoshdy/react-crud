import { useDispatch, useSelector } from "react-redux";
import Button from "../Button";
import { Link } from "react-router-dom";
import "./users.css";
import { deleteUser } from "../../redux/slices/UserSlice";

const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  console.log(users);

  const handelRemove = (id) => {
    dispatch(deleteUser({ id }));
  };

  const renderCard = () => {
    return users.map((user) => (
      <div
        key={user.id}
        className="user-card d-flex my-1  align-items-center justify-content-between"
      >
        <div>
          <h5 className="user-name">{user.name}</h5>
          <span className="user-email">{user.email}</span>
        </div>
        <div className="icons">
          <Link to={`/edit-user/${user.id}`}>
            <button className="edit icon">
              <i className="bi bi-pencil"></i>
            </button>
          </Link>
          <button onClick={() => handelRemove(user.id)} className="delete icon">
            <i className="bi bi-trash"></i>
          </button>
        </div>
      </div>
    ));
  };
  return (
    <div>
      <Link to="/add-user">
        <Button>Add User</Button>
      </Link>
      <div className="users-list">
        {users.length ? renderCard() : <p className="no-user">No User</p>}
      </div>
    </div>
  );
};

export default UsersList;
