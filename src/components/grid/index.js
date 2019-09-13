import React, {Component} from 'react';
import './index.css'
import TicTacToe from "../../services/TicTacToe";

class Grid extends Component {
    ticTacToe;
    constructor(props) {
        super(props);
        this.ticTacToe = new TicTacToe();
        this.state = {
            grid: this.ticTacToe.grid,
            currentPlayer: this.ticTacToe.currentPlayer,
            gameOver: false
        };
    }

    createButtons() {
        let buttons = [];
        for (let i = 0; i < 9; i++) {
            buttons.push(
                <button
                    key={i}
                    className="grid-child"
                    onClick={()=> this.play(i)}
                >
                    {this.state.grid[i]}
                </button>
            )
        }
        return buttons
    }

    play(i) {
        this.ticTacToe.play(i);
        this.setState({
            grid: this.ticTacToe.grid,
            currentPlayer : this.ticTacToe.currentPlayer,
            gameOver: this.ticTacToe.gameOver
        });
    }

    render() {
        return (
            <div>
                {!this.state.gameOver &&  <h2>Current Player : {this.state.currentPlayer}</h2>}
                {this.state.gameOver && <h2>Game Over</h2>}
                <div className="grid">
                    {this.createButtons()}
                </div>
            </div>
        );
    }


}

export default Grid;
