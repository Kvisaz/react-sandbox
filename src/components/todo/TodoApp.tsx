import React, { FormEvent } from "react";
import { TodoList } from "./TodoList";
import { ITodoAppState } from "./TodoContract";

export class TodoApp extends React.Component<any, ITodoAppState> {
    state: { items: Array<any>; text: string }
    constructor(props: object) {
        super(props);
        this.state = {
            items: [],
            text: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    render() {
        return (
            <div>
                <h2>Список дел</h2>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="new-todo">Что нужно сделать?</label>
                    <input
                        id="new-todo"
                        type="text"
                        value={this.state.text}
                        onChange={this.handleChange}
                    />
                </form>
                <TodoList items = {this.state.items} />
            </div>
        )
    }

    handleChange(e: FormEvent<HTMLInputElement>) {
        const target: HTMLInputElement = e.target as HTMLInputElement;
        this.setState({
            text: target.value
        })

    }

    handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        if (this.state.text.length === 0) {
            return;
        }

        const newItem = {
            text: this.state.text,
            id: Date.now()
        }

        this.setState(state => ({
            items: state.items.concat(newItem),
            text: ''
        }))
    };

}