import React from 'react'

import Counter from './../containers/counter'
import BitcoinExchangeRate from './../containers/bitcoinExchangeRate'

import { List, ListItem, Paper } from 'material-ui'
import { withStyles } from 'material-ui/styles'

class IndexPage extends React.Component {
    render(){
      return (<div>
                <List>
                  <ListItem>
                    <Counter/>
                  </ListItem>
                  <ListItem>
                    <BitcoinExchangeRate/>
                  </ListItem>
                </List>
              </div>)
    }
}

export default withStyles({})(IndexPage)
