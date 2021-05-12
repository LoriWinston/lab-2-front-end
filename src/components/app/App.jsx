import React from 'react';
import AvatarContainer from '../../containers/AvatarContainer';

export default function App() {
  return (
  <Router>
    <Switch>
      <Route exact path="/" component=
        {AvatarContainer} />
          <Route path="/:id" component=
        {AvatarDetailContainer} />
      </Switch>
    </Router>
  )
}
