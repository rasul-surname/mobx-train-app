import {makeAutoObservable} from "mobx";

class Todo {
    todos = [
        {id: 1, title: "Купить хлеб", completed: false},
        {id: 2, title: "Купить масло", completed: false},
        {id: 3, title: "Купить сметану", completed: false},
    ];

    constructor() {
        makeAutoObservable(this);
    }

    addTodo(todo) {
        this.todos.push(todo);
    }

    removeTodo(id) {
        this.todos = this.todos.filter(elem => elem.id !== id);
    }

    completeTodo(id) {
        this.todos = this.todos.map(elem => elem.id === id ? {...elem, completed: !elem.completed} : elem);
    }
}

export default new Todo();