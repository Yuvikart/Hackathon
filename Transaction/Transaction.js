"use strict";

const modal = document.querySelector(".modal");

const reply = document.querySelector(".Reply");

const forward = document.querySelector(".forward");

const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const btnsOpenReply = document.querySelectorAll(".btn--show-reply");
const btnCloseReply = document.querySelector(".btn--close-reply");

const btnsOpenForward = document.querySelectorAll(".btn--show-forward");
const btnCloseForward = document.querySelector(".btn--close-forward");
const movements = document.querySelector("movements");
const Movements_row = document.querySelector("movements__row");
const reqID = document.getElementById("reqID").value;

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
      let { TransList } = data.data;
      TransList = {
        RqID: TransList.RqID,
        subject: TransList.subject,
        status: TransList.status,
      };
      console.log(TransList);

      const markup = `
        <div class="movements__row">
          <label id="reqID" class="movements__value" for="ID">${TransList.RqID} / ${TransList.subject}</label>
           <div  id="reqStatus" class="movements__type movements__type--Completed">${TransList.status}</div>
        </div>`;
      movements.innerHTML = "";
      movements.insertAdjacentHTML("beforeend", markup);
    } catch (err) {
      alert(err);
    }
  };
}

//----------------- Tansaction Details--------------------------//

// Movements_row.addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log("e>>>", e);
//   console.log("<<<Clicked>>");

//   const authResponse = async function (e) {
//     e.preventDefault();
//     try {
//       const res = await fetch("******************");
//       const data = await res.json();

//       console.log(res, data);
//       if (!res.ok) {
//         throw new Error(`${data.message}  ${res.status}`);
//       }
//       let { AuthDetails } = data.data;
//       AuthDetails = {
//         RqID: AuthDetails.RqID,
//         subject: AuthDetails.subject,
//         Mgs: AuthDetails.Mgs,
//         addedOn: AuthDetails.addedOn,
//         addedBy: AuthDetails.addedBy,
//       };
//       console.log(AuthDetails);

//       const markup = `
//         <div  class="flex_Details">
//          <label class="ReqID" for="ReqID" ><span style="color: rgb(116, 112, 112);"><b>${AuthDetails.RqID}</b></span></label>
//          </div>
//          <div class="movements__row">
//           <div  class="movements__value">
//           <label for="ID">Sub: ${AuthDetails.subject}</label>
//            <input  class="message"  name="message" type="text" placeholder="${AuthDetails.mgs}"  disabled/>
//          </div>
//           <label class="" for="ID">Sent By:</br>${AuthDetails.addedOn}</label>
//           <label class="" for="ID">Sent On:</br>${AuthDetails.addedBy}</label>
//           <button  class="btn btn--show-reply"  onclick=""><i class="fa fa-reply"></i></button>
//           <button  class="btn btn--show-forward"  onclick=""><i class="fa fa-mail-forward"></i></button>`;
//       Flex_Side.innerHTML = "";
//       Flex_Side.insertAdjacentHTML("beforeend", markup);
//     } catch (err) {
//       alert(err);
//     }
//   };
// });
//------------------------------------Mail----------------------------//

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
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

// reply

const openReply = function (e) {
  e.preventDefault();
  reply.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeReply = function () {
  reply.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenReply.forEach((btn) => btn.addEventListener("click", openReply));
btnCloseReply.addEventListener("click", closeReply);
overlay.addEventListener("click", closeReply);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !reply.classList.contains("hidden")) {
    closeReply();
  }
});

const openForward = function (e) {
  e.preventDefault();
  forward.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeForward = function () {
  forward.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenForward.forEach((btn) => btn.addEventListener("click", openForward));
btnCloseForward.addEventListener("click", closeForward);
overlay.addEventListener("click", closeForward);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !forward.classList.contains("hidden")) {
    closeReply();
  }
});
