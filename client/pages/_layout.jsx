import React from 'react'

import AppBox from './../containers/appBox'

class Layout extends React.Component {
  render(){
    return (<AppBox>
              {this.props.children}
            </AppBox>)
  }
}

export default Layout
