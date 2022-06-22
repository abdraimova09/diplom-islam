import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import AuthContextProvider from "./contexts/authContext";
import Routing from "./Routing";
import "./App.css";
import GroupsContextProvider from "./contexts/groupsContext";

const App = () => {
  return (
    <AuthContextProvider>
      <GroupsContextProvider>
        <BrowserRouter>
          <Header />
          <Routing />
        </BrowserRouter>
      </GroupsContextProvider>
    </AuthContextProvider>
  );
};

export default App;
