function createTodoListNode(title, desc) {
    // const todo = document.createElement('div');
    // todo.className = 'todo blue-grey lighten-5 blue-grey-text text-darken-4';
    const todo = $('<div></div>').addClass('todo blue-grey lighten-5 blue-grey-text text-darken-4');

    const div = $('<div></div>').addClass('todo-text-content');
    const label = $('<label></label>').addClass('done-checkbox');
    const input = $('<input>').addClass('filled-in checkbox-orange').prop("type", "checkbox").appendTo(label);
    const span = $('<span></span>').appendTo(label);

    // label.append(input);
    // label.append(span);
    div.append(label);

    const titleElem = createPElement(title, 'title');
    div.append(titleElem);

    const a = $('<a></a>').addClass('delete waves-effect btn-flat');
    const iDelete = $('<i></i>').addClass('material-icons').text('delete').appendTo(a);
    div.append(a);

    const descElem = createPElement(desc, 'description');

    todo.append(div);
    todo.append(descElem);

    return todo;
}

function createPElement(text, className) {
    return $('<p></p>').addClass(className).text(text);
}

function createHtmlList() {
    const container = $('.todo-container');
    return $('<div></div>').addClass('todo-list').prop('id', 'todo-list').appendTo(container);
}

function createAddBtn() {
    const a = $('<a></a>').addClass('btn-floating btn-large waves-effect waves-light blue-grey lighten-1').prop('id','add');
    const i = $('<i></i>').addClass('material-icons').text('add').appendTo(a);

    const container = $('.todo-container');
    container.append(a);

    return a;
}

class Todo {
    constructor(obj) {
        this.node = obj;
        this.title = $('.title', obj);
        this.desc = $('.description', obj);
        this.checkbox = $('input[type=checkbox]', obj);
        this.checkboxEvent(this.checkbox);
        this.deleteBtn = $('.delete', obj);
    }

    checkboxEvent(checkbox) {
        checkbox.click(() => {
            // if (e.target.checked) {
            //     this.title.addClass('strikethrough');
            //     this.desc.addClass('strikethrough');
            // }
            // else if (!e.target.checked) {
            //     this.title.removeClass('strikethrough');
            //     this.desc.removeClass('strikethrough');
            // }
            this.title.toggleClass('strikethrough');
            this.desc.toggleClass('strikethrough');
        })
    }
}

class TodoList {
    constructor() {
        this.list = createHtmlList();
        this.children = [];
        this.addBtn = createAddBtn();
        this.addBtnEvent();
    }

    appendTodo(todo) {
        this.list.append(todo.node);
        this.deleteBtnEvent(todo);
        this.children.push(todo);
    }

    addBtnEvent() {
        this.addBtn.click(() => {
            const title = prompt('Please enter your task title');
            const desc = prompt('Please enter your task description');

            if (title.length !== 0 || desc.length !== 0) {
                const todo = new Todo(createTodoListNode(title, desc));
                this.appendTodo(todo);
                return todo;
            } else
                return null;
        });
    }

    deleteBtnEvent(todo) {
        todo.deleteBtn.click(() => this.removeTodo(todo));
    }

    removeTodo(todo) {
        this.list.find(todo.node).remove();
        const i = this.children.indexOf(todo);
        this.children.splice(i, 1);
    }
}

//initialize first task
const todo = new Todo(createTodoListNode('task', 'I am a very simple card. I am good at containing small bits ' +
    'of information. I am convenient because I require little markup to use effectively.'));

const todolist = new TodoList();
todolist.appendTodo(todo);
