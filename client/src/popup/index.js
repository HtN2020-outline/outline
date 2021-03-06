import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import ReactFileReader from "react-file-reader";

const axios = require("axios");

const pageStyles = makeStyles((theme) => ({
  root: {
    height: "400px",
    width: "400px",
    borderRadius: "1rem",
    margin: "0",
  },
  header: {
    height: "50px",
    backgroundColor: "#0077B6",
    marginBottom: "2rem",
    display: "flex",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  headertext: {
    color: "white",
    margin: "0 60px 0 60px",
    verticalAlign: "middle",
    textAlign: "center",
    paddingTop: "0.3rem",
    fontFamily: "Roboto",
    display: "inline",
    paddingBottom: "2vw",

    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",

    letterSpacing: "0.15px",

    textShadow: "2px 5px 4px rgba(0, 0, 0, 0.25)",
  },
  textinput: {
    width: "250px",
  },
  btn: {
    width: "fit-content",
    height: "30px",
    margin: "1rem auto",
    display: "flex",
    textAlign: "center",
  },
  text: {
    fontSize: "1rem",
    color: "green",
    margin: "0.5rem auto 1rem auto",
    textAlign: "center",
  },
  link: {
    textDecoration: "none",
    color: "black",
  },
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
    }
  };

  const handleFiles = (files) => {
    setFile(files.base64);
    const config = {
      title: "MTE111-Lecture",
      start: new Date("2021-01-25T14:30:00"),
      end: new Date("2021-01-25T15:30:00"),
      recurrence: {
        frequency: "WEEKLY",
      },
    };


    axios({
      method: "post",
      url: `http://localhost:5000/`,
      data: {
        file: files.base64, 
      },
    })
      .then((res) => {
        setIcs(res.data.data.ics);
        console.log(res.data.data.ics);
      })
      .catch((err) => {});
  };

  return (
    <div id="main" className={classes.root}>
      <div className={classes.header}>
        <img
          src="logo.png"
          style={{
            width: "40px",
            height: "40px",
            display: "inline",
            borderRadius: 10,
            marginLeft: 30,
            marginTop: 5,
          }}
        />
        <h1 className={classes.headertext}>Outline</h1>
      </div>
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        name="userName"
        value={name}
        onChange={(event) => onChangeHandler(event)}
        className="main__textinput"
        className={classes.textinput}
        style={{ display: "flex", margin: "1vw auto 0vw auto" }}
      />
      <TextField
        id="outlined-basic"
        label="Email"
        variant="outlined"
        name="userEmail"
        value={email}
        onChange={(event) => onChangeHandler(event)}
        className="main__textinput"
        className={classes.textinput}
        style={{ display: "flex", margin: "1vw auto 0vw auto" }}
      />
      <ReactFileReader
        handleFiles={handleFiles}
        fileTypes={[".pdf"]}
        base64={true}
      >
        <Button variant="outlined" className={classes.btn}>
          Upload
        </Button>
      </ReactFileReader>

      {file && (
        <div className={classes.text}>File has been successfully uploaded</div>
      )}
    </div>
  );
}

export default PopupPage;
