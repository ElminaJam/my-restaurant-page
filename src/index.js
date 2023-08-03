function openMenu(evt, menuName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("menu");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.firstElementChild.className += " active";
}
document.getElementById("myLink").click();

function send() {
  let nameInput = document.querySelector(".navat-input");

  if (nameInput.value) {
    alert(
      `${nameInput.value}, thanks for the message. We look forward to welcoming you!😍`
    );
  } else {
    alert("Please, fill out the form.🙂");
  }
}
let sendMessageButton = document.querySelector("#navat-button");
sendMessageButton.addEventListener("click", send);
console.log(sendMessageButton);
