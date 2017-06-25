import React from 'react'
import ReactDOM from 'react-dom'
import ChatBox from './components/chat-box.jsx'
import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

class App extends React.Component {
  render () {
    return (
      <MuiThemeProvider>
        <ChatBox />
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
