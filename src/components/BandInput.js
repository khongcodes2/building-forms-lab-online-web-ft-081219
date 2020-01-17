import React, { Component } from 'react'

class BandInput extends Component {
  
  state = {name: ''};

  handleSubmit = event => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState({name: ''})
  };

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          type = 'text'
          name = 'name'
          value = {this.state.name}
          onChange = {event => this.setState({name: event.target.value})}
        />
        <input type='submit' value='submit'/>
      </form>
    )
  }
}

export default BandInput
