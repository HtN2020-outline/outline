import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";



const pageStyles = makeStyles((theme) => ({
  root: {},
}));

function PopupPage(props) {
  const classes = pageStyles();

  let [name, setName] = React.useState(null);
  let [email, setEmail] = React.useState(null);
  let [file, setFile] = React.useState(null);

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "userName") {
        setName(value);
      } else if (name === "userEmail") {
        setEmail(value);
      } else if (name === "file") {
        setFile(value);
      }
  };

  return (
    <div className={classes.root}>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          name="userName"
          value={name}
          onChange={(event) => onChangeHandler(event)}
          className="login__form__textinput"
          style={{ display: "flex", margin: "1vw auto 0vw auto" }}
        />
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        name="userEmail"
        value={email}
        onChange={(event) => onChangeHandler(event)}
        className="login__form__textinput"
        style={{ display: "flex", margin: "1vw auto 0vw auto" }}
      />
      <Button>
        <Input
            id="outlined-basic"
            label="File"
            variant="outlined"
            name="file"
            value={email}
            onChange={(event) => onChangeHandler(event)}
            className="login__form__textinput"
            style={{ display: "flex", margin: "1vw auto 0vw auto" }}
        />
      </Button>
      
    </div>
  );
}

export default PopupPage;
