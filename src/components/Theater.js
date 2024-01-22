import { numOfMoviegoersEvent } from "./TheaterEvents/moviegoersEvent.js";
import { checkHandicapEvent } from "./TheaterEvents/checkHandicapEvent.js";
import { seatSelectionEvent } from "./TheaterEvents/seatSelectionEvent.js";
import { resetTheater } from "./TheaterHandlers/initializeTheaterHandler.js";

class Theater {
  constructor() {
    this.seatBuff = [];
    this.render();
  }

  render() {
    numOfMoviegoersEvent(this.seatBuff);
    checkHandicapEvent();

    let theaterSeatEvnt = document.querySelectorAll("#theaterSeat>.seat");
    theaterSeatEvnt.forEach((elem) => {
      elem.addEventListener(
        "click",
        (e) => seatSelectionEvent(this.seatBuff, e.target)
        //사용자가 좌석을 선택하면 그게 인자로 전달됨, this.seatBuff은 해당 좌석의 정보, e.target은 클릭한 좌석
      );
    });

    let reSelectElement = document.querySelector("#reselect"); // 1
    reSelectElement.addEventListener("click", () => {
      // 2
      if (confirm("선택하신 좌석을 모두 취소하고 다시 선택하시겠습니까?")) {
        // 3
        resetTheater(this.seatBuff);
      } else {
        // 4
        return;
      }
    });
  }
}

export default Theater;
