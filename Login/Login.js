"use strict";
//----User details-----//
const Accounts = [
  {
    userName: "Anil",
    password: "tcs#123",
  },
  {
    userName: "Ram",
    password: "tcs#123",
  },
  {
    userName: "Sourav",
    password: "tcs#123",
  },
  {
    userName: "Dinesh",
    password: "tcs#123",
  },
  {
    userName: "Durai",
    password: "tcs#123",
  },
  {
    userName: "Yuvaraj",
    password: "tcs#123",
  },
];

//---------------Elements---------------------------//

const btnLogin = document.querySelector(".login__btn");
const Error = document.querySelector(".Error");
const LoginUsername = document.querySelector(".login__input_user");
const LoginPassword = document.querySelector(".login__input_password");
const InvalidUser = document.getElementById("user");
const InvalidPassword = document.getElementById("password");
const Invalid = document.getElementById("heading");

//---------------LoginFunction--------------------//

function Validation() {
  var x = document.getElementById("password").value;
  var y = document.getElementById("user").value;
  if (!x || !y) Error.classList.remove("hidden");
  else Error.classList.add("hidden");
}

let currentOwner;
btnLogin.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("<<<<Button pressed>>>");
  //Invalid.classList.remove("Error");
  currentOwner = Accounts.find((acc) => acc.userName === LoginUsername.value);
  console.log("currentOwner>>", currentOwner);
  if (currentOwner?.password === LoginPassword.value) {
    console.log("Welcome", `${currentOwner.userName}`);
    window.location.href = "../Authorities/Authorities.html";
    InvalidUser.style.borderBottomColor = "";
    InvalidPassword.style.borderBottomColor = "";
  } else {
    InvalidUser.style.borderBottomColor = "red";
    InvalidPassword.style.borderBottomColor = "red";
    LoginUsername.value = LoginPassword.value = "";
    Validation();
  }
});
