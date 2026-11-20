const taskInput = document.querySelector(`#taskInput`);
const addTask = document.querySelector(`#addTask`);
const taskList = document.querySelector(`#taskList`);

const tasks = [

];

function newTask(text) {
    tasks.push({
        id: tasks.length + 1,
        text: text,
        completed: false,
    })
};

function inputNormaliser() {
    return taskInput.value.trim();
};

function remove() {
    console.log(`removing`);
};

function createDelBtn(i) {
    const delBtn = document.createElement(`button`);
        delBtn.innerText = `Delete`;
        delBtn.setAttribute(`id`, `${tasks[i].id}`);
    delBtn.addEventListener(`click`, remove)
    return delBtn;
}

function renderTasks() {
    taskList.innerText = ``;
    for (let i = 0; i < tasks.length; i++){
        const li = document.createElement(`li`);
        li.setAttribute(`id`, `li${tasks[i].id}`)
        li.innerText = `${tasks[i].text}`;
        taskList.appendChild(li);
        li.appendChild(createDelBtn(i));
    };
};

addTask.addEventListener(`click`, () => {
    inputNormaliser();
    if (inputNormaliser() !== ``) {
        newTask(inputNormaliser());
        console.table(tasks);
    };
    taskInput.value = ``;
    renderTasks();
});



