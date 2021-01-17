export default function googleCalendarAPI(description, startDate, endDate, colour){

    var gapi = window.gapi
    const CLIENT_ID = "383641317264-3d26uiu5skq49pq01nhns9strgk1t6c0.apps.googleusercontent.com";
    var API_KEY = "AIzaSyBxGiqrBj7b4lMF83OVtxeeyXpM8X_hfZ0";
    var DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
    var SCOPES = "https://www.googleapis.com/auth/calendar.events";


    gapi.load('client:auth2', () => {
        console.log('loaded client')
  
        gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
        })
  
        gapi.client.load('calendar', 'v3', () => console.log('DONE!'))
  
        gapi.auth2.getAuthInstance().signIn()
        
        .then(() => {
        
        var event = {
            'summary': description,
            
            'start': {
            'dateTime': startDate,
            'timeZone': 'America/Vancouver'
            },
            'end': {
            'dateTime': endDate,
            'timeZone': 'America/Vancouver'
            },
            'colorId': colour,
            
            'reminders': {
            'useDefault': false,
            'overrides': [
                {'method': 'email', 'minutes': 24 * 60},
                {'method': 'popup', 'minutes': 10}
            ]
            }
        }
  
        var request = gapi.client.calendar.events.insert({
            'calendarId': 'primary',
            'resource': event,
        })
  
        request.execute(event => {
            console.log(event)
            window.open(event.htmlLink)
        })
        
        // get events
        gapi.client.calendar.events.list({
            'calendarId': 'primary',
            'timeMin': (new Date()).toISOString(),
            'showDeleted': false,
            'singleEvents': true,
            'maxResults': 10,
            'orderBy': 'startTime'
        }).then(response => {
            const events = response.result.items
            console.log('EVENTS: ', events)
        })
        })
    })
}