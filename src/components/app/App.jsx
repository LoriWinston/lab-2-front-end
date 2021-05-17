import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch } from 'react-router-dom'
import AvatarContainer from '../../containers/AvatarContainer';
import DetailsPage from '../../containers/DetailsPage';
import Scroll from '../characters/Scroll';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Avatar-Dex</h1>
        <Router>
          <Switch>
            <Scroll>
            <Route
              path="/avatars"
              exact
              render={(routerProps) => <AvatarContainer {...routerProps}/>}
              />
            <Route
              path="/details/:id"
              exact
              render={(routerProps) => <DetailsPage {...routerProps}/>}
              />
            </Scroll>
          </Switch>
        </Router>
      </div>
    )
  }
}
