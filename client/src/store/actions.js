const axios = require("axios");

export const getIcs = (file) => {
  return (dispatch, getState) => {
    // Implementing Axios Start
    axios({
      method: "post",
      url: `http://localhost:5000/`,
      data: {
          file: file
      }
    })
      .then((res) => {
        const ics_file = res.data.ics;
        dispatch({
            type: "SUCCESS",
          });
      })
      .catch((err) => {
        dispatch({
          type: "ERROR",
          err,
        });
      });
    // Implementing Axios End
  };
};
