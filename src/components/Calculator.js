import React from 'react';
import '../css/calculator.css';
import isNumber from '../snippets/isNumber';
import Big from 'big.js';

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
  constructor(props) {
    super(props);
    this.state = {
      input: 0,
      total: 0,
      operator: NaN,
    }
  }
    renderButton(i) {
        return ( 
          <CalcButton 
            value={i}
            onClick={() => this.handleClick(i)} 
          />
        );
    }

    operate() {
      let left = Big(this.state.total);
      let right = Big(this.state.input);
      
      switch(this.state.operator) {
        case '+':
          this.setState({
            total: left.plus(right).toString(),
            input: 0,
            operator: NaN,
          });
          break;
        case '-':
          this.setState({
            total: left.minus(right).toString(),
            input: 0,
            operator: NaN,
          });
          break;
        case 'x':
          this.setState({
            total: left.times(right).toString(),
            input: 0,
            operator: NaN,
          });
          break;
        case '÷':
          this.setState({
            total: left.div(right).toString(),
            input: 0,
            operator: NaN,
          });
          break;
        default:
          this.setState({
            total: this.state.input,
            input: 0,
            operator: NaN,
          })
          break;
      }
    }

    modify(i) {
      let left = Big(this.state.total);
      let right = Big(this.state.input);
      switch(i)
      {
        case '√':
          this.setState({
            input: right.sqrt().toString(),
          });
          break;
        case 'x²':
          this.setState({
            input: right.times(right).toString(),
          });
          break;
        case '1/x':
          let one = Big(1);
          this.setState({
            input: one.div(right).toString(),
          });
          break;
        case '%':
          this.setState({
            input: left.times(right.div(100)).toString(),
          });
          break;
        default:
          break;
      }
    }

    handleClick(i) {
      switch (true) {
        case isNumber(i):
          this.setState({
            input: Number.isInteger(this.state.input) ? 
              this.state.input * 10 + i : this.state.input + i,
          });
          break;
        case /^[-+÷x=]$/.test(i): //operators
          this.operate();
          this.setState({
            operator: i === '=' ? NaN : i,
          });
          break;
        case /^[√%]$/.test(i) || i === 'x²' || i === '1/x': //modifiers
          this.modify(i);
          break;
        case i === '.':
          if (Number.isInteger(this.state.input))
            this.setState({
              input: this.state.input + i,
            });
          break;
        case i === '±':
          this.setState({
            input: this.state.input * -1,
          });
          break;
        case i === '←':
          this.setState({
            input: this.state.input.toString().length > 1 ? 
            this.state.input.toString().slice(0,-1) : 0,
            });
          break;
        case i === 'C':
          this.setState({
            input: 0,
            total: 0,
            operator: NaN,
          });
          break;
        case i === 'CE':
          this.setState({
            input: 0,
          });
          break;
        default:
          console.log("No operation");
          break;
      }
    }

    render() {
        const status = this.state.input;
        const total = this.state.total;
        return (
          <div>
            <div className="answer text-light">Total: {total}</div>
            <div className="status text-light">{status}</div>
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