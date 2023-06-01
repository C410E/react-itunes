
import "./App.css";
import { BrowserRouter, Route , Switch } from "react-router-dom";
import { Component } from "react";

//pages
import Album from "./pages/Album";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites"
import Login from "./pages/Login";
import Profile from "./services/Profile";
import ProfileEdit from "./pages/ProfileEdit";


class App extends Component {

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={ (props) => <Login { ...props } /> } />
            <Route path="/search" component={Search}/>
            <Route path="/album/:id" component={Album}/>
            <Route path="/favorites" component={Favorites}/>
            <Route path="/profile" component={Profile }/>
            <Route path="/profile/edit" component={ProfileEdit}/>
          </Switch>
        </BrowserRouter>
         
      </div>
    )
  }
}


    export default App;
