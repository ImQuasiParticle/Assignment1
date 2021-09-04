import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import CardHeader from "@material-ui/core/CardHeader";

import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  Fade,
  InputAdornment,
  Paper,
  TextField,
  Zoom,
} from "@material-ui/core";
import { Comment } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 600,
    minHeight: 200,
    borderRadius: 10,
  },
  avatar: {
    backgroundColor: "#651fff",
  },
}));
function Post({ id, userId, title, body }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Fade in={true}>
      <Paper elevation={3} className={classes.root}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>{title[0].toUpperCase()}</Avatar>
          }
          title={title.substring(0, 50)}
          subheader={`ID ${id}`}
        />
        <CardActions disableSpacing>
          <IconButton>
            <FavoriteIcon />
          </IconButton>

          {expanded ? (
            <IconButton
              style={{ marginLeft: "auto", transform: "rotate(180deg)" }}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          ) : (
            <IconButton
              style={{ marginLeft: "auto" }}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          )}
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{body}</Typography>
          </CardContent>
        </Collapse>

        <CardActions>
          <TextField
            id="outlined-basic"
            label="Leave a comment"
            variant="outlined"
            style={{ width: "100%" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Comment />
                </InputAdornment>
              ),
            }}
          />
        </CardActions>
      </Paper>
    </Fade>
  );
}

export default Post;
