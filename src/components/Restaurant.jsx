import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import ResInput from "./ResInput";

class Restaurant extends Component {
  render() {
    return (
      <div>
        <span>You have {this.props.RestaurantStore.openTables} open tables</span>
        <div>You have {this.props.RestaurantStore.restPopulation} people in the resturant</div>
        <div>You have {this.props.RestaurantStore.completedTables} completed tables in the resturant</div>
        <ResInput />
        <button id="addRes">Add Reservation</button>
        {/* Make the Add Reservation button work */}
        <div className="reservations">{/* Map reservation data to Reservation components here */}</div>
      </div>
    );
  }
}

export default inject("GeneralStore", "RestaurantStore")(observer(Restaurant));
