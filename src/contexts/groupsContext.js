import React, { useContext, useReducer } from "react";
import axios from "axios";
import { authContext } from "./authContext";

export const groupsContext = React.createContext();

const API = "http://localhost:8000";

const INIT_STATE = {
  groups: [],
  oneGroup: null,
  pages: 0,
};
function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_GROUPS":
      return {
        ...state,
        groups: action.payload,
        // pages: Math.ceil(action.payload.headers["x-total-count"] / 3),
      };
    case "GET_ONE_GROUP":
      return { ...state, oneGroup: action.payload };
    default:
      return state;
  }
}

const GroupsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);
  async function createGroup(groupData, professorData) {
    await axios.post(API + "/groups", groupData);
    await axios.post(API + "/professors", professorData);
    getGroups();
  }

  async function getGroups() {
    let res = await axios(`${API}/professors${window.location.search}`);
    dispatch({
      type: "GET_GROUPS",
      payload: res.data,
    });
  }
  //   console.log(state.pages);
  async function deleteGroup(groupId, professorId) {
    await axios.delete(`${API}/groups/${groupId}`);
    await axios.delete(`${API}/professors/${professorId}`);
    getGroups();
  }

  async function getOneGroup(id) {
    let res = await axios(`${API}/groups/${id}`);
    dispatch({
      type: "GET_ONE_GROUP",
      payload: res.data,
    });
  }
  async function updateGroup(id, editedGroup) {
    await axios.patch(`${API}/groups/${id}`, editedGroup);
  }
  return (
    <groupsContext.Provider
      value={{
        groups: state.groups,
        oneGroup: state.oneGroup,
        pages: state.pages,
        createGroup,
        getGroups,
        deleteGroup,
        getOneGroup,
        updateGroup,
      }}>
      {children}
    </groupsContext.Provider>
  );
};
export default GroupsContextProvider;
