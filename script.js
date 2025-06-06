const openyaybtn = document.getElementById("yaytoggle");
const closebtn = document.getElementById("exit-button");
const yaypopup = document.getElementById("yaypopup");

const openboobtn = document.getElementById("bootoggle");
const boopopup = document.getElementById("boopopup");

openyaybtn.addEventListener("click", () => {
    MediaSourceHandle.classList.add("open");
})

openboobtn.addEventListener("click", () => {
    MediaSourceHandle.classList.add("open");
})

closebtn.addEventListener("click", () => {
    MediaSourceHandle.classList.remove("open");
})