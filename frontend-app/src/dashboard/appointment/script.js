const appointmentBtn = document.querySelector("#appointment_btn");
const cancleBtn = document.querySelector("#modal_cancle_btn");
const modalContainer = document.querySelector("#modal");

appointmentBtn.addEventListener("click", () => {
    modalContainer.style.display = "flex";
});

cancleBtn.addEventListener("click", () => {
    modalContainer.style.display = "hidden";
});
