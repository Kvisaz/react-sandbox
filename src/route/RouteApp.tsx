import React from 'react';

import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import App from '../components/app/App';
import { TodoApp } from '../components/todo/TodoApp';

export function RouterApp() {
    return (
        <BrowserRouter>
            <>
                <nav>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to="/app-snake">Snake Canvas в React</Link></li>
                        <li><Link to='/app-todo'>To Do List пример с React.js</Link></li>
                    </ul>
                </nav>

                <Switch>
                    <Route exact path='/'>Привет</Route>
                    <Route path="/app-snake"><App /></Route>
                    <Route path='/app-todo'><TodoApp /></Route>
                    <Route path='/'>404 - ничего не найдено</Route>
                </Switch>

            </>
        </BrowserRouter>
    )
}