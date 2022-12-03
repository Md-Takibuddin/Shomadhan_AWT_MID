const modalContainer = document.querySelector("#modal");
const askQusBtn = document.querySelector("#ask_qus_btn");
const cancleBtn = document.querySelector("#close_qus_modal");

askQusBtn.addEventListener("click", () => {
    modalContainer.style.display = "flex";
});

cancleBtn.addEventListener("click", () => {
    modalContainer.style.display = "";
    modalContainer.style.display = "hidden";
});
