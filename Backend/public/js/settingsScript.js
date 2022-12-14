const inputs = document.querySelectorAll(".user_form input");
const modalContainer = document.querySelector("#modal");
const editProfileBtn = document.querySelector("#edit_profile_btn");
const saveProfileBtn = document.querySelector("#save_profile_btn");
const backBtn = document.querySelector("#back");
const changePasswordBtn = document.querySelector("#change_password_btn");
const cancleBtn = document.querySelector("#modal_cancle_btn");

const editPhotoField = (inputs, show) => {
    inputs.forEach((e) => {
        if (e.name === "photo") {
            e.parentNode.parentNode.style.display = show ? "flex" : "none";
        }
    });
};

const editInputs = (inputs, enable) => {
    inputs.forEach((e) => {
        if (!enable) {
            e.className = "settings_input_enabled";
            e.disabled = false;
        } else {
            e.className = "settings_input_disabled";
            e.disabled = true;
        }
    });
};

editProfileBtn.addEventListener("click", () => {
    saveProfileBtn.style.display = "block";
    backBtn.style.display = "block";
    editPhotoField(inputs, true);
    editInputs(inputs, false);
});

backBtn.addEventListener("click", (e) => {
    e.preventDefault();
    editPhotoField(inputs, false);
    editInputs(inputs, true);
    saveProfileBtn.style.display = "none";
    backBtn.style.display = "none";
});

changePasswordBtn.addEventListener("click", () => {
    modalContainer.style.display = "flex";
});

cancleBtn.addEventListener("click", () => {
    modalContainer.style.display = "none";
});
