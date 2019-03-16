import CalendarCom from "../calendar";
import { connect } from "react-redux";
import React, { Component } from "react";
import { Grid,  Container } from "semantic-ui-react";
import NavBar from "../../../app/NavBar";
import { deleteEvent } from "../calendarActions";
import CalendarAgenda from "../calendarAgenda/calendarAgenda";
import CreateEvent from "../createEvent/createEvent";
const mapState = state => ({
  calendars: state.calendars
});

const actions = {
  deleteEvent
};

class CalendarPage extends Component {
  handleDeleteEvent = eventId => () => {
    this.props.deleteEvent(eventId);
  };
  render() {
    const { calendars } = this.props;
    return (
      <div>
        <NavBar />
        <Container className="main">
          <Grid>
            <Grid.Column width={3}>
              <CreateEvent/>
              <h1>Agenda</h1>
              <CalendarAgenda/>
            </Grid.Column>
            <Grid.Column width={13}>
              <CalendarCom
                events={calendars}
              />
            </Grid.Column>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default connect(
  mapState,
  actions
)(CalendarPage);
