import React from "react";
import { ITodoListProps } from "./TodoContract";

export class TodoList extends React.Component<ITodoListProps> {
    render() {
        return (
            <ul>
                {this.props.items.map(item => (
                    <li key={item.id}>{item.text}</li>
                ))}
            </ul>
        )
    }
}