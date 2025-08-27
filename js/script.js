
// let heartCount = 0;
// const favCountEl = document.getElementById("heart-count");

// document.querySelectorAll(".heart").forEach(heart => {
//   heart.onclick = () => {
//     favCount++;
//     favCountEl.innerText = favCount;
//   }
// });

// let heartCount = 0;
// const favCountEl = document.getElementById("heart-count");
// const hearts = document.getElementsByClassName("heart");

// for (let i = 0; i < hearts.length; i++) {
//   hearts[i].onclick = function () {
//     favCount++;
//     favCountEl.textContent = heartCount;
//   }
// }

// Love Counter Section 
let heartCount = 0;
const favCountEl = document.getElementById("heart-count");
const hearts = document.getElementsByClassName("heart");

for (let i = 0; i < hearts.length; i++) {
  hearts[i].onclick = function () {
    heartCount++;
    favCountEl.innerText = heartCount;
  }
}

// Copy Counter Section Hear 
// const copyBtn = document.querySelector(".copy-btn")
// let copyCount = 0;
// const copyNumber = document.getElementById("copy-counter");
// const copys = document.getElementsByClassName("copy-btn");


// for (let i = 0; i < copys.length; i++) {
//   copys[i].onclick = function () {
//     const textCopy = document.getElementsByClassName("copy-text").innerText
//      navigator.clipboard.writeText(textToCopy).then(() => {
//     alert(`"${textCopy}" নাম্বার কপি হয়েছে!`);
//   })
//     copyCount++;
//     copyNumber.innerText = copyCount;
//   }
// }



  let copyCount = 0;
  const copyNumber = document.getElementById("copy-counter");
  const copyButtons = document.getElementsByClassName("copy-btn");

  // প্রতিটি copy button এ click ইভেন্ট সেট করা
  for (let i = 0; i < copyButtons.length; i++) {
    copyButtons[i].onclick = function () {
      // button এর parent card থেকে copy-text খুঁজে বের করা
      const card = this.closest(".card");
      const textEl = card.querySelector(".copy-text");
      const textToCopy = textEl.innerText;

      // Clipboard এ কপি করা
      navigator.clipboard.writeText(textToCopy).then(() => {
        alert(`"${textToCopy}" নাম্বার কপি হয়েছে!`);

        // Counter বাড়ানো
        copyCount++;
        copyNumber.innerText = copyCount;
      })
    };
  }










// // 1. Copy button কে ধরে রাখা
// const copyBtn = document.querySelector(".copy-btn");

// // 2. Button এ click ইভেন্ট লাগানো
// copyBtn.onclick = function() {
//   // 3. Card এর text ধরে রাখা
//   const textToCopy = this.parentElement.querySelector(".card-text").innerText;

//   // 4. Clipboard এ copy করা
//   navigator.clipboard.writeText(textToCopy).then(() => {
//     alert(`"${textToCopy}" কপি করা হয়েছে!`);
//   }).catch(err => {
//     alert('Copy করা যায়নি!');
//     console.error(err);
//   });
// }




// Coin Section Start Hear 

let coin = coinNumber
const coinNumber = document.getElementById("coin-counter")

const buttons = document.getElementsByClassName("call-btn")

for (let btn of buttons){
  btn.onclick =function(){
    if(coin < 20){
      alert('You do not have enough Coin')
      return
    }
  }
}
