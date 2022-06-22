import {
  Box,
  Button,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { groupsContext } from "../../contexts/groupsContext";
import StudentCard from "./StudentCard";

const AddLesson = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { getOneGroup, oneGroup, updateGroup } = useContext(groupsContext);
  const [lesson, setLesson] = useState("");
  const [students, setStudents] = useState([]);
  console.log(students);
  function handleSave(oneGroup) {
    if (
      !lesson.trim() ||
      students.some(
        item => item.progress.length != oneGroup.pastLessons.length + 1
      )
    ) {
      alert("Заполните поля!");
    } else {
      // eslint-disable-next-line no-restricted-globals
      if (!confirm("Создать новый урок?")) {
        alert("Вы отменили действие");
        return;
      }
      const updatedGroup = {
        ...oneGroup,
        pastLessons: [...oneGroup.pastLessons, lesson],
        students,
      };
      updateGroup(params.id, updatedGroup);
      navigate(`/my-groups/${params.id}`);
    }
  }
  useEffect(() => {
    getOneGroup(params.id);
  }, []);
  useEffect(() => {
    if (oneGroup) {
      setStudents(oneGroup.students);
    }
  }, [oneGroup]);
  return (
    <Container>
      <Typography marginTop={"40px"} textAlign={"center"} variant="h5">
        Добавить урок
      </Typography>
      {oneGroup ? (
        <Box
          marginTop={"40px"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}>
          <TextField
            value={lesson}
            onChange={e => setLesson(e.target.value)}
            label="Название урока"
            variant="outlined"
          />
          <TableContainer style={{ marginTop: "20px" }} component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Студенты</TableCell>
                  <TableCell align="right">Присутствие</TableCell>
                  <TableCell align="right">Оценка</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {oneGroup.students.map(row => (
                  <StudentCard
                    students={students}
                    setStudents={setStudents}
                    key={row.id}
                    row={row}
                    lesson={lesson}
                  />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Button onClick={() => handleSave(oneGroup)} variant="contained">
            Сохранить урок
          </Button>
        </Box>
      ) : (
        <h2>Loading...</h2>
      )}
    </Container>
  );
};

export default AddLesson;
