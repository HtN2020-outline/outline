import React from 'react';
import logo from './logo.svg';
import googleCalendarAPI from './GoogleCalendarAPI';
import './App.css';

function App() {

  var description = "HELLO HELLO HELLO";
  var startDate = "2021-01-17T12:00:00-08:00";
  var endDate = "2021-01-20T12:00:00-08:00";
  var colorId = "10";

  const handleClick = () => {
    googleCalendarAPI(description,startDate,endDate,colorId)
    
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Click to add event to Google Calendar</p>
        { <button style={{width: 100, height: 50}} onClick={handleClick}>Add Event</button> }
      </header>
    </div>
  );
}

export default App;
