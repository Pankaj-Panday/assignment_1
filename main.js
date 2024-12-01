// initial selction of box
const selectedInput = document.querySelector("input[type='radio']:checked");
const boxToSelect = document.querySelector(
  `.select-box[data-radio="${selectedInput.id}"]`
);
boxToSelect.classList.add("selected");

const selectBoxes = document.querySelectorAll(".select-box");
const choiceContainers = document.querySelectorAll(".choice-container");

selectBoxes.forEach((box) => {
  box.addEventListener("click", () => {
    // remove selected class from each box
    selectBoxes.forEach((box) => box.classList.remove("selected"));
    choiceContainers.forEach((container) => container.classList.remove("show"));

    // add selected class to required box
    box.classList.add("selected");
    box.querySelector(".choice-container").classList.add("show");

    // check the radio button
    const radioBtnId = box.getAttribute("data-radio");
    const radioBtn = document.getElementById(radioBtnId);
    radioBtn.checked = true;
  });
});
