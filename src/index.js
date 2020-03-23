import ReactDOM from 'react-dom'
import React from 'react'

const App = ({ text = 'World' }) => `Hello ${text}`

window.render = ({...props}) => {
  ReactDOM.render(<App {...props}/>, document.getElementById('root'))
}

window.render({text: 'Mundo!'})
