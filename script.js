const todoInput = document.getElementById("input");
const todoList = document.getElementById("ul");
const warning = document.createElement('p');

function todoBtn() {
    if ( todoInput.value.trim() === "" ) {
        warning.textContent = "Input Required!";
        document.querySelector('body').appendChild(warning);
    }else {
        const LI = document.createElement('li');
        LI.textContent  = todoInput.value;
        warning.style.display = "none";

        const doneBtn = document.createElement("button");
        doneBtn.textContent = "Done";
        doneBtn.addEventListener('click', () => {
            LI.style.textDecoration = "line-through";
            doneBtn.style.textDecoration = "unset";
            delBtn.style.textDecoration = "unset";
            undoBtn.style.display = "block";
            doneBtn.style.display = "none";
        });

        const undoBtn = document.createElement("button");
        undoBtn.textContent = "Undo";
        undoBtn.style.display = "none";
        undoBtn.addEventListener('click', () => {
            LI.style.textDecoration = "unset";
            doneBtn.style.textDecoration = "unset";
            delBtn.style.textDecoration = "unset";
            undoBtn.style.display = "none";
            doneBtn.style.display = "block";
        });

        const delBtn = document.createElement("span");
        delBtn.textContent = "X";
        delBtn.addEventListener('click', () => {
            LI.remove();
        });

        LI.appendChild(undoBtn);
        LI.appendChild(doneBtn);
        LI.appendChild(delBtn);
        todoList.appendChild(LI);
        todoInput.value = "";
    }
};

document.querySelector('.clear').addEventListener('click', () => {
    todoList.innerHTML = "";
});