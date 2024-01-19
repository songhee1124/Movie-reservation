import { numOfMoviegoersEvent } from "./TheaterEvents/moviegoersEvent.js";
import { checkHandicapEvent } from "./TheaterEvents/checkHandicapEvent.js";

class Theater {
  constructor() {
    this.seatBuff = [];
    this.render();
  }

  render() {
    numOfMoviegoersEvent(this.seatBuff);
    checkHandicapEvent();
  }
}

export default Theater;
