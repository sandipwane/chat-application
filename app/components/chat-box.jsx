/* global io */
import React from 'react'

var socket = io()

socket.on('chat message', function (message) {
  console.log('received message', message)
})
var ChatBox = class ChatBox extends React.Component {
  constructor () {
    super()
    this.state = {
      messages: [],
      currentMsg: ''
    }
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
  }
  render () {
    return <div>
      <form action='' onSubmit={this.handleSubmit.bind(this)}>
        <input name='msg-box' value={this.state.currentMsg} onChange={this.handleChange.bind(this)} />
      </form>
    </div>
  }
}

export default ChatBox
