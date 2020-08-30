import React from 'react';

class CalcButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null,
        };
    }

    render() {
        return (
            <button onClick={() => this.setState({value: 'X'})}>{this.state.value}</button>
        );
    }
}


class Calculator extends React.Component {
    renderButton(i) {
        return <CalcButton value={i} />;
    }

    render() {
        const status = 'Next player: X';
    
        return (
          <div>
            <div className="status">{status}</div>
            <div className="board-row">
              {this.renderButton(0)}
              {this.renderButton(1)}
              {this.renderButton(2)}
            </div>
            <div className="board-row">
              {this.renderButton(3)}
              {this.renderButton(4)}
              {this.renderButton(5)}
            </div>
            <div className="board-row">
              {this.renderButton(6)}
              {this.renderButton(7)}
              {this.renderButton(8)}
            </div>
          </div>
        );
      }
}

export default Calculator;