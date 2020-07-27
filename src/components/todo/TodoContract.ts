export interface ITodoItem {
    text: string;
    id: number;
}

export interface ITodoListProps {
    items: ITodoItem[]
}

export interface ITodoAppState {
    items: ITodoItem[],
    text: string
}