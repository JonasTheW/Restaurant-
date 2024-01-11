const orderBox = document.querySelector(".order-box"); //The order box
const midBodyMenu = document.querySelector(".midBodyMenu"); //The mid section of the page
const closeOrderMenu = document.querySelector(".closeOrderMenu"); // The button to close the order page
const btnOrder = document.querySelector("#btnOrder"); //The order button
const backgroundDiamond = document.querySelectorAll(".background"); //The diamond shape
const invisibility = document.querySelectorAll(".invisibility");

const allFoodRecipe = document.querySelectorAll(".foodName"); //Selecting all of the food 
const allPriceRecipe = document.querySelectorAll(".foodPrice"); //Selecting all of the prices


btnOrder.addEventListener("click",() =>{
    midBodyMenu.classList.add("menu-move-right"); 
    midBodyMenu.classList.remove("menu-move-left");

    
    const ordDetails = document.querySelector(".orderDetails"); //the ul part of the li stuff
    setTimeout(function(){
        orderBox.classList.add("visibility");
        for(var i = 0; i < backgroundDiamond.length; i++){
            backgroundDiamond[i].classList.add("addFood");
        };
        //-----------------------------------------------The Wanna Kill My Self Part------------------------------------------//
        for(var i = 0; i < backgroundDiamond.length;i++){
            if(backgroundDiamond[i].classList.contains("addFood")){ //backgroundDiamond must have addFood class to be selected
                backgroundDiamond[i].addEventListener("click",(e) =>{
                    e.preventDefault();
                    const li = document.createElement("li");
                    const nameOfTheFood = document.createElement("div");
                    const price = document.createElement("div");
                    const quantity = document.createElement("input");
                    const removeOrder = document.createElement("button");
                    
                    quantity.type = "number";
                    quantity.min = "1";
                    quantity.defaultValue = "1";
                    
                    //Add the appropriate classes
                    li.classList.add("food-row");
                    price.classList.add("priceFood","ordDet");
                    quantity.classList.add("btnqty","quantity");
                    removeOrder.classList.add("btnRemove");
                    nameOfTheFood.classList.add("nameFood","ordDet");
                    
                    //Display the User Interface for the order box
                    for(var m = 0; m < invisibility.length;m++){
                        invisibility[m].classList.remove("invisibility");
                    }
                    const clickOrder = document.querySelector(".clickOrder");
                    clickOrder.classList.add("invisibility");
                    
                    //Checking the index of the clicked background diamond, thanks ChatGPT
                    const index = Array.from(backgroundDiamond).indexOf(e.currentTarget);
                    

                    //Ensuring only one menu item is selected
                    var count = 0;
                    
                    do{
                        //selected is a lock out class, it locks out users from entering it again
                        if(!backgroundDiamond[index].classList.contains("selected")){
                            //Inserting values to the respective elements
                            nameOfTheFood.textContent = allFoodRecipe[index].textContent;
                            price.textContent = allPriceRecipe[index].textContent;
                            
                    
                
                            //Append elements to document
                            li.appendChild(nameOfTheFood);
                            li.appendChild(price);
                            li.appendChild(quantity);
                            li.appendChild(removeOrder);
                            ordDetails.appendChild(li);

                            let btnConfirm = document.getElementById("confirmPayment");
                            btnConfirm.addEventListener("click",function(){
                                updateCartTotal();
                            });
                            
                            

                         } 
                        count++;
                        backgroundDiamond[index].classList.add("selected");
                    }while(count < backgroundDiamond.length);
                    
                //Removing Order Buttons
                
                btnRemove = document.getElementsByClassName("btnRemove");
                for(var j = 0; j < btnRemove.length; j++){
                    btnRemove[j].addEventListener("click", (e) =>{
                    var target = e.target; //Grabbing the current remove button the pointer is at
                    target.parentElement.remove();
                    backgroundDiamond[index].classList.remove("selected"); //Removes the selected class in case the user wants to order it again
                        
                    });
                }
            } 
        )}; 
        }
        
        
    },2000); 
    
});

closeOrderMenu.addEventListener("click",function(){
    orderBox.classList.remove("visibility");
    midBodyMenu.classList.remove("menu-move-right");
    midBodyMenu.classList.add("menu-move-left");

    for(let i = 0; i < backgroundDiamond.length;i++){
        backgroundDiamond[i].classList.remove("addFood");
    };
 
});
/*All I need is to do is get:
The first food-row's price and quantity, times those together and put it inside an array to be summed up again, the second food-row's price and so on  */
function updateCartTotal(){
    var actualPrice = [];
    var totalOfRow = []; // Result of nth food-row price and quantity
    var inputValue = [];
    const foodRow = document.querySelectorAll(".food-row");
    let totally = document.getElementById("totally");
    var priceOfFood = document.getElementsByClassName("priceFood");
    
    
    for(var i = 0; i < priceOfFood.length;i++){ //Converting all of the order row prices into a number or decimal, seems this shit is working
        actualPrice[i] = parseFloat(priceOfFood[i].textContent.replace("$",""));
        console.log(actualPrice);
    }
    for(var j = 0; j < priceOfFood.length;j++){ //Convert strings of quantity value to numbers to work with
        var quantityOfFood = orderBox.getElementsByClassName("btnqty")[j];
        inputValue[j] = quantityOfFood.value;
        var quantity = parseInt(inputValue[j])
        totalOfRow[j] = actualPrice[j] * quantity;
        console.log(totalOfRow);
    }
    const totalPrice = totalOfRow.reduce((prevValue,currValue) =>{
    return prevValue + currValue;
    },0)
    console.log(totalPrice);
    totally.textContent = "Total: $" + totalPrice;
    
    
    
}
