import React, { Component } from "react";
import AgendaItem from "./agendaItem";

class calendarAgenda extends Component {
    render() {
      const {events, deleteEvent} = this.props
    return (
        <div>
         {events.map(event => (
          <AgendaItem
            key={event.id}
                 event={event}
                 deleteEvent={deleteEvent}
          />
        ))}
      </div>
    );
  }
}

export default calendarAgenda;
