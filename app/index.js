import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Container from './components/Container'
import Home from './components/Home'

const app = document.getElementById('app')

window.fbAsyncInit = function () {
  window.FB.init({
    appId: '338074733419452',
    cookie: true,
    xfbml: true,
    version: 'v3.2',
  })

  window.FB.AppEvents.logPageView()
}

window.FB.getLoginStatus((response) => {
  window.statusChangeCallback(response)
})

ReactDOM.render((
  <BrowserRouter>
    <Container>
      <Switch>
        <Route path="/" component={Home}/>
      </Switch>
    </Container>
  </BrowserRouter>
), app)
