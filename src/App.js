import React, { Component } from 'react'
import Characters from './pages/Characters.js'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import SingleCharacters from './pages/SingleCharacters.js'

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route path="/" exact component={Characters} />
            <Route
              path="/SingleCharacters/:personID"
              component={SingleCharacters}
            />
            />
          </Switch>
        </Router>
      </>
    )
  }
}

export default App
