import React from 'react';
import Navbar from "./Pages/Common/Navbar"
import Main from "./Pages/Main"
import Create from "./Pages/Main/Create"
import Detail from "./Pages/Main/Detail"
import { withRouter } from 'react-router-dom';
import { Switch, Route, Redirect } from  'react-router-dom';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/Newdata" component={Create} />
        <Route exact path="/Editdata/:DataID" component={Detail} />
        <Redirect to="/" />
      </Switch>
      <Main />
    </React.Fragment>
  );
}

export default (withRouter(App));
