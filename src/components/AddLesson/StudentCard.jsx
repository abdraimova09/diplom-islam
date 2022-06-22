import { MenuItem, Select, TableCell, TableRow } from "@mui/material";
import React, { useEffect, useState } from "react";

const StudentCard = ({ row, lesson, students, setStudents }) => {
  const [mark, setMark] = useState(0);
  const [present, setPresent] = useState(null);
  useEffect(() => {
    let newProgress = {
      lesson,
      present,
      mark,
    };
    const newStudentsArray = students.map(student => {
      if (student.studentName === row.studentName) {
        return {
          studentName: student.studentName,
          progress: [...row.progress, newProgress],
        };
      } else {
        return student;
      }
    });
    setStudents(newStudentsArray);
  }, [mark, present]);

  useEffect(() => {
    let newProgress = {
      lesson,
      present,
      mark,
    };
    const newStudentsArray = students.map(student => {
      if (student.studentName === row.studentName) {
        return {
          studentName: student.studentName,
          progress: [...row.progress, newProgress],
        };
      } else {
        return student;
      }
    });
    setStudents(newStudentsArray);
  }, []);

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row">
        {row.studentName}
      </TableCell>
      <TableCell component="th" align="right">
        <Select
          defaultValue={true}
          id="demo-simple-select"
          value={present}
          onChange={e => {
            setPresent(e.target.value);
            if (!e.target.value) {
              setMark(null);
            }
          }}>
          <MenuItem value={true}>Да</MenuItem>
          <MenuItem value={false}>Нет</MenuItem>
        </Select>
      </TableCell>
      <TableCell component="th" align="right">
        <Select
          defaultValue={5}
          id="demo-simple-select"
          value={mark}
          disabled={!present}
          label="Оценка"
          onChange={e => setMark(e.target.value)}>
          <MenuItem value={0}>Нет оценки</MenuItem>
          <MenuItem value={1}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
          <MenuItem value={5}>5</MenuItem>
        </Select>
      </TableCell>
    </TableRow>
  );
};

export default StudentCard;
