const toggleSeats = (selector, enable) => {
  const seatBtns = document.querySelectorAll(selector);
  seatBtns.forEach((elem) => {
    elem.classList.toggle("disabled", !enable);
  });
};
//선택자를 사용해 페이지에서 원하는 요소를 선택, 사용할수 있음.
//좌석을 활성화(true)할지, 비활성화(false)할지 결정
//비활성화되면 disabled 추가
//사용자가 선택한 인원수에 맞게 좌석이 선택되면 선택된 좌석들은 clicked가 생기고, 그 외 나머지는 disabled가 됨

export const numOfAdult = () => {
  let toggleList = document.querySelectorAll(".toggle");
  let numOfAdult = parseInt(toggleList[0].innerHTML);
  return numOfAdult;
};

export const numOfYouth = () => {
  let toggleList = document.querySelectorAll(".toggle");
  let numOfYouth = parseInt(toggleList[1].innerHTML);
  return numOfYouth;
};

export const handicapCheckboxHandler = (enable) => {
  const checkHandicap = document.getElementById("checkHandicap");
  checkHandicap.disabled = !enable;
};

export const handicapHandler = (enable) => {
  toggleSeats("button.seat.handicap", enable);
};

export const musseukboxHandler = (enable) => {
  toggleSeats("button.seat.musseukbox", enable);
};

export const generalHandler = (enable) => {
  toggleSeats("button.seat:not(.handicap):not(.musseukbox)", enable);
};
