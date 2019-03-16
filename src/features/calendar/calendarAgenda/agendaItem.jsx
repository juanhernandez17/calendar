import React, { Component } from "react";
import { Item, Button } from "semantic-ui-react";

class AgendaItem extends Component {
  render() {
    return (
      <Item.Group>
        <Item>
          <Item.Content>
            <Item.Header>Title</Item.Header>
            <Item.Meta>
              <span className="price">Date</span>
              <span className="stay">Time</span>
            </Item.Meta>
            <Button floated='right' color='red' size='tiny' icon='delete'/>
          </Item.Content>
        </Item>
      </Item.Group>
    );
  }
}

export default AgendaItem;