const setDefaultSelection = () => {
    ["adultBtn", "youthBtn"].forEach((id) => {
        document.querySelector(`#${id}`).children[0].classList.add("toggle");
    });
}