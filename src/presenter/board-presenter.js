import CreationForm from '../view/creation-form';
import EditForm from '../view/edit-form';
import Sorting from '../view/sorting';
import WaypointView from '../view/waypoint';
import WaypointList from '../view/waypoint-list';
import {render} from '../render';

export default class BoardPresenter {
  #waypointListComponent = new WaypointList();
  #boardContainer = null;
  #waypointsModel = null;

  constructor({boardContainer, waypointsModel}) {
    this.#boardContainer = boardContainer;
    this.#waypointsModel = waypointsModel;
  }

  init() {
    const waypoints = [...this.#waypointsModel.arrWaypoints];
    render(new Sorting(), this.#boardContainer);
    render(this.#waypointListComponent, this.#boardContainer);
    render(new CreationForm(), this.#waypointListComponent.element);
    render(new WaypointView({oneWaypoint: waypoints[0]}), this.#waypointListComponent.element);
    render(new EditForm({oneWaypoint: waypoints[0]}), this.#waypointListComponent.element);

    for (let i = 1; i < 4; i++) {
      render(new WaypointView({oneWaypoint: waypoints[i]}), this.#waypointListComponent.element);
    }
  }
}
