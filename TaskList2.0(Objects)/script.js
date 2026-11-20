const taskInput = document.querySelector(`#taskInput`);
const addTask = document.querySelector(`#addTask`);
const taskList = document.querySelector(`#taskList`);

const tasks = [
    { id: 1, text: "Study JavaScript", completed: false },
    { id: 2, text: "Practice DOM", completed: true }
];

function newTask(text) {
    tasks.push({
        id: tasks.length + 1,
        text: text,
        completed: false,
    })
};

newTask(`Cook Food`);
newTask(`Eat Out`);
console.log(tasks);