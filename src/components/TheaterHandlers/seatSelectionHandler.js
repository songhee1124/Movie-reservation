import {
  generalHandler,
  handicapCheckboxHandler,
  handicapHandler,
  musseukboxHandler,
  numOfAdult,
  numOfYouth,
} from "./seatsHandler.js";

const calculatePrice = (target, seatBuff, discount) => {
  let price = 0;
  let clickedSeatLen = document.querySelectorAll(".clicked").length;
  if (target.classList.contains("clicked")) {
    if (numOfAdult() != seatBuff[0]) {
      price = 10000 * discount;
      seatBuff[0] = seatBuff[0] + 1;
    } else if (numOfYouth() != seatBuff[1]) {
      price = 7000 * discount;
      seatBuff[1] = seatBuff[1] + 1;
    }
  } else {
    if (clickedSeatLen < seatBuff[0]) {
      price = 10000 * discount;
      seatBuff[0] = seatBuff[0] - 1;
    } else if (clickedSeatLen >= seatBuff[0]) {
      price = 7000 * discount;
      seatBuff[1] = seatBuff[1] - 1;
    }
  }

  return price;
};

export const selectMussukboxHandler = (target, seatBuff) => {
  let price = 0;

  let numOfMoviegoers = numOfAdult() + numOfYouth();

  if (!parseInt(numOfMoviegoers % 2) == 0) {
    price = 0;
    alert(
      "선택하신 'MUSSEUKBOX' 좌석은 2인 좌석입니다. 2인 단위로 인원을 선택해주세요."
    );
  } else {
    target.classList.toggle("clicked");
    generalHandler(false); // 일반석 비활성화
    handicapHandler(false); // 장애인석 비활성화
    handicapCheckboxHandler(false); // 장애인 체크박스 비활성화
    musseukboxHandler(true); // 머쓱박스석 재선택 하기위해 좌석 선택 취소할 경우 장애인석 활성화

    price = calculatePrice(target, seatBuff, 0.8);
  }

  return price;
};
export const selectHandicapHandler = (target) => {
  let price = 5000; // 1
  const checkHandicap = document.querySelector("#checkHandicap"); // 2

  // 3
  if (!checkHandicap.checked) {
    // 3 - 1
    price = 0;
    alert("선택하신 좌석은 장애인석으로 일반고객은 예매할 수 없는 좌석입니다.");
  } else {
    // 3 - 2
    target.classList.toggle("clicked");
    handicapHandler(true);
  }

  return price;
};

export const selectGeneralHandler = (target, seatBuff) => {
  let price = 0;

  target.classList.toggle("clicked");
  musseukboxHandler(false); // 머쓱박스석 비활성화
  handicapHandler(false); // 장애인석 비활성화
  handicapCheckboxHandler(false); // 장애인 체크박스 비활성화
  generalHandler(true); // 일반석 재선택 하기위해 좌석 선택 취소할 경우 장애인석 활성화

  price = calculatePrice(target, seatBuff, 1);
  return price;
};

export const displayPrice = (target, price) => {
  // 1
  let amount = document.querySelector("#amount").innerHTML; // 2
  if (target.classList.contains("clicked")) {
    // 3 - 1
    amount = parseInt(amount) + price;
  } else {
    // 3 - 2
    amount = parseInt(amount) - price;
  }
  document.querySelector("#amount").innerHTML = amount; // 4
};
