import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import { Switch,Route } from 'react-router-dom';
import NavBarContainer from "./nav/navbar_container";
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import ChoseItemIndex from "./choseItem/choseItemIndex"
import Home from "./home/home"
import Footer from './footer'
import Modal from './modal/modal';


const App = () => (
    <div> 
      <Modal />
      <header>
         <NavBarContainer />
      </header>
        <Switch>
            <Route exact path="/lunchBoxSelect" component={ChoseItemIndex} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignupFormContainer} />
            <Route exact path="/" component={Home} />
        </Switch>
        <Footer />
    </div>
);

export default App;