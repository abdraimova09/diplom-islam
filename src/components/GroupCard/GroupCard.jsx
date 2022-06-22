import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { groupsContext } from "../../contexts/groupsContext";

export default function GroupCard({ item }) {
  const navigate = useNavigate();
  const { deleteGroup } = React.useContext(groupsContext);
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
        <Button
          onClick={() => {
            // eslint-disable-next-line no-restricted-globals
            if (confirm("Удалить группу?")) {
              deleteGroup(item.group.id, item.id);
            } else {
              alert("Вы отменили действие");
            }
          }}
          size="small">
          Удалить
        </Button>
      </CardActions>
    </Card>
  );
}
