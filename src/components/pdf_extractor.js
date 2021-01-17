const ics = require('ics')

function pdf_extractor(pdf_file) {
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
export default pdf_extractor;