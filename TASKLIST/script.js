let input = document.querySelector(`#input-out`);
const submitButton = document.querySelector(`#submitBtn`);
const listBox = document.querySelector(`#listBox`);


submitButton.addEventListener(`click`, () => {
    if (input.value !== undefined && input.value !== ``) {
        createListItem(); 
        input.value = ``;
    } else {
        alert(`Enter Something in Input`);
    };
    
});















function createListItem() {

    const div = document.createElement(`div`);
        div.classList.add(`listItem`);
    listBox.appendChild(div);

    const textDiv = document.createElement(`div`);
        textDiv.classList.add(`textDiv`);
        div.appendChild(textDiv);
        
    const inputText = document.createElement(`li`);
        inputText.classList.add(`list`);
        inputText.textContent = input.value ;
        textDiv.appendChild(inputText);

    const buttonsDiv = document.createElement(`div`);
        buttonsDiv.classList.add(`buttonsDiv`);
        div.appendChild(buttonsDiv);

    const checkButton = document.createElement(`button`);
        checkButton.classList.add(`checkButton`);
        checkButton.innerText = `Check`;
    buttonsDiv.appendChild(checkButton);

    checkButton.addEventListener(`click`, function () {
        inputText.classList.add(`checked`);
        textDiv.classList.add(`checked`);
    });

    const deleteButton = document.createElement(`button`);
        deleteButton.classList.add(`deleteButton`);
        deleteButton.innerText = `Delete`;
    buttonsDiv.appendChild(deleteButton);
    
    deleteButton.addEventListener(`click`, function () {
        listBox.removeChild(div);
    });

};

