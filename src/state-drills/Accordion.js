import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    clicked: null
  }
  handleClick = (index) => {
    this.setState({
      clicked: index
    });
  };
  render () {
    let sectionsLis = [];

    if (typeof this.props.sections === 'undefined') {
      sectionsLis.push(<li key="0"></li>);
    } else {
      this.props.sections.forEach((section, index) => {
        let paragraph = '';
        if (this.state.clicked === index) {
          paragraph = section.content;
        }
        sectionsLis.push(
          <li key={index}>
            <button onClick={() => this.handleClick(index)}>{section.title}</button>
            <p>{paragraph}</p>
          </li>
        );
      });
    }

    return (
      <div>
        <ul>
          {sectionsLis}
        </ul>
      </div>
    )
  }
}

export default Accordion
