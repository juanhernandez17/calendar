import React, { Component } from "react";
import NavBar from "./NavBar";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import CalendarPage from "./calendarPage";
import home from "./home";
class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container>
          <Switch>
            <Route exact path="/" componennt={home} />
          </Switch>
        </Container>
        <Route
          path="/(.+)"
          render={() => (
            <div>
              <Container className="main">
                <Switch>
                  <Route path="/calendar" component={CalendarPage} />
                </Switch>
              </Container>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
