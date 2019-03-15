import React, { Component } from "react";
import { Grid, Segment, Header, Form, Button, Input, TextArea } from "semantic-ui-react";
import "./createEvent.css";

class createEvent extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column width={15}>
          <Segment>
            <Grid.Row>
              <h1 align="center"> Create a New Event</h1>
              <Form.Field>
              <Header sub content="Title" />
              <Input fluid />
            </Form.Field>
            </Grid.Row>
            <Grid column="three">
              <Grid.Column width={3}>
                <Form.Field>
                  <Header sub content="Start Date" />
                  <Input type="date" />
                </Form.Field>
                <Form.Field>
                  <Header sub content="End Date" />
                  <Input type="date" />
                </Form.Field>
              </Grid.Column>
              <Grid.Column width={3}>
                <Form.Field>
                  <Header sub content="Start Time" />
                  <Input type="time" />
                </Form.Field>
                <Form.Field>
                  <Header sub content="Start Time" />
                  <Input type="time" />
                </Form.Field>
              </Grid.Column>
              <Grid.Column width={10}>
                <Form.Field>
                  <Header sub content="Description" />
                  <TextArea id='descbox'/>
                </Form.Field>
              </Grid.Column>
            </Grid>
            <Button.Group>
              <Button positive floated="right" type="submit">
                Submit
              </Button>
              <Button
                onClick={this.props.history.goBack}
                floated="right"
                type="button"
              >
                Cancel
              </Button>
            </Button.Group>
          </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}
export default createEvent;
