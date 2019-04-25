import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.scss";

import MainPage from "./components/mainPage";
import LegalPage from "./components/legalPage";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => <MainPage />} />
        <Route exact path="/aviso-legal" render={() => <LegalPage />} />
      </Switch>
    </div>
  );
}

export default App;
