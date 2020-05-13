import React from 'react';

class Bomb extends React.Component {
  state = {
    count: 0,
    word: ''
  }
  componentDidMount() {
    setInterval(() => {
      let newCount = this.state.count + 1;
      this.setState({
        count: newCount
      });
      if (this.state.count >= 8) {
        this.setState({
          word: 'BOOM!!!!'
        });
        clearInterval(this.interval);
      } else {
        if (this.state.count % 2 === 0) {
          this.setState({
            word: 'tick'
          });
        }
        if (this.state.count % 2 !== 0) {
          this.setState({
            word: 'tock'
          });
        }
      }
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  render () {
    return (
      <div>
        <p>{this.state.word}</p>
      </div>
    )
  }
}

export default Bomb
