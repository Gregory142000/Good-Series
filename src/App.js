/** Main imports */
import React from "react"
import ReactDOM from "react-dom"
import { HashRouter, Switch, Route} from "react-router-dom"
/** My componentes imports */
import Home from "./pages/Home"
import Search from "./pages/Search"
import Genres from "./pages/Genres"
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
          <Route path="/genre" component={Genres} />
          <Route path="/serie" component={Serie} />
        </Switch>
      </Frame>
    </HashRouter>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById("root")
)