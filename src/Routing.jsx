import React, { useContext, useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import AddGroup from "./components/AddGroup/AddGroup";
import AddLesson from "./components/AddLesson/AddLesson";
import GroupDashboard from "./components/GroupDashboard/GroupDashboard";
import Login from "./components/Login/Login";
import MyGroups from "./components/MyGroups/MyGroups";
import Register from "./components/Register/Register";
import { authContext } from "./contexts/authContext";

const Routing = () => {
  const { currentUser } = useContext(authContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser) {
      navigate("/my-groups" + window.location.search);
    }
  }, [currentUser]);
  return (
    <Routes>
      <Route element={<Login />} path="/login" />
      <Route element={<Register />} path="/register" />
      <Route
        element={currentUser ? <MyGroups /> : <Navigate to="/login" />}
        path="/my-groups"
      />
      <Route
        element={currentUser ? <GroupDashboard /> : <Navigate to="/login" />}
        path="/my-groups/:id"
      />
      <Route
        element={currentUser ? <AddLesson /> : <Navigate to="/login" />}
        path="/my-groups/:id/add-lesson"
      />
      <Route
        element={currentUser ? <AddGroup /> : <Navigate to="/login" />}
        path="/add-group"
      />
    </Routes>
  );
};

export default Routing;
