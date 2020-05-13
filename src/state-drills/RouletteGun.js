import React from 'react';

class RouletteGun extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      chamber: null,
      spinningTheChamber: false,
      timer: null
    }
  }
  static defaultProps = {
    bulletInChamber: 8
  }
  handleClick = () => {
    this.setState({
      spinningTheChamber: true
    })
    let timeout = setTimeout(() => {
      console.log('did timeout');
      let randomNumber = Math.ceil(Math.random() * 8);
      console.log(randomNumber)
      this.setState({
        chamber: randomNumber,
        spinningTheChamber: false
      })
    }, 2*1000)
    this.setState({
      timer: timeout
    })
  }

  componentWillUnmount() {
    clearTimeout(this.state.timer)
  }

  render () {
    let paragraph;
    if(this.state.spinningTheChamber === true) {
      paragraph = <p>spinning the chamber and pulling the trigger!...</p>
    } else if(this.state.chamber === this.props.bulletInChamber) {
      paragraph = <p>BANG!!!!</p>
    } else {
      paragraph = <p>you're safe!!</p>
    }
    return (
      <div>
        {paragraph}
        <button onClick={this.handleClick}>
          Pull the trigger!
        </button>
      </div>
    )
  }
}

export default RouletteGun