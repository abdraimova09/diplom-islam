import { Box, Container, Typography } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
import { groupsContext } from "../../contexts/groupsContext";
import GroupCard from "../GroupCard/GroupCard";

const MyGroups = () => {
  const { getGroups, groups } = useContext(groupsContext);
  const { currentUser } = useContext(authContext);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  console.log(groups);
  useEffect(() => {
    // getGroups();
    if (currentUser) {
      setSearchParams({
        username: currentUser.email,
      });
    }
  }, []);
  useEffect(() => {
    getGroups();
  }, [searchParams, location]);
  return (
    <Container>
      <Typography marginTop={"40px"} textAlign={"center"} variant="h5">
        Мои группы
      </Typography>
      <Box marginTop={"50px"}>
        {groups.length ? (
          groups.map(item => <GroupCard key={item.id} item={item} />)
        ) : (
          <Typography textAlign={"center"} variant="h6">
            Групп нет
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default MyGroups;
