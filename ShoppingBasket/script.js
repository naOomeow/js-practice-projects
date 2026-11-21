const basketContent = document.querySelector(`#basket`);
const addApple = document.querySelector(`#Apple`);
const addBanana = document.querySelector(`#Banana`);
const addOrange = document.querySelector(`#Orange`);
const clearBtn = document.querySelector(`#clear`);

let Buttons = [addApple, addBanana, addOrange];

const sellingItems = [
    { item: `Apple`, price: 2 },
    { item: `Banana`, price: 3 },
    { item: `Orange`, price: 4 },
    
];

const basket = [

];

function ADD_BUTTON(e) {
    console.log(`clicked` + ` ` + e.target.id);
};

Buttons.forEach((button) => button.addEventListener(`click`, ADD_BUTTON));