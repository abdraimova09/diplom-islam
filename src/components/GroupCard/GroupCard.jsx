import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function GroupCard({ item }) {
  const navigate = useNavigate();
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Группа: {item.group.groupName}
        </Typography>
        <Typography marginTop={"10px"} variant="body2">
          Дисциплина: {item.group.subjectName}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          onClick={() => navigate(`/my-groups/${item.group.id}`)}
          size="small">
          Подробнее
        </Button>
      </CardActions>
    </Card>
  );
}
