import React, { Component } from "react";
import { Card, Item, Button, Icon } from "semantic-ui-react";
import EventInfo from "../eventInfo";

class AgendaItem extends Component {
  render() {
    const { event, deleteEvent} = this.props;
    return (
      <Card>
        <Item>
          <Item.Content>
            <Item.Header>{event.title}</Item.Header>
            <Item.Meta>
              <Icon className="date">{new Intl.DateTimeFormat( {
                    year: "numeric",
                    month: "long",
                      day: "2-digit",
                      hour: "2-digit",
                    minute: "2-digit"
                  }).format(event.start)}</Icon>
            </Item.Meta>
          </Item.Content>
          <Button onClick={deleteEvent(event.id)} as='a' floated="right" color="red" size="tiny" icon="delete" />
          <Button floated="right" color="blue" size="tiny" icon="edit" />
                <EventInfo event={event}/>
        </Item>
      </Card>
    );
  }
}

export default AgendaItem;
