import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ChatBot from './components/chat-box.jsx'

class App extends React.Component {
  render () {
    return (
      <ChatBot />
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
