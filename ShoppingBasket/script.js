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
    let buttonId = e.target.id;
    if (buttonId === `Apple`) {
        basket.push(sellingItems[0]);
    } else if (buttonId === `Banana`) {
        basket.push(sellingItems[1]);
    } else if (buttonId === `Orange`) {
        basket.push(sellingItems[2]);      
    }
    console.table(basket);
};

function getTotal() {
    return basket.reduce((acc, curr) => {
        let exsisting = acc.find((item) => item.item === curr.item)
        if (exsisting === undefined) {
            acc.push({
                item: curr.item,
                price: curr.price,
                count: 1,
                total: curr.price,
            })
        } else {
            exsisting.count++;
            exsisting.total = exsisting.count * exsisting.price;
        }
        return acc;
    }, [])
}

Buttons.forEach((button) => button.addEventListener(`click`, (e) => {
    ADD_BUTTON(e);
    console.log(getTotal());
}));