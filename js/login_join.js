const userJoinToggle = document.getElementsByClassName("bi-person-circle")[0];
const Login = document.getElementsByClassName("login-container")[0];

userJoinToggle.onclick = () => {
    Login.classList.toggle("show-login");
}
