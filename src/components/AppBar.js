import React, { Component } from 'react'
import { Grommet, Box } from 'grommet';
import { withRouter } from 'react-router-dom'



class AppBar extends Component {

  render() {
    return (
      <Grommet>
        <Box
          tag='header'
          direction='row'
          align='center'
          justify='between'
          //background='dark-1'
          pad={{
          //  left: 'medium',
          //  right: 'medium',
          //  vertical: 'small'
          }}
          //elevation='medium'
          style={{ zIndex: '1' }}
        >
        <Box
            tag='Header'
            label='Back'
            align='center'
            flex
            height='xxsmall'
            background='light-6'
            style={{cursor:'pointer'}}
            justify='center'
            onClick={()=>this.props.history.push('/front')}>
            Front
          </Box>
          <Box
            tag='Header'
            label='Back'
            align='center'
            flex
            height='xxsmall'
            background='dark-1'
            style={{cursor:'pointer'}}
            justify='center'
            onClick={()=>this.props.history.push('/back')}>
            Back
          </Box>
        </Box>
      </Grommet>
    )
  }
}


export default (withRouter(AppBar))
