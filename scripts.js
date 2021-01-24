class Todo {
    constructor(title, desc) {
        this.title = title;
        this.desc = desc;
    }

    createTodoListNode() {
        const todo = document.createElement('div');
        todo.className = 'todo blue-grey lighten-5 blue-grey-text text-darken-4';

        const div = document.createElement('div');
        div.className = 'todo-text-content';

        const label = document.createElement('label');
        label.className = 'done-checkbox';
        const input = document.createElement('input');
        input.className = 'filled-in checkbox-orange';
        input.type = 'checkbox';
        label.appendChild(input);
        const span = document.createElement('span');
        label.appendChild(span);
        div.appendChild(label);

        const titleElem = document.createElement('p');
        titleElem.textContent = this.title;
        titleElem.className = 'title';
        div.appendChild(titleElem);

        const descElem = document.createElement('p');
        descElem.textContent = this.desc;
        descElem.className = 'description';

        todo.appendChild(div);
        todo.appendChild(descElem);

        return todo;
    }

}

function addTodo() {
    const title = prompt('Please enter your task title');
    const desc = prompt('Please enter your task description');

    if (title.length !== 0 || desc.length !== 0) {
        const todo = (new Todo(title, desc)).createTodoListNode()
        const list = document.querySelector('.todo-list');
        list.appendChild(todo);
    } else
        alert('ty debil');
}

const addTodoButton = document.getElementById('add');
addTodoButton.addEventListener('click', addTodo);
