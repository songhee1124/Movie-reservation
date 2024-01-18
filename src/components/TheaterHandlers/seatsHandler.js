const toggleSeats = (selector, enable) => {
    const seatBtns = document.querySelectorAll(selector);
    seatBtns.forEach((elem) => {
      elem.classList.toggle("disabled", !enable);
    });
  };
  
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