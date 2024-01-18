import { resetTheater } from "../TheaterHandlers/initializeTheaterHandler.js";

export const checkHandicapEvent = () => { 
  const handicapCheckbox = document.querySelector("#checkHandicap");
  const listOfSeats = document.querySelectorAll("button.seat:not(.handicap)");
	
  const disableSeats = () => { 
    listOfSeats.forEach((elem) => elem.classList.add("disabled"));
  };

  const enableSeats = () => { 
    listOfSeats.forEach((elem) => elem.classList.remove("disabled"));
  };

  const resetSeats = () => {  
    if (confirm("선택하신 좌석을 모두 취소하고 다시 선택하시겠습니까?")) {
      resetTheater();
    } else {
      handicapCheckbox.checked = true;
    }
  };

  const handleCheckboxClick = (event) => { 
    const clickedSeats = document.querySelectorAll(".clicked");

    if (event.target.checked) { 
      disableSeats();
    } else {
      clickedSeats.length === 0 ? enableSeats() : resetSeats();
    }
  };

  handicapCheckbox.disabled = true; 
  handicapCheckbox.addEventListener("click", handleCheckboxClick); // 6
}