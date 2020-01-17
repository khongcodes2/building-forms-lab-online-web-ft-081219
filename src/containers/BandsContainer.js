import React, { Component } from 'react'
import { connect } from 'react-redux'

import BandInput from '../components/BandInput'

class BandsContainer extends Component {
  
  addBand = band => {
    this.props.dispatch({
      type: 'ADD_BAND',
      band: band
    })
  }
  
  render() {
    return(
      <div>
        <BandInput addBand={this.addBand} />
        {this.props.bands.map(band => (
          <li>{band.name}</li>
        ))}
      </div>
    )
  }
}

const mapStateToProps = state => ({bands: state.bands})

export default connect(mapStateToProps)(BandsContainer)
