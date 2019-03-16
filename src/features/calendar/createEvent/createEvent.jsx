import React, { Component } from "react";
import {
  Grid,
  Modal,
  Header,
  Form,
  Button,
  Input,
  TextArea
} from "semantic-ui-react";
import "./createEvent.css";

class CreateEvent extends Component {
  render() {
    return (
      <Modal size="large" trigger={<Button positive> Create Event</Button>}>
        <Grid>
          <Grid.Column width={15}>
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
                  <TextArea id="descbox" />
                </Form.Field>
              </Grid.Column>
            </Grid>
            <Grid>
              <Button.Group>
                <Button positive type="submit" content="Submit" />
                <Button
                  content="Cancel"
                  style={{ outline: "1px solid gray" }}
                />
                <Button
                  size="tiny"
                  icon="settings"
                  style={{ outline: "1px solid gray" }}
                />
              </Button.Group>
            </Grid>
          </Grid.Column>
        </Grid>
      </Modal>
    );
  }
}
export default CreateEvent;
