import React, { Component } from "react";
import AgendaItem from "./agendaItem";

class calendarAgenda extends Component {
  render() {
      return (
        <div>
        <AgendaItem />
        <AgendaItem />
        <AgendaItem />
        <AgendaItem />
        </div>
    );
  }
}

export default calendarAgenda;
