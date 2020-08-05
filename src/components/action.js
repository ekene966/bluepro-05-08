import React, { Component } from 'react'
import { Container } from '@material-ui/core';


export class Action extends Component {
  render() {
    return (
      <div>
        <Container>
          <h1 style={{textAlign: 'center'}}>Action Page</h1>
          Citizens dashboard that allows users to see all their representatives, budgets, pending legislation at the national, state, county and city level <br/>
          Users will be able to see the funding for programs <br/>
          Users will be able to contact their representatives easily <br/>
          Users will be able to see polling locations for primaries, general elections and run-offs <br/>
        </Container>
      </div>
    )
  }
}


export default Action
