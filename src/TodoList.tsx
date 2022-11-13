import React from 'react';
import {TaskType} from './App';
// typescript, сначала пишем типы потом начинаем писать код, тогда ts следит чтобы не возникло ошибок!
// 1.variable
// 2.param of function
// 3.return of func
// props - всегда объект ( в нем пары ключ значения)

type TodolistPropsType = {
    title: string
    tasks: Array<TaskType>  // 1 задаем массив
}

const TodoList = (props: TodolistPropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                <li><input type="checkbox" checked={props.tasks[0].isDone}/>
                    <span>{props.tasks[0].title}</span>
                </li>

                <li><input type="checkbox" checked={props.tasks[1].isDone}/>
                    <span>{props.tasks[1].title}</span>
                </li>

                <li><input type="checkbox" checked={props.tasks[2].isDone}/>
                    <span>{props.tasks[2].title}</span>
                </li>
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    );
};

export default TodoList;