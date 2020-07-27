export interface ISnakeProps {
    width: number;
    height: number;
    colorBg: string;
    colorSnake: string;
    colorApple: string;
}

export interface ISnakeGame {
    play(ctx: CanvasRenderingContext2D, props: ISnakeProps): void;

    stop(): void;
}
