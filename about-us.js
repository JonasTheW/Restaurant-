const popupAbout = document.querySelectorAll(".bookMenu"); //Line 1 to 3 is selecting elements
const formAbout = document.querySelector(".form-property"); //Line 4 to 5 is assigning all the buttons to btnOpenPop1 and btnOpenPop2
const closeAbout = document.querySelector(".closeRight"); 
const btnPopOpen1 = popupAbout[0];
const btnPopOpen2 = popupAbout[1];

btnPopOpen1.addEventListener("click",function() {// This function adds open-book from form
    formAbout.classList.add("open-book");
});

btnPopOpen2.addEventListener("click",function() {// This function adds open-book from form
    formAbout.classList.add("open-book");

});

closeAbout.addEventListener("click",function() { // This function removes open-book from form
    formAbout.classList.remove("open-book");
});