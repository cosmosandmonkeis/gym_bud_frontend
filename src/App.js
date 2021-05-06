import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'

import './App.css';
import {MobileViewProvider} from "./context/mobile";
import {AuthProvider} from "./context/auth";
import MenuBar from "./Components/MenuBar";
import AuthRoute from "./Components/AuthRoute";
import Footer from "./Components/Footer";
import Login from "./Pages/login";
import Register from "./Pages/register";
import Home from "./Pages/home";
import GettingStarted from "./Pages/gettingstarted";

function App() {
    return (
        <MobileViewProvider>
            <AuthProvider>
                <Router>
                    <MenuBar/>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/profile' component={GettingStarted}/>
                    <AuthRoute exact path='/login' component={Login}/>
                    <AuthRoute exact path='/register' component={Register}/>
                    <Footer/>
                </Router>
            </AuthProvider>
        </MobileViewProvider>
    )
}

export default App;
