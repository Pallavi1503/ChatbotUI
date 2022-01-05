function menu() {
  document.getElementById("menubar").innerHTML = `
            <a style="font-size:20px;">Login</a>`;
}

const popup = document.querySelector(".popup");
const chatBtn = document.querySelector(".botIcon");

//   chat button toggler

chatBtn.addEventListener("click", () => {
  popup.classList.toggle("show");
});
