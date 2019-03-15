import React, { Component } from "react";
import { Grid, Segment, Header, Form, Button, Input } from "semantic-ui-react";

class createEvent extends Component {
    render() {
      return (
        <Grid>

          <Grid.Column width={15}>
            <Segment>
            <Grid.Row>
            <h1 align='center'> Create a New Event</h1>
          </Grid.Row>
              <Form.Field>
              <Header sub content='Title'/>
                <Input focus></Input>
              </Form.Field>
              <Form.Field>
              <Header sub content='Start Date'/>
                <Input type='date'></Input>
              </Form.Field>
              <Form.Field>
              <Header sub content='End Date'/>
                <Input type='date'></Input>
              </Form.Field>
                <Button
                  positive
                  type="submit"
                >
                  Submit
              </Button>
                <Button onClick={this.props.history.goBack} type="button">
                  Cancel
              </Button>
            </Segment>
          </Grid.Column>
        </Grid>
      );
}
}
export default createEvent;