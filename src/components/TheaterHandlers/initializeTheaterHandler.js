const resetNumOfMoviegoers = () => {
    const toggleList = document.querySelectorAll(".toggle");
    toggleList.forEach((elem) => elem.classList.remove("toggle"));
    document.querySelector("#adultBtn").children[0].classList.add("toggle");
    document.querySelector("#youthBtn").children[0].classList.add("toggle");
  };
  
  const resetHandicapCheckbox = () => {
    const checkHandicap = document.querySelector("#checkHandicap");
    checkHandicap.checked = false;
    checkHandicap.disabled = true;
  };
  
  const resetTheaterSeats = () => {
    const theaterSeatList = document.querySelectorAll("#theaterSeat > .seat");
    theaterSeatList.forEach((elem) => {
      if (elem.classList.contains("clicked")) elem.classList.remove("clicked");
      if (!elem.classList.contains("disabled")) elem.classList.add("disabled");
    });
  };
  
  const resetSeatBuffAndPriceInfo = (seatBuff) => {
    if (seatBuff) {
      seatBuff.length = 0;
    }
    document.querySelector("#remainSeatCnt").innerHTML = 39;
    document.querySelector("#amount").innerHTML = 0;
  };
  
  export const resetTheater = (seatBuff) => {
    resetNumOfMoviegoers();
    resetHandicapCheckbox();
    resetTheaterSeats();
    resetSeatBuffAndPriceInfo(seatBuff);
  };