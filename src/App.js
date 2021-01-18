/** Main imports */
import React from "react"
import ReactDOM from "react-dom"
import { HashRouter, Switch, Route, Link } from "react-router-dom"
/** My componentes imports */
import Home from "./pages/Home"
import Search from "./pages/Search"
import Serie from "./pages/Serie"
import Frame from "./components/global/Frame"
/** Style imports */
import "./public/css/style.css"

/** Main Componente that representation the WebSite */
function App(){
  return(
    <HashRouter>
      <Frame>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
          <Route exact path="/Serie" component={Serie} />
        </Switch>
      </Frame>
    </HashRouter>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
)