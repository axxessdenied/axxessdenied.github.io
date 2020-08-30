import React from 'react';
import '../css/calculator.css';

class CalcButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
        };
    }

    render() {
        return (
            <button 
              className="calc-button" 
              onClick={() => this.props.onClick()}
            >
              {this.props.value}
            </button>
        );
    }
}


class Calculator extends React.Component {
    renderButton(i) {
        return ( 
          <CalcButton 
            value={i}
            onClick={() => this.handleClick(i)} 
          />
        );
    }

    handleClick(i) {

    }

    render() {
        const status = 'Next player: X';
    
        return (
          <div>
            <div className="status">{status}</div>
            <div className="board-row">
              {this.renderButton('%')}
              {this.renderButton('CE')}
              {this.renderButton('C')}
              {this.renderButton('←')}
            </div>
            <div className="board-row">
              {this.renderButton('1/x')}
              {this.renderButton('x²')}
              {this.renderButton('√')}
              {this.renderButton('÷')}
            </div>
            <div className="board-row">
              {this.renderButton(7)}
              {this.renderButton(8)}
              {this.renderButton(9)}
              {this.renderButton('x')}
            </div>
            <div className="board-row">
              {this.renderButton(4)}
              {this.renderButton(5)}
              {this.renderButton(6)}
              {this.renderButton('-')}
            </div>
            <div className="board-row">
              {this.renderButton(1)}
              {this.renderButton(2)}
              {this.renderButton(3)}
              {this.renderButton('+')}
            </div>
            <div className="board-row">
              {this.renderButton('±')}
              {this.renderButton(0)}
              {this.renderButton('.')}
              {this.renderButton('=')}
            </div>
          </div>
        );
      }
}

export default Calculator;