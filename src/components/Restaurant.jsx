import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import ResInput from "./ResInput";

class Restaurant extends Component {
  render() {
    return (
      <div>
        <span>You have {this.props.RestaurantStore.openTables} open tables</span>
        <div>You have {this.props.RestaurantStore.restPopulation} people in the resturant</div>
        {/* Add in # of completed tables with id "completedTables*/}
        <ResInput />
        <button id="addRes">Add Reservation</button>
        {/* Make the Add Reservation button work */}
        <div className="reservations">{/* Map reservation data to Reservation components here */}</div>
      </div>
    );
  }
}

export default inject("GeneralStore", "RestaurantStore")(observer(Restaurant));
