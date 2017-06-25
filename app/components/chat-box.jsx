import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'
// import FontIcon from 'material-ui/FontIcon'
import Paper from 'material-ui/Paper'
import AppBar from 'material-ui/AppBar'

var socket = require('socket.io-client')()

// const style = {
//   height: 100,
//   width: 100,
//   textAlign: 'center',
//   display: 'inline-block'
// }

const style = {
  margin: 0
}

var ChatBox = class ChatBox extends React.Component {
  constructor () {
    super()
    this.state = {
      messages: [],
      currentMsg: ''
    }
    socket.on('chat message', (message) => {
      console.log('received message', message)
      this.updateMessages(message)
    })
  }
  handleChange (e) {
    this.setState({
      currentMsg: e.target.value
    })
  }
  handleSubmit (e) {
    e.preventDefault()
    console.log(this.state.currentMsg)
    socket.emit('chat message', this.state.currentMsg)
    this.setState({currentMsg: ''})
  }
  updateMessages (newMessage) {
    var messages = this.state.messages.slice()
    messages.push(newMessage)
    this.setState({ messages: messages })
    console.log(this.state.messages)
  }
  render () {
    return <div>
      <Paper zDepth={2}>
        <AppBar
          title='Reactive Chat Application'
          style={style}
          showMenuIconButton={false}
          iconClassNameRight='muidocs-icon-navigation-expand-more'
        />
        {
          this.state.messages.map((msg, i) => {
            return <div key={i}>
              <span>{msg}</span>
            </div>
          })
        }
        <form onSubmit={this.handleSubmit.bind(this)}>
          <span>
            <TextField
              name='msg-box'
              autoComplete='off'
              underlineShow={false}
              value={this.state.currentMsg}
              onChange={this.handleChange.bind(this)}
              hintText='Type your message...' />
          </span>
          <span>
            <FlatButton label='Send' type='submit' />
          </span>
        </form>
      </Paper>
    </div>
  }
}

export default ChatBox
