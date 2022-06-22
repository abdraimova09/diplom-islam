import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Button,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { groupsContext } from "../../contexts/groupsContext";

const GroupDashboard = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { getOneGroup, oneGroup } = useContext(groupsContext);
  useEffect(() => {
    getOneGroup(params.id);
  }, []);
  return (
    <Container>
      {oneGroup ? (
        <>
          <Typography marginTop={"40px"} textAlign={"center"} variant="h5">
            Группа: {oneGroup.groupName}
          </Typography>
          <Typography marginTop={"10px"} textAlign={"center"} variant="h6">
            Дисциплина: {oneGroup.subjectName}
          </Typography>
          <TableContainer style={{ marginTop: "20px" }} component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Студенты</TableCell>
                  {oneGroup.pastLessons.map(lesson => (
                    <TableCell align="right" key={lesson}>
                      {lesson}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {oneGroup.students.map(row => (
                  <TableRow
                    key={row.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      {row.studentName}
                    </TableCell>
                    {row.progress.map(item => (
                      <TableCell key={item.mark} align="right">
                        {!item.present
                          ? "нб"
                          : item.mark === 0
                          ? "Нет оценки"
                          : item.mark}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Button
            onClick={() => navigate(`/my-groups/${params.id}/add-lesson`)}
            style={{ marginTop: "10px" }}
            variant="contained">
            Добавить урок и выставить оценки
          </Button>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </Container>
  );
};

export default GroupDashboard;
