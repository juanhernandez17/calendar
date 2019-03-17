import React, { Component } from "react";
import { Grid, Modal, Header, Form, Button, Segment } from "semantic-ui-react";
import { TextInput } from "../../../app/comm/form/TextInput";
import TextArea from "../../../app/comm/form/TextArea";
import DateInput from "../../../app/comm/form/DateInput";
import { withRouter } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import { connect } from "react-redux";
import "./createEvent.css";
import { createEvent } from "../calendarActions";
import cuid from "cuid";
const mapState = (state, ownProps) => {
  const eventId = ownProps;

  let event = {
    title: "",
    start: "",
    end: ""
  };

  if (eventId && state.calendars.length > 0) {
    event = state.calendars.filter(event => event.id === eventId)[0];
  }

  return {
    event
  };
};
const actions = {
  createEvent
};
class CreateEvent extends Component {
  state = {
    openModal: false,
    event: Object.assign({}, this.props.event)
  };

  close = () => this.setState({ openModal: false });

  onFormSubmit = evt => {
    evt.preventDefault();
    if (this.state.event.id) {
      this.props.updateEvent(this.state.event);
      this.props.history.goBack();
    } else {
      const newEvent = {
        ...this.state.event,
        id: cuid()
      };
      this.props.createEvent(newEvent);
      this.props.history.push("/calendar");
      this.close();
    }
  };

  onInputChange = evt => {
    const newEvent = this.state.event;
    newEvent[evt.target.name] = evt.target.value;
    this.setState({
      event: newEvent
    });
  };
  closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
    this.setState({ closeOnEscape, closeOnDimmerClick, openModal: true })
  }
  render() {
    return (
      <div>
        <Button onClick={this.closeConfigShow(true, false)} positive> Create Event</Button>
        <Modal
          onClose={this.close}
          open={this.state.openModal}
          centered={false}
          size="large"
        >
          <Segment>
            <Form onSubmit={this.onFormSubmit}>
              <Grid>
                <Grid.Column width={15}>
                  <Grid.Row>
                    <h1 align="center"> Create a New Event</h1>
                    <Header sub content="Title" />
                    <Field
                      name="title"
                      type="text"
                      component={TextInput}
                      placeholder="Give your event a name"
                    />
                  </Grid.Row>
                  <Grid column="three">
                    <Grid.Column width={5}>
                      <Header sub content="Start Date" />
                      <Field
                        name="start"
                        type="text"
                        component={DateInput}
                        placeholder="Start Date"
                        dateFormat="MM-dd-YYYY h:mm aa"
                        timeFormat="h:mm aa"
                        showTimeSelect
                      />
                    </Grid.Column>
                    <Grid.Column width={5}>
                      <Header sub content="End Date" />
                      <Field
                        name="end"
                        type="text"
                        component={DateInput}
                        placeholder="Start Date"
                        dateFormat="MM-dd-YYYY h:mm aa"
                        timeFormat="h:mm aa"
                        showTimeSelect
                      />
                    </Grid.Column>
                    <Grid.Column width={6}>
                      <Header sub content="Description" />
                      <Field
                        name="description"
                        type="text"
                        component={TextArea}
                        rows={4}
                        placeholder="Give your event a name"
                      />
                    </Grid.Column>
                  </Grid>
                  <Grid>
                    <Button
                      positive
                      type="submit"
                      content="Submit"
                      style={{ outline: "1px solid gray" }}
                    />
                    <Button

                      onClick={this.close}
                      content="Cancel"
                      style={{ outline: "1px solid gray" }}
                    />
                    <Button
                      size="tiny"
                      icon="settings"
                      style={{ outline: "1px solid gray" }}
                    />
                  </Grid>
                </Grid.Column>
              </Grid>
            </Form>
          </Segment>
        </Modal>
      </div>
    );
  }
}
export default connect(
  mapState,
  actions
)(reduxForm({ form: "createEvent" })(withRouter(CreateEvent)));
