import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { groupsContext } from "../../contexts/groupsContext";

const AddGroup = () => {
  const { createGroup } = useContext(groupsContext);
  const [groupName, setGroupName] = useState("");
  const [subjectName, setSubjectName] = useState("");
  const [students, setStudents] = useState("");
  const [username, setUsername] = useState("");
  function handleSave() {
    if (
      !groupName.trim() ||
      !subjectName.trim() ||
      !students.trim() ||
      !username.trim()
    ) {
      alert("Заполните поля!");
    } else {
      const id = Date.now();
      const groupData = {
        groupName,
        subjectName,
        pastLessons: [],
        students: students.split(",").map(item => {
          return { studentName: item, progress: [] };
        }),
        id,
      };
      const professorData = {
        username,
        group: {
          id,
          subjectName,
          groupName,
        },
      };
      createGroup(groupData, professorData);
    }
  }
  return (
    <Container>
      <Typography marginTop={"40px"} textAlign={"center"} variant="h5">
        Добавить новую группу
      </Typography>
      <Box
        marginTop={"40px"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}>
        <TextField
          value={groupName}
          onChange={e => setGroupName(e.target.value)}
          label="Group name"
          variant="outlined"
        />
        <TextField
          value={subjectName}
          onChange={e => setSubjectName(e.target.value)}
          label="Subject"
          variant="outlined"
        />
        <TextField
          value={username}
          onChange={e => setUsername(e.target.value)}
          label="Professor's email"
          variant="outlined"
        />
        <TextField
          value={students}
          onChange={e => setStudents(e.target.value)}
          label="Students"
          variant="outlined"
        />
        <Button onClick={handleSave} variant="contained">
          Save
        </Button>
      </Box>
    </Container>
  );
};

export default AddGroup;
