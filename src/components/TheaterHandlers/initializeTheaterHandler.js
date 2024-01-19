//토글 클래스를 가진 모든 요소에서 토글을 제거함
//그리고 첫번째 자식요소에 토글을 추가하여 0으로 초기화 되게함
const resetNumOfMoviegoers = () => {
  const toggleList = document.querySelectorAll(".toggle");
  toggleList.forEach((elem) => elem.classList.remove("toggle"));
  document.querySelector("#adultBtn").children[0].classList.add("toggle");
  document.querySelector("#youthBtn").children[0].classList.add("toggle");
};

//체크된걸 체크되지 않은 상태로 바꾸고, 체크박스 비활성화.
const resetHandicapCheckbox = () => {
  const checkHandicap = document.querySelector("#checkHandicap");
  checkHandicap.checked = false;
  checkHandicap.disabled = true;
};

//좌석 상태 초기화
//clicked이 있으면 제거하고, disabled이 없으면 추가
const resetTheaterSeats = () => {
  const theaterSeatList = document.querySelectorAll("#theaterSeat > .seat");
  theaterSeatList.forEach((elem) => {
    if (elem.classList.contains("clicked")) elem.classList.remove("clicked");
    if (!elem.classList.contains("disabled")) elem.classList.add("disabled");
  });
};

//선택된 좌석의 정보를 담는 배열과 좌석 수, 총 가격 등의 정보를 초기화
const resetSeatBuffAndPriceInfo = (seatBuff) => {
  if (seatBuff) {
    seatBuff.length = 0;
  }
  document.querySelector("#remainSeatCnt").innerHTML = 39;
  document.querySelector("#amount").innerHTML = 0;
};

//위에 4개의 함수를 호출하여 모두 초기화 하는 함수
//좌석 초기화 버튼을 클릭했을때 호출됨.
export const resetTheater = (seatBuff) => {
  resetNumOfMoviegoers();
  resetHandicapCheckbox();
  resetTheaterSeats();
  resetSeatBuffAndPriceInfo(seatBuff);
};
