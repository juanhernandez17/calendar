import CalendarCom from "./calendar";
import React, { Component } from "react";
import moment from "moment";
import { Grid, Button, Container } from "semantic-ui-react";
import NavBar from "./NavBar";

class CalendarPage extends Component {
  state = {
    events: [
      {
        start: new Date(),
        end: new Date(moment().add(1, "days")),
        title: "Some title"
      }
    ]
  };

  onEventResize = (type, { event, start, end, allDay }) => {
    this.setState(state => {
      state.events[0].start = start;
      state.events[0].end = end;
      return { events: state.events };
    });
  };

  onEventDrop = ({ event, start, end, allDay }) => {
    console.log(start);
  };

  render() {
    return (
      <div>
        <NavBar />
        <Container className="main">
          <Grid>
            <Grid.Column width={3}>
              <Button positive content="Create Event" />
              <h1>Agenda</h1>
            </Grid.Column>
            <Grid.Column width={13}>
              <CalendarCom
                events={this.state.events}
                onEventDrop={this.onEventDrop}
                onEventResize={this.onEventResize}
              />
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default CalendarPage;
