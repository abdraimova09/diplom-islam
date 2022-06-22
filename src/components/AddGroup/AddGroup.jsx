import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
import { groupsContext } from "../../contexts/groupsContext";

const AddGroup = () => {
  const { createGroup } = useContext(groupsContext);
  const { currentUser } = useContext(authContext);
  const navigate = useNavigate();
  const [groupName, setGroupName] = useState("");
  const [subjectName, setSubjectName] = useState("");
  const [students, setStudents] = useState("");
  function handleSave() {
    if (!groupName.trim() || !subjectName.trim() || !students.trim()) {
      alert("Заполните поля!");
    } else {
      // eslint-disable-next-line no-restricted-globals
      if (!confirm("Создать новую группу?")) {
        alert("Вы отменили действие");
        return;
      }
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
        username: currentUser.email,
        group: {
          id,
          subjectName,
          groupName,
        },
      };
      createGroup(groupData, professorData);
      navigate("/my-groups");
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
          label="Название группы"
          variant="outlined"
        />
        <TextField
          value={subjectName}
          onChange={e => setSubjectName(e.target.value)}
          label="Предмет"
          variant="outlined"
        />
        <TextField
          value={students}
          onChange={e => setStudents(e.target.value)}
          label="Студенты (перечислять через запятую)"
          variant="outlined"
        />
        <Button onClick={handleSave} variant="contained">
          Добавить
        </Button>
      </Box>
    </Container>
  );
};

export default AddGroup;
