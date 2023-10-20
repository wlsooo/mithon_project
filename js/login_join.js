const navToggleI = nav_toggle.getElementsByTagName("i")[0];
const navListUl = document.getElementsByClassName("nav-login")[0];
nav_toggle.onclick = () => {
    // 햄버거 메뉴 클릭 -> 햄버거 메뉴 i "bi bi-list" <-> X "bi bi-x-lg"
    navToggleI.classList.toggle("bi-list");
    navToggleI.classList.toggle("bi-bi-person-circle");
    // 햄버거 메뉴 클릭 -> .nav-list에 .show-menu 보여주기 <-> 안보여주기
    navListUl.classList.toggle("show-menu");
}