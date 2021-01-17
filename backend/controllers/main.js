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

  const data = {start: [2021,1,30,9,30], duration:{hours: 2, minutes: 3}, title: "Written Assignment", organizer: {name: 'Admin', email: 'admin@gmail.com'}}

  const event = {
      start: data.start,
      duration: data.duration,
      title: data.title,
      organizer: data.organizer,

  }
  ics.createEvent(event, (error, value) => {
      if (error) {
        console.log(error)
        return
      }
    
      console.log(value)
    })
  
}

exports.putDocument = async (req, res) => {
  const file = req.body.file;

  const ics_file = 4; //get_ics(file);

  console.log(file);

  res.status(200).json({
    status: "success",
    data: {
      ics: ics_file,
    },
  });
};

// Get Investor Profile
exports.getDocument = async (req, res) => {};
