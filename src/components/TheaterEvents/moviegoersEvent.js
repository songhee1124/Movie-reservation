import { resetTheater } from "../TheaterHandlers/initializeTheaterHandler.js";
import {
  generalHandler,
  handicapCheckboxHandler,
  handicapHandler,
  musseukboxHandler,
  numOfAdult,
  numOfYouth,
} from "../TheaterHandlers/seatsHandler.js";


function setDefaultSelection () {
    //버튼을 눌렀을때 토글클래스를 넣기 위함
    const buttons = ["adultBtn", "youthBtn"];
    for(let i=0; i<buttons.length; i++){
        const id = buttons[i];
        const selectId = document.querySelector(`#${id}`);
        selectId.children[0].classList.add("toggle");
    }

    // forEach를 사용하는 함수, 배열을 돌면서 id에 값을 담아주는 형식임
    // buttons.forEach(function(id) {
    //     const selectId = document.querySelector(`#${id}`);
    //     if (selectId && selectId.children.length > 0) {
    //         selectId.children[0].classList.add("toggle");
    //     }
    // }

    //화살표 함수를 쓸 경우 이런식으로 사용 가능,  세가지 모두 다 같은 기능을 함  
    // ["adultBtn", "youthBtn"].forEach((id) => { // 1
    //     document.querySelector(`#${id}`).children[0].classList.add("toggle"); // 2
    // });
}

//selector,event,eventHandler가 어떤게 들어올지 모르니 그거에 대해 이벤트를 달아주고, 
//그에 맞는 이벤트 함수가 실행되게끔 만들어놓은 함수임. 
function addEventListenersToElements (selector, event, eventHandler){
    const elements = document.querySelectorAll(selector);
    elements.forEach((element) =>{
        element.addEventListener(event,eventHandler);
    })
}

//장애인좌석의 경우 4인부터는 사용 불가능, 따라서 경고문구가 뜨고 선택한 토글이 초기화 되는거?
const alertAndToggleClass = (alertMessage, savedToggleData, eventTarget) => {
    alert(alertMessage);
    savedToggleData.classList.add("toggle");
    eventTarget.classList.remove("toggle");
  };
  
  const checkSeatType = (numOfMoviegoers, savedToggleData, eventTarget) => {
    let seatType;
    //이게 뭔디 밑에서 foreach문을 돌리는거지??
    let seatBtnClassname =
      document.getElementsByClassName("clicked")[0].classList[1];
      //왜 이렇게 설정했는지 이해안감
  
    if (seatBtnClassname == "clicked")
      seatType = document.querySelectorAll(
        "button.seat:not(.handicap):not(.musseukbox)"
        //seat 클래스를 가지고 있으며, handicap과 musseukbox를 가지고 있지 않은 모든 버튼을 선택한다.
      );
    else seatType = document.querySelectorAll("button.seat." + seatBtnClassname);
        //현재 선택된 좌석 버튼과 동일한 클래스를 가진 모든 좌석 버튼이 선택

    //머쓱좌석을 클릭했을때 변수 선언
    const clickedMusseukSeats = document.querySelectorAll(
      "button.seat.musseukbox.clicked"
    );
  
    if (checkHandicap.checked && numOfMoviegoers > 3) {
      alertAndToggleClass(
        "머쓱관의 장애인 관람석은 3석으로, 3인 이하로 선택해주세요.",
        savedToggleData,
        eventTarget
      );
    }
    //머쓱 좌석을 선택하고 인원수가 홀수일 경우 해당 경고가 뜨는 함수로 넘어가고 선택한 토글은 제거됨.
    else if (clickedMusseukSeats.length > 0 && numOfMoviegoers % 2 !== 0) {
      alertAndToggleClass(
        "선택하신 'MUSSEUKBOX' 좌석은 2인 좌석입니다. 2인 단위로 인원을 선택해주세요.",
        savedToggleData,
        eventTarget
      );
    }

    else {
      seatType.forEach((elem) => {
        if (!elem.classList.contains("clicked")) {
          elem.classList.remove("disabled");
        }
      });
    }
    //즉 클릭된건 파란색으로 변할거고, 클릭이 없는건 disabled를 제거해 해당좌석을 클릭가능한 상태로 변경한것
    //클릭을 했을때 상태가 변경되야 하는데 계속 disabled이 있다면 상태를 변화시킬수 없으니깐 제거하는것.

  };
  
  const toggleSeatHandlers = (state) => {
    generalHandler(state);
    musseukboxHandler(state);
    handicapCheckboxHandler(state);
    handicapHandler(state);
  };



export const numOfMoviegoersEvent = (seatBuff) => {
    setDefaultSelection ();
    addEventListenersToElements (".btn.--general, .btn.--youth", "click", (e) =>
        numOfMoviegoersBtnHandle(e,seatBuff)
    );
}

const numOfMoviegoersBtnHandle = (event, seatBuff) => {
    let savedToggleData;
  
    if (!event.target.classList.contains("toggle")) {
      event.target.classList.add("toggle");
  
      document.querySelectorAll(".toggle").forEach((toggle) => {
        if (
          event.target.classList[1] == toggle.classList[1] &&
          event.target.innerHTML != toggle.innerHTML
        )
          toggle.classList.remove("toggle");
  
        if (!toggle.classList.contains("toggle")) {
          savedToggleData = toggle;
        }
      });
    }
  
    let clickedSeatLen = document.querySelectorAll(".clicked").length;
    let numOfMoviegoers = numOfAdult() + numOfYouth();
    let checkHandicap = document.querySelector("#checkHandicap");
  
    if (clickedSeatLen === 0) {
      if (numOfMoviegoers === 0) {
        toggleSeatHandlers(false);
      } else {
        toggleSeatHandlers(true);
  
        if (!checkHandicap.checked) {
          if (numOfMoviegoers > 3) {
            handicapCheckboxHandler(false);
            handicapHandler(false);
          }
        } else {
          generalHandler(false);
          musseukboxHandler(false);
  
          checkSeatType(numOfMoviegoers, savedToggleData, event.target);
        }
      }
    } else {
      const enableSeatsList = document.querySelectorAll(
        "button.seat:not(.disabled)"
      );
  
      if (numOfMoviegoers > clickedSeatLen) {
        checkSeatType(numOfMoviegoers, savedToggleData, event.target);
      } else if (numOfMoviegoers == clickedSeatLen) {
        enableSeatsList.forEach((elem) => {
          if (!elem.classList.contains("clicked")) {
            elem.classList.add("disabled");
          }
        });
  
        checkSeatType(numOfMoviegoers, savedToggleData, event.target);
      } else {
        alert("선택하신 좌석을 모두 취소하고 다시 선택하시겠습니까?");
        resetTheater(seatBuff);
      }
    }
};
  






