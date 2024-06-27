// Left Side Bar Loder Function
const leftSideBarLoader = () => {
  fetch("../menus/leftSideBar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("leftSideBarContainer").innerHTML = data;
    })
    .catch((error) => {
      console.error("Failed to fetch Left Side Bar", error);
    });
};
document.addEventListener("DOMContentLoaded", leftSideBarLoader);
//Top Menu Bar Loader Function
const topMenuBarLoader = () => {
  fetch("../menus/topMenuBar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("topMenuBarContainer").innerHTML = data;
    })
    .catch((error) => console.error("Failed to fetch Top Menu Bar", error));
};
document.addEventListener("DOMContentLoaded", topMenuBarLoader);
//Footer Loader Function
const footerLoader = () => {
  fetch("../menus/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footerContainer").innerHTML = data;
    })
    .catch((error) => console.error("Failed to fetch Footer.", error));
};
document.addEventListener("DOMContentLoaded", footerLoader);
