var FileSaver = require('file-saver');



function get_ics(file) {
  /*const fs = require('fs');
  const pdf = require('pdf-parse');
  let dataBuffer = fs.readFileSync('./dom.pdf');
  backend/trial/dom.pdf
 
  pdf(dataBuffer).then(function(data) {
   
      // number of pages
      console.log(data.numpages);
      // number of rendered pages
      console.log(data.numrender);
      // PDF info
      console.log(data.info);
      // PDF metadata
      console.log(data.metadata); 
      
      // PDF.js version
      // check https://mozilla.github.io/pdf.js/getting_started/
      console.log(data.version);
      // PDF text
      console.log(data.text);      
  });
  return data.text*/

  /*const data = [{
    start: [2021, 1, 30, 9, 30],
    duration: { hours: 2, minutes: 3 },
    title: "Written Assignment",
    organizer: { name: "Admin", email: "admin@gmail.com" },
  },
]*/
  const ics = require('ics')

  console.log('reached backend')

  const { error, value } = ics.createEvents([
    {
      title: "Lunch",
      start: [2018, 1, 15, 12, 15],
      duration: { minutes: 45 },
    },
    {
      title: "Dinner",
      start: [2018, 1, 15, 12, 15],
      duration: { hours: 1, minutes: 30 },
    },
  ]);

  if (error) {
    console.log(error)
    return
  }
  console.log(value)
  return value;
}

exports.putDocument = async (req, res) => {
  const file = req.body.file;

   const ics_file = get_ics(file);

  // FileSaver.saveAs([[ics_file], "my_calendar.ics", {type: "text/calendar;charset=utf-8"}]);

  //const ics_file = FileSaver.saveAs([[get_ics(file)], "my_calendar.ics", {type: "text/calendar;charset=utf-8"}]);

  console.log(ics_file);

  res.status(200).json({
    status: "success",
    data: {
      ics: ics_file,
    },
  });
};

// Get Investor Profile
exports.getDocument = async (req, res) => {};
