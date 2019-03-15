import CalendarCom from "../calendar";
import { connect } from "react-redux";
import React, { Component } from "react";
import { Grid, Button, Container } from "semantic-ui-react";
import NavBar from "../../../app/NavBar";
import { Link } from "react-router-dom";
const mapState = state => ({
  calendars: state.calendars
});

class CalendarPage extends Component {
  handleEventCreated = newEvent => {
    const updatedEvents = [...this.state.events, newEvent];
    this.setState({
      events: updatedEvents
    });
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
    const { calendars } = this.props;
    return (
      <div>
        <NavBar />
        <Container className="main">
          <Grid>
            <Grid.Column width={3}>
              <Button as={Link} to='/createEvent' positive content="Create Event" />
              <h1>Agenda</h1>
            </Grid.Column>
            <Grid.Column width={13}>
              <CalendarCom
                events={calendars}
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

export default connect(mapState)(CalendarPage);
