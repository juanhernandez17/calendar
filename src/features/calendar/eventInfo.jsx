import React, { Component } from "react";
import { Button, Modal, Segment, Grid, Header } from "semantic-ui-react";

class EventInfo extends Component {
  render() {
    const { event } = this.props;
    return (
      <Modal
        centered={false}
        trigger={
          <Button floated="right" color="teal" size="tiny" icon="info" />
        }
      >
        <Segment>
          <Header textAlign="center" content={event.title} />
          <Grid columns="two">
            <Grid.Row>
              <Grid.Column>
                <Header textAlign="center" content="Start" />
                <span className="date">
                  {new Intl.DateTimeFormat({
                    year: "numeric",
                    month: "long",
                    day: "2-digit",
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "numeric",
                    hour12: true
                  }).format(event.start)}
                </span>
              </Grid.Column>
              <Grid.Column>
                <Header textAlign="center" content="End" />
                <span className="date">
                  {new Intl.DateTimeFormat({
                    year: "numeric",
                    month: "long",
                    day: "2-digit",
                    hour: "numeric",
                    minute: "numeric",
                    second: "numeric",
                    hour12: true,
                    timeZone: "America/Los_Angeles"
                  }).format(event.end)}
                </span>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Header content="Attending" />
        </Segment>
      </Modal>
    );
  }
}

export default EventInfo;
