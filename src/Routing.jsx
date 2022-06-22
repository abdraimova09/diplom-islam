import React from "react";
import { Route, Routes } from "react-router-dom";
import AddGroup from "./components/AddGroup/AddGroup";
import GroupDashboard from "./components/GroupDashboard/GroupDashboard";
import Login from "./components/Login/Login";
import MyGroups from "./components/MyGroups/MyGroups";
import Register from "./components/Register/Register";

const Routing = () => {
  return (
    <Routes>
      <Route element={<Login />} path="/login" />
      <Route element={<Register />} path="/register" />
      <Route element={<MyGroups />} path="/my-groups" />
      <Route element={<GroupDashboard />} path="/my-groups/:id" />
      <Route element={<AddGroup />} path="/add-group" />
    </Routes>
  );
};

export default Routing;
