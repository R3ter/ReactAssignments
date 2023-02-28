import React from "react";
export default class FunVsComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: 0 };
  }
  setNumber(number) {
    this.setState({ number });
  }
  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setNumber(this.state.number + 1);
          }}
        >
          +
        </button>
        <p
          style={{
            backgroundColor:
              this.state.number == 0
                ? "black"
                : this.state.number > 0
                ? "green"
                : "red",
          }}
        >
          {this.state.number}
        </p>
        <button
          onClick={() => {
            this.setNumber(this.state.number - 1);
          }}
        >
          -
        </button>
      </div>
    );
  }
}
