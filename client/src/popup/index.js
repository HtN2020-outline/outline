import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import RaisedButton from "@material-ui/core/Button";
import Button from "@material-ui/core/Button";

import ReactFileReader from "react-file-reader";


import { connect } from "react-redux";
import {
  getIcs,
} from "../store/actions";

const pageStyles = makeStyles((theme) => ({
  root: {
    height: "400px",
    width: "400px",
    border: "solid",
    borderColor: "black",
    borderRadius: '1rem',
    margin: '0'
  },
  header: {
    height: '50px',
    backgroundColor: 'black',
    marginBottom: '2rem',
  },
  headertext: {
    color: 'white',
    margin: '0 auto 0 auto',
    verticalAlign:'middle',
    textAlign: 'center',
    paddingTop: '0.3rem'
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
    textDecoration:'none',
    color: 'black'
  }
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

  const handleFiles = (files) => {
    setFile(files.base64);
    setIcs(props.getIcs(file));
  };

  return (
    <div id="main" className={classes.root}>
      <div className={classes.header}>
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
      {/*<RaisedButton
        containerElement="label" // <-- Just add me!
        label="Upload File"
      >
        <input type="file" onChange={handleCapture} accept="application/pdf"  />
      </RaisedButton>*/}

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

      {file && (
        <Button variant="outlined" className={classes.btn}>
          <a href={file} download className={classes.link}>
            Download ICS File
          </a>
        </Button>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    file: state.file,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getIcs: (file) =>
      dispatch(getIcs(file)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PopupPage);
