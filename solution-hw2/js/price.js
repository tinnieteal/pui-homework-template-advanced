// Data
// glazing option array
const glazingOptions = [
    {name: "Keep original", value: 0},
    {name: "Sugar milk", value: 0},
    {name: "Vanilla milk", value: 0.5},
    {name: "Double chocolate", value: 1.5},
]

// pack size options
const packSizeOptions = [1, 3, 6, 12];

// price options
const priceOptions = [2.49, 3.49, 2.99, 3.49, 3.99, 3.99];

// Roll prototype
const rollPrototype = [
    {
        type: "Original",
        basePrice: 2.49,
        packSize: 1,
    },
    {
        type: "Apple",
        basePrice: 3.49,
        packSize: 1,
    },
    {
        type: "Raisin",
        basePrice: 2.99,
        packSize: 1,
    },
    {
        type: "Walnut",
        basePrice: 3.49,
        packSize: 1,
    },
    {
        type: "Double-chocolate",
        basePrice: 3.99,
        packSize: 1,
    },
    {
        type: "Strawberry",
        basePrice: 3.99,
        packSize: 1,
    }
]

// Class constructors
// create a Roll constructor
function Roll(type, basePrice, glazing, glazingPrice, packSize) {
    this.type = type;
    this.basePrice = basePrice;
    this.glazing = glazing;
    this.glazingPrice = glazingPrice;
    this.packSize = packSize;
}

// HTML Elements
// generate glazing selection dropdowns
let allGlazingDropdownSelectors = document.querySelectorAll(".glazing-selector");
console.log(allGlazingDropdownSelectors)
for (let i = 0; i < allGlazingDropdownSelectors.length; i++) {
    let optionsHtml = `<select id="glazing-dropdown" class="dropdown", name="glazing" onchange="updateGlazing(this, ${i})"></select>`
    allGlazingDropdownSelectors[i].innerHTML = optionsHtml;
}

// select all 6 glazing dropdowns 
let allGlazingDropdowns = document.querySelectorAll("#glazing-dropdown");
// add glazing options to the dropdown
for (let i = 0; i < allGlazingDropdowns.length; i++) {
    // ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
    let optionsHtml = glazingOptions.map(option => 
        `<option value="${option.value}" >${option.name}</option>`).join("")
    allGlazingDropdowns[i].innerHTML = optionsHtml;
}

// add pack size options to the radio
let allPackingSizeSelector = document.querySelectorAll(".radio-selector");
for (let i = 0; i < allPackingSizeSelector.length; i++) {
    let optionsHtml = packSizeOptions.map(option => 
        `<input type="radio" name="pack-size-${i}" id="pack-size-${i}-${option}" value="${option}" onclick="updatePackSize(this, ${i})"></input><label for="pack-size-${i}-${option}">${option}</label>`).join("")
    allPackingSizeSelector[i].innerHTML = optionsHtml;
}

// add price to the rolls
let allPriceSelector = document.querySelectorAll(".rollprice");
for (let i = 0; i < allPriceSelector.length; i++) {
    allPriceSelector[i].innerHTML = `<p class="price-text" id="price-${i}">$ ${priceOptions[i]}</h3>`;
}

// add add-to-cart button
let allAddToCartSelector = document.querySelectorAll(".add-to-cart");
for (let i = 0; i < allAddToCartSelector.length; i++) {
    allAddToCartSelector[i].innerHTML = `<button class="button-add-to-cart link" onclick="addToCart(${i})">Add to Cart</button>`;
}


// create a shopping cart that matches the current UI
let tmpcart = []
// create a shopping cart for rolls that have been added to cart
let cart = []

// initialize UI for roll i
function initUI(i){
    // update glazing
    let glazingDropdown = document.querySelector(`#glazing-dropdown`);
    glazingDropdown.selectedIndex = 0; // set to default
    // update pack size
    let packSizeRadio = document.querySelector(`#pack-size-${i}-1`);
    packSizeRadio.checked = true;
    // update price
    updatePrice(tmpcart[i], i);
}

// create 6 rolls
for (let i = 0; i < rollPrototype.length; i++) {
    let roll = new Roll(rollPrototype[i].type, rollPrototype[i].basePrice, glazingOptions[0].name, glazingOptions[0].value, 1);
    tmpcart.push(roll);
    initUI(i)
}

// initialize the final price in shopping cart
let currPrice = 0;
let finalPrice = 0;
let totalItem = 0;


// functions 
// display confirmation card
function displayConfirmationCard(roll, currPrice){
    // the price of the item that has just been added to cart
    let confirmationCard = document.querySelector(".tooltip-container");
    confirmationCard.innerHTML = 
    `<span class="tooltip-text" id="bottom">
    <p id="tooltip-title"> Added to cart: </p>
    <p id="tooltip-item"> ${roll.type} cinammon roll</p>
    <p> ${roll.glazing} glazing</p>
    <p> Pack of ${roll.packSize}</p>
    <p> Price: $${currPrice}</p>
    </span>`

    confirmationCard.style.display = "block";
    
    // citation: chatGPT | prompt: How can I have the tooltip disappear after 3 seconds?
    // automatically hide the tooltip after 3 seconds
    setTimeout(() => {
    //     // fade out the tooltip
        confirmationCard.style.opacity = "0";
    //     // after fading out, hide the tooltip
        setTimeout(() => {
            confirmationCard.style.display = "none";
            // reset the opacity for the next use
            confirmationCard.style.opacity = "1";
        }, 300);
    }, 3000);  
}   

// add a roll to the cart, calculate final price & total number of items
function addToCart(i) {
    let roll = tmpcart[i];
    cart.push(roll);
    currPrice = parseFloat(calcPrice(roll));

    // add confirmation card
    displayConfirmationCard(roll, currPrice);

    finalPrice += currPrice;
    totalItem += 1;

    // add the specific roll with the default ui to back tempcart
    tmpcart[i] = new Roll(rollPrototype[i].type, rollPrototype[i].basePrice, glazingOptions[0].name, glazingOptions[0].value, 1);
    initUI(i)

    // add final price + total number of items underneath the shopping cart
    updateTotalPrice(finalPrice);
    updateTotalItem(totalItem);
}

// updatet total price of items in the shopping cart
function updateTotalPrice(finalPrice){
    let finalprice = document.querySelector("#final-price");
    finalprice.innerHTML = `Total: $ ${finalPrice.toFixed(2)}`;
}

// updatet total number of items in the shopping cart
function updateTotalItem(totalItem){
    let totalitem = document.querySelector("#total-item");
    totalitem.innerHTML = `${totalItem} items`;
}

// update the glazing of a roll
function updateGlazing(element, i) {
    let roll = tmpcart[i];
    roll.glazing = element.options[element.selectedIndex].text 
    roll.glazingPrice = parseFloat(element.options[element.selectedIndex].value);
    updatePrice(roll, i);
}

// update the pack size of a roll
function updatePackSize(element, i) {
    let roll = tmpcart[i];
    console.log(roll);
    roll.packSize = element.value;
    updatePrice(roll, i);
    console.log(roll);
}

// calculate the price of a roll
function calcPrice(roll){
    const price = roll.basePrice + roll.glazingPrice;
    const totalPrice = price * roll.packSize;
    return totalPrice.toFixed(2); // keep to 2 decimal places
}

// update the price of a roll
function updatePrice(roll, i){
    // find the price html object
    let element = document.querySelector(`#price-${i}`);
    // compute the price
    const newPrice = calcPrice(roll);
    // set the price html object to the new price
    element.innerHTML = `$ ${newPrice}`;
}
