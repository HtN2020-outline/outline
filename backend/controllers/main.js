
function get_ics(file) {
  const fs = require('fs');
  const pdf = require('pdf-parse');
  const chrono = require('chrono-node');
  const today = new Date();

  var ics = [];

  let dataBuffer = fs.readFileSync('./dom.pdf');
  backend/trial/dom.pdf
  
  pdf(dataBuffer).then(function (data) {

    // // number of pages
    // console.log(data.numpages);
    // // number of rendered pages
    // console.log(data.numrender);
    // // PDF info
    // console.log(data.info);
    // // PDF metadata
    // console.log(data.metadata);

    // // PDF.js version
    // // check https://mozilla.github.io/pdf.js/getting_started/
    // console.log(data.version);
    // PDF text
    var pdfText = data.text;
    // console.log(pdfText);

    var sentences = pdfText.split('.');

    // test code for reoccuring events
    // var text = 'the due date will be 5pm on Fridays';
    // var chronotest = chrono.parse(text, today, { forwardDate: true });
    // console.log(text);
    // console.log(chronotest);
    // console.log(chronotest[0].start.get('year') + " " + chronotest[0].start.get('month') + " " + chronotest[0].start.get('day') + " " + chronotest[0].start.get('hour') + " " + chronotest[0].start.get('minute'))

    sentences.forEach(function (item, index) {
      var date = chrono.parse(item, today, { forwardDate: true });
      if (date != null) {
        var i;
        for (i = 0; i < date.length; i++) {
          if (date[i].start != null && date[i].end != null) {
            //console.log(item);
            //console.log(date);
    
            var diffTime = Math.abs(date[i].end.date() - date[i].start.date());
            // millisecs to min
            diffTime = Math.ceil(diffTime / (1000 * 60));
            var jsonDur = { minutes: diffTime };
            // use days if duration is greater than a day
            if (diffTime > (60 * 24)) {
              diffTime = Math.ceil(diffTime / (60 * 24));
              jsonDur = { days: diffTime };
            }
    
            var jsonStr = {
              title: item,
              start: [date[i].start.get('year'), date[i].start.get('month'), date[i].start.get('day'), date[i].start.get('hour'), date[i].start.get('minute')],
              duration: jsonDur
            }
    
            ics.push(jsonStr);
            //console.log(ics);
          }
        }
      }
    });

  });
  return ics
}

exports.putDocument = async (req, res) => {
  const file = req.body.file;

  const ics_file = get_ics(file);

  console.log(file);

  res.status(200).json({
    status: "success",
    data: {
      ics: ics_file,
    },
  });
};

// Get Investor Profile
exports.getDocument = async (req, res) => {

};