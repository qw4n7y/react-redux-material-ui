import React from 'react'

import Layout from './_layout.jsx'
import Counter from './../containers/counter'
import BitcoinExchangeRate from './../containers/bitcoinExchangeRate'

import { List, ListItem, Paper } from 'material-ui'
import { withStyles } from 'material-ui/styles'

class IndexPage extends React.Component {
    render(){
      return (<Layout>
                <List>
                  <ListItem>
                    <Counter/>
                  </ListItem>
                  <ListItem>
                    <BitcoinExchangeRate/>
                  </ListItem>
                </List>
                <Paper style={{margin: "1em 0"}}>1</Paper>
                <Paper>2</Paper>
                <Paper>3</Paper>
              </Layout>)
    }
}

export default withStyles({})(IndexPage)
