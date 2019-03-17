import React, { Component } from "react";
import NavBar from "./NavBar";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import CalendarPage from "../features/calendar/calendarPage/calendarPage";
import home from "../features/home/home";
class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={home} />
        </Switch>
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
