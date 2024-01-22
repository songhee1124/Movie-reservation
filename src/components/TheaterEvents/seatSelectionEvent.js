import {
  displayPrice,
  selectGeneralHandler,
  selectHandicapHandler,
  selectMussukboxHandler,
} from "../TheaterHandlers/seatSelectionHandler.js";
import {
  generalHandler,
  handicapCheckboxHandler,
  handicapHandler,
  musseukboxHandler,
  numOfAdult,
  numOfYouth,
} from "../TheaterHandlers/seatsHandler.js";

export const seatSelectionEvent = (seatBuff, target) => {
  if (seatBuff.length <= 2) {
    seatBuff.push(0);
    seatBuff.push(0);
  }

  let tartgetList = target.classList;
  console.log(tartgetList);
  let price = 0;
  if (tartgetList.contains("handicap")) {
    price = selectHandicapHandler(target);
  } else if (tartgetList.contains("musseukbox")) {
    price = selectMussukboxHandler(target, seatBuff);
  } else {
    price = selectGeneralHandler(target, seatBuff);
  }

  const enableSeatsList = document.querySelectorAll(
    "button.seat:not(.disabled)"
  );
  enableSeatsList.forEach((elem) => elem.classList.remove("disabled"));

  let numOfMoviegoers = numOfAdult() + numOfYouth();
  let clickedSeatLen = document.querySelectorAll(".clicked").length;

  if (clickedSeatLen == numOfMoviegoers) {
    enableSeatsList.forEach((elem) => {
      if (!elem.classList.contains("clicked")) elem.classList.add("disabled");
    });
  } else if (clickedSeatLen == 0) {
    // 관람 인원에 따른 장애인 체크박스 및 장애인석 활성화/비활성화
    if (numOfMoviegoers > 3) {
      generalHandler(true);
      musseukboxHandler(true);
      handicapCheckboxHandler(false);
      handicapHandler(false);
    } else {
      handicapCheckboxHandler(true);
      handicapHandler(true);

      if (!checkHandicap.checked) {
        generalHandler(true); // 일반석 활성화
        musseukboxHandler(true); // 머쓱박스석 활성화
      }
    }
  }

  // 잔여 좌석 정보
  document.querySelector("#remainSeatCnt").innerHTML = 39 - clickedSeatLen;

  // 좌석 가격 정보
  displayPrice(target, price);
};
