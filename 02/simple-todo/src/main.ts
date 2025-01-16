import { Metadata } from "./Metadata";
import {TodoList} from "./TodoList";

const todoList = new TodoList<Metadata>();

todoList.note('Code aufräumen', {assignee: '@sberg'});
todoList.note('UI ergänzen', {assignee: '@sberg'});

const improveErrorHandlingID = todoList.note(
    'Felerbehandlung verbessern',
    {assignee: '@sberg'}
);

todoList.edit(improveErrorHandlingID,"Fehlerbehandlung verbessern");

todoList.tickOff(improveErrorHandlingID);

console.log(todoList.getOpenTodos());