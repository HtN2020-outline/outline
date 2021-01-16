import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import RaisedButton from "@material-ui/core/Button";

import ReactFileReader from "react-file-reader";

const pageStyles = makeStyles((theme) => ({
  root: {
    height: "20vw",
    width: "20vw",
  },
}));

function PopupPage(props) {
  const classes = pageStyles();

  let [name, setName] = React.useState(null);
  let [email, setEmail] = React.useState(null);
  let [file, setFile] = React.useState(null);

  let [ics, setIcs] = React.useState(null);

  const onChangeHandler = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "userName") {
      setName(value);
    } else if (name === "userEmail") {
      setEmail(value);
    }
  };

  const handleCapture = ({ target }) => {
    /*const fileReader = new FileReader();

    fileReader.readAsDataURL(target.files[0]);
    fileReader.onload = (e) => {
        setFile(e.target.result)
    };*/
  };

  const handleFiles = files => {
    setFile(files.base64);
  }

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
      {/*<RaisedButton
        containerElement="label" // <-- Just add me!
        label="Upload File"
      >
        <input type="file" onChange={handleCapture} accept="application/pdf"  />
      </RaisedButton>*/}

      <ReactFileReader handleFiles={handleFiles} fileTypes={[".pdf"]} base64={true}>
        <button className="btn">Upload</button>
      </ReactFileReader>

      <a href={file} download>
        Download File
      </a>

      <button onClick={console.log("hi")}>lajglajglkajg</button>
    </div>
  );
}

export default PopupPage;
