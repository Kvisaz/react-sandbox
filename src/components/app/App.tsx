import React, {useState} from 'react';
import logo from '../../assets/img/logo.svg';
import './App.css';
import {Snake} from '../snake/Snake';

function App() {
    const [click, setClick] = useState(0);

    function onClick() {
        console.log('onClick!');
        setClick(click + 1);
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Snake />
                <p onClick={onClick}>
                    Кликнули {click} раз!
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
