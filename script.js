const popup = document.querySelectorAll(".bookMenu"); //Line 1 to 3 is selecting elements
const form = document.querySelector(".form-property"); //Line 4 to 5 is assigning all the buttons to btnOpenPop1 and btnOpenPop2
const close = document.querySelector(".closeRight"); 
const btnOpenPop1 = popup[0];
const btnOpenPop2 = popup[1];

btnOpenPop1.addEventListener("click",function() {// This function adds open-book from form
    form.classList.add("open-book");
});

btnOpenPop2.addEventListener("click",function() {// This function adds open-book from form
    form.classList.add("open-book");

});

close.addEventListener("click",function() { // This function removes open-book from form
    form.classList.remove("open-book");
});

