const contactsButton = document.getElementById("contacts");
const notificationBlock = document.getElementById("notification");
const closeContactsButton = document.getElementById("closeNotification");
const gifLoader = document.getElementById("someGif");
const bodyElement = document.getElementsByTagName("body")[0];
contactsButton.addEventListener("click", () => {
  bodyElement.style.opacity = "0.3";
  gifLoader.style.display = "block";
  setTimeout(() => {
    notificationBlock.style.display = "flex";
    gifLoader.style.display = "none";
    bodyElement.style.opacity = "1";
  }, 2000);
});
closeContactsButton.addEventListener("click", () => {
  notificationBlock.style.display = "none";
});
