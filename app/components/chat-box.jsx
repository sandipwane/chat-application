import React from 'react'

var socket = require('socket.io-client')()

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
      {/* {
        this.state.messages.map((msg, i) => {
          return <div key={i}>
            <span>{msg}</span>
          </div>
        })
      }
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input name='msg-box' value={this.state.currentMsg} onChange={this.handleChange.bind(this)} />
      </form> */}
    </div>
  }
}

export default ChatBox
