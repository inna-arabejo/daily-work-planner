// Global variables
var timeBlock = document.getElementById(".timeblock");
var textEvent = document.getElementById(".text-event");
var btnIdx = 0;
var workHr = getTextEvent();

// Add momentjs time in header
$("#current").text(moment().format('MMMM Do YYYY, h:mm a'));


$('.container-fluid').on('click', '.save-btn', function () {
  getTextEvent();
  btnIdx = $(this).index('.save-btn')

  var textContent = $(this).siblings('.text-event').val();
  workHr[btnIdx] = textContent;

  pushTextEvent()
})

































// createTimeBlock();

// function createTimeBlock() {

  
//   // color our time blocks and start interval to re-color every minute
//   colorTimeBlocks();
//   setInterval(colorTimeBlocks, 60000);
  
//   // update time blocks with data in local storage
//   $(".timeblock").each(function() {
//     var blockId = $(this).attr("id");

//     // load saved data from local storage
//     // $("#" + blockId + "textarea").text(localStorage.getItem(moment().format("MMMM Do YYYY") + blockId));
//   });
  
//   // attach our handler for the save buttons
//   $(".save-btn").on("click", handleSave);
// }

// function colorTimeBlocks() {
//   // for each time block
//   $(".timeblock").each(function() {
//     var blockHour = parseInt($(this).attr("id").replace("hour-", ""));
//     var currentHour = parseInt(moment().format("h"));
//     // remove any class we may have added before
//     $(this).removeClass("past present future");
//     // color block based on past, present, future class
//     if (blockHour < currentHour) {
//       $(this).addClass("past");
//     } else if (blockHour > currentHour) {
//       $(this).addClass("future");
//     } else {
//       $(this).addClass("present");
//     }

//   });
// }

// function handleSave(event) {
 
//   // get the id of our parent
//   var hourId = $(this).parent().attr("id");
//   // save data in textarea in local storage
//   // localStorage.setItem(moment().format("MMMM Do YYYY") + hourId, $("#" + hourId + " textarea").val());
  
// }
















// let timeblocks = [
//   "9 am",
//   "10 am",
//   "11 am",
//   "12 pm",
//   "1 pm",
//   "2 pm",
//   "3 pm",
//   "4 pm",
//   "5 pm",
//   "6 pm",
//   "7 pm",
//   "8 pm",
//   "9 pm"
// ]

// // Generate all the time blocks from the tomeblock array and display them
// createTimeBlocks();
// function createTimeBlocks() {
//   timeBlock.innerHTML = "";

//   for (var i = 0; i < timeblocks.length; i++) {
//       var rowHour = timeblocks[i];

//       var row = document.createElement("div");
//       row.classList.add("row");
//       timeBlock.appendChild(row);

//       var hour = document.createElement("div");
//       hour.innerHTML = rowHour;
//       hour.classList.add("hour");
//       row.appendChild(hour);

//       var textarea = document.createElement("textarea");
//       textarea.placeholder = "Type in event and click save.";
//       textarea.setAttribute("class", "description");
//       textarea.setAttribute("id", i);
//       row.appendChild(textarea);

//       var saveBtn = document.createElement("button");
//       saveBtn.textContent = "";
//       saveBtn.classList.add("saveBtn");
//       saveBtn.setAttribute("value", i);
//       row.appendChild(saveBtn);
//   }
// }

// // The save button function that allows the user to save their notes.
// $(document).on('click','.save-btn',function(){
//   var saveBtnVal = $(this).val();
//   var desc = document.getElementById(saveBtnVal).value;
//   localStorage.setItem(saveBtnVal, desc);
// });

// // The clear history function clears all of the text areas and restores them to their defualts.
// function clearHistory() {
//   var confirmClearHistory = confirm("Are you sure you want to permanently erase all of your notes?")
//   var Descriptions = document.getElementsByClassName('description')

//   if (confirmClearHistory === true) {
//       for (var i = 0; i < Descriptions.length; i++) {
//           localStorage.removeItem(i);
//       }
//       Descriptions.innerText = "";
//       createTimeBlocks();
//       currentTimeBlocks();
//   }
// }

// // The get stroed notes function that gets the stored notes and loads them when the page is loaded.
// function getTextEvent() {
//   for (var i = 0; i < timeblocks.length; i++) {
//       var getText = localStorage.getItem(i);
//       var textArea = document.getElementById(i);
//       textArea.innerText = getText;
//   }
// }
// getTextEvent();

// // The update time block function that updates the color of the blocks.
// function currentTimeBlocks() {
//   var getCurrentHr = moment().format('h a');
//   var currentHr = moment(getCurrentHr, 'h a');
//   var textEvent = document.getElementsByClassName('.text-event')
  
//   for (var i = 0; i < textEvent.length; i++) {
//       var timeBlock = moment(timeblocks[i], 'h a');
//       if (currentHr.isSame(timeBlock) === true) {
//         textEvent[i].classList.add('present')
//         textEvent[i].classList.remove('future')
//         textEvent[i].classList.remove('past')
//       } else if (currentHr.isBefore(timeBlock) === true) {
//         textEvent[i].classList.add('future')
//         textEvent[i].classList.remove('past')
//         textEvent[i].classList.remove('present')
//       } else if (currentHr.isBefore(timeBlock) === false) {
//         textEvent[i].classList.add('past')
//         textEvent[i].classList.remove('future')
//         textEvent[i].classList.remove('present')
//       }
//   }
// } 
// currentTimeBlocks()
// setInterval(currentTimeBlocks, 10000);