import React, {useEffect, useRef} from 'react';
import {ISnakeGame, ISnakeProps} from './SnakeContract';
import {SnakeGame} from './SnakeGame';

const defaultProps: ISnakeProps = {
    width: 400,
    height: 400,
    colorBg: 'black',
    colorSnake: 'lime',
    colorApple: 'red'
}

export function Snake(props: Partial<ISnakeProps>) {
    const cProps: ISnakeProps = {
        ...defaultProps,
        ...props
    };

    const canvasRef: React.MutableRefObject<HTMLCanvasElement | null> = useRef(null);

    const gameRef: React.MutableRefObject<ISnakeGame | null> = useRef(null);

    useEffect(() => {
        console.log('Snake useEffect');


        if (gameRef.current === null) {
            console.log('Snake create');
            // @ts-ignore
            const ctx: CanvasRenderingContext2D = canvasRef.current.getContext('2d');
            ctx.fillStyle = cProps.colorBg;

            const game = new SnakeGame();
            game.play(ctx, cProps);
            gameRef.current = game;
        }

        return () => {
            gameRef.current?.stop();
        }
    });


    return (
        <canvas width="400" height="400" ref={canvasRef}/>
    )
}
