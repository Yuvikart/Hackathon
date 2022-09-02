"use strict";
// var http = require("http");
// const { currentOwner } = require("../Login/Login.js");

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const movement = document.querySelector("movements__row");
const AuthName = document.querySelector("NameAuth");
const AuthDetails = document.getElementById("authority");
const Movement2 = document.getElementById("move2");
const Flex_Side = document.getElementById("Flex_Side");
const rows = document.getElementById("rows");
// () => {
//   console.log("currentOwner", currentOwner);
// };

//-------------------- Search transaction -----------------------------//

function SearchTransaction(e) {
  e.preventDefault();
  const SearchResponse = async function (e) {
    e.preventDefault();
    try {
      const res = await fetch("******************");
      const data = await res.json();

      console.log(res, data);
      if (!res.ok) {
        throw new Error(`${data.message}  ${res.status}`);
      }
      let { ReqList } = data.data;
      ReqList = {
        NofAuth: ReqList.NofAuth,
        domain: ReqList.domain,
        status: ReqList.status,
      };
      console.log(ReqList);

      const markup = `
        <div id="move2" class="movements__row">
          <div class="movements__value NameAuth">${ReqList.NofAuth} (${ReqList.domain})</div>
          <div class="movements__type movements__type--deposit">${ReqList.status}</div>
        </div>`;
      movement.innerHTML = "";
      movement.insertAdjacentHTML("beforeend", markup);
    } catch (err) {
      alert(err);
    }
  };
}

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  // console.log("currentOwner", currentOwner);
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

movement.addEventListener("Click", function (e) {
  console.log("e>>>", e);
  console.log("<<<Clicked>>");
  const authoritValue = AuthName.value;

  const authResponse = async function (e) {
    e.preventDefault();
    try {
      const res = await fetch("******************");
      const data = await res.json();

      console.log(res, data);
      if (!res.ok) {
        throw new Error(`${data.message}  ${res.status}`);
      }

      let { AuthDetails } = data.data;
      AuthDetails = {
        authority: AuthDetails.authority,
        domain: AuthDetails.domain,
        RqID: AuthDetails.RqID,
        addedOn: AuthDetails.addedOn,
        addedBy: AuthDetails.addedBy,
        authorizedOn: AuthDetails.authorizedOn,
        authorizedBy: AuthDetails.authorizedBy,
        status: AuthDetails.status,
      };
      console.log(AuthDetails);

      const markup = `
        <div class="flex_Details">
           <input type="text" id="authority" class="details"   name="authority" placeholder="${AuthDetails.authority}" disabled>
           <input type="text" id="domain" class="details" name="domain" placeholder="${AuthDetails.domain}" disabled>
        <div class = "Flex_button">
             <button class="A_btn">Authorize</button> 
             <button class="R_btn">Reject</button> 
             <button class="RE_btn">Remove</button> 
        </div>
      </div>
      <div style="margin-left:25% ;" class="flex_Details">
         <label  id ="RqID"for="RqID"><span style="color: rgb(116, 112, 112);">ID: </span>   <b>${AuthDetails.RqID}</b></label>
         <label  id ="addedOn" for="addedOn"><span style="color: rgb(116, 112, 112);">Added On:</span> <b>${AuthDetails.addedOn} </b></label>
         <label  id ="addedBy" for="addedBy"><span style="color: rgb(116, 112, 112);">Added By:</span> <b>${AuthDetails.addedBy}</b></label>
         <label  id ="authorizedOn" for="authorizedOn"><span style="color: rgb(116, 112, 112);">Authorized On:</span><b>${AuthDetails.authorizedOn}</b></label>
         <label  id ="authorizedBy" for="authorizedBy"><span style="color: rgb(116, 112, 112);">${AuthDetails.authorizedBy} </span><b>Anil<b> </label>
        <div  id ="status"class="movements__type_Flex movements__type_Flex--deposit">${AuthDetails.status}</div>
      </div>`;
      Flex_Side.innerHTML = "";
      Flex_Side.insertAdjacentHTML("beforeend", markup);
    } catch (err) {
      alert(err);
    }
  };

  const RowResponse = async function (e) {
    e.preventDefault();
    try {
      const Rowres = await fetch("******************");
      const Rowdata = await res.json();

      console.log(Rowres, Rowdata);
      if (!Rowres.ok) {
        throw new Error(`${Rowdata.message}  ${Rowdata.status}`);
      }
      let { Auth_Row_Details } = Rowdata.data;
      Auth_Row_Details = {
        Rowdomain: Auth_Row_Details.Rowdomain,
        RowaddedOn: Auth_Row_Details.RowaddedOn,
        RowaddedBy: Auth_Row_Details.RowaddedBy,
        RowauthorizedOn: Auth_Row_Details.RowauthorizedOn,
        RowauthorizedBy: Auth_Row_Details.RowauthorizedBy,
      };
      console.log(Auth_Row_Details);

      const markup = `
         <span id="rowDomain" style="color: rgb(116, 112, 112);">${Auth_Row_Details.Rowdomain}</span>
        <div  class="flex_Details">
         <label id="rowAddedOn" for="addedOn"><span style="color: rgb(116, 112, 112);">Added On:</span><b>${Auth_Row_Details.RowaddedOn}</b></label>
         <label id="rowAddedBy" for="addedBy"><span style="color: rgb(116, 112, 112);">Added By:</span><b>${Auth_Row_Details.RowaddedBy}</b></label>
         <label id="rowAuthorizedOn" for="authorizedOn"><span style="color: rgb(116, 112, 112);"> Authorized On:</span><b>${Auth_Row_Details.RowauthorizedOn}</b></label>
         <label id="rowAuthorizedBy" for="authorizedBy"><span style="color: rgb(116, 112, 112);"> Authorized By:</span><b>${Auth_Row_Details.RowauthorizedBy}</b></label>
       </div>
       <div  class="flex_Details">
        <button  class="btn btn--show-check "  onclick=""><i class="fa fa-check"></i></button>
        <button  class="btn btn--show-trash "  onclick=""><i class="fa fa-trash"></i></button>
        <button  class="btn btn--show-close "  onclick=""><i class="fa fa-close"></i></button>
       </div>`;
      rows.innerHTML = "";
      rows.insertAdjacentHTML("beforeend", markup);
    } catch (err) {
      alert(err);
    }
  };
});
