import React, { Component } from "react";
import { observer, inject } from "mobx-react";
import ResInput from "./ResInput";
import Reservation from "./Reservation";

class Restaurant extends Component {
  render() {
    const { RestaurantStore, GeneralStore } = this.props;

    return (
      <div>
        <span>You have {RestaurantStore.openTables} open tables</span>
        <div>You have {RestaurantStore.restPopulation} people in the resturant</div>
        <div>You have {RestaurantStore.completedTables} completed tables in the resturant</div>
        <ResInput />
        <button id="addRes" onClick={() => RestaurantStore.addRes(GeneralStore.name, GeneralStore.numPeople)}>
          Add Reservation
        </button>
        <div className="reservations">
          {RestaurantStore.reservations.map((r) => (
            <Reservation key={r.id} res={r} />
          ))}
        </div>
      </div>
    );
  }
}

export default inject("GeneralStore", "RestaurantStore")(observer(Restaurant));
