// ---Dependencys
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// ---Pages
import HomePage from 'Pages/HomePage';
import HolaPage from 'Pages/HolaPage';
import ImageExPage from 'Pages/ImageExPage';
import Error404Page from 'Pages/Error404Page';

function AppContainer() : React.ReactElement {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hola" component={HolaPage} />
        <Route exact path="/img" component={ImageExPage} />
        <Route exact path="*" component={Error404Page} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppContainer;
