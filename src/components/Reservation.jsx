import React, { Component } from "react";
import { observer, inject } from "mobx-react";

class Reservation extends Component {
  render() {
    const { res, RestaurantStore } = this.props;

    return (
      <div className={res.completed ? "conditional" : ""}>
        {`name: ${res.name} guests: ${res.numPeople} `}
        <button onClick={() => RestaurantStore.completeRes(res.id)}>Complete Reservation</button>
        <button onClick={() => RestaurantStore.seatRes(res.id)}>Seat Reservation</button>
      </div>
    );
  }
}

export default inject("RestaurantStore")(observer(Reservation));
