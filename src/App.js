import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import PopupPage from './popup';

/*function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Langar&display=swap" rel="stylesheet"/>
      <Switch>
        {/*<Route exact path="/" component={MainPage} />
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;*/

function App() {
    return (
        <PopupPage />
    );
}

export default App;
