function setDefaultSelection () {
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
