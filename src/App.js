import { Route, Routes } from "react-router-dom";
import AddUser from "./Components/Users/AddUser";
import EditUser from "./Components/Users/EditUser";
import UsersList from "./Components/Users/UsersList";

function App() {
  return (
    <div className="container mx-auto px-2 pt-5">
      <h2 className="text-center mb-3">CRUD with redux toolkit</h2>
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/edit-user/:id" element={<EditUser />} />
      </Routes>
    </div>
  );
}

export default App;
