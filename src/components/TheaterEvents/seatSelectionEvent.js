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
  //길이가 2보다 작을경우에만 0으로 초기화하고, 그 외의 경우에는 아예 조건에 해당하지 않게 해놓음.

  let tartgetList = target.classList;
  console.log(tartgetList);
  let price = 0;
  //최종적으로 계산될 가격이 들어감
  if (tartgetList.contains("handicap")) {
    price = selectHandicapHandler(target);
  } else if (tartgetList.contains("musseukbox")) {
    price = selectMussukboxHandler(target, seatBuff);
  } else {
    price = selectGeneralHandler(target, seatBuff);
  }
  //타겟이 어떤걸 포함하고있냐에 따라 해당함수로 이동, 가격이 달라짐

  const enableSeatsList = document.querySelectorAll(
    "button.seat:not(.disabled)"
  );
  enableSeatsList.forEach((elem) => elem.classList.remove("disabled"));
  //초기에 "disabled" 클래스가 없어도, 이후에 프로그램 실행 도중에 해당 요소들에 "disabled" 클래스가 추가될 수 있기 때문
  //이렇게 하면 enableSeatsList에는 여전히 "disabled" 클래스를 가지지 않은 좌석 요소만이 남아 있게 됨

  let numOfMoviegoers = numOfAdult() + numOfYouth();
  //총 관람객 수
  let clickedSeatLen = document.querySelectorAll(".clicked").length;
  //사용자가 선택한 좌석의 수

  //관람객 수와 사용자가 선택한 좌석의 수가 같다면 clicked가 포함되지 않은거에는 disabled를 추가.
  if (clickedSeatLen == numOfMoviegoers) {
    enableSeatsList.forEach((elem) => {
      if (!elem.classList.contains("clicked")) elem.classList.add("disabled");
    });
  }

  //아직 좌석을 선택하지 않은 경우
  //관람 인원에 따른 장애인 체크박스 및 장애인석 활성화/비활성화
  else if (clickedSeatLen == 0) {
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
