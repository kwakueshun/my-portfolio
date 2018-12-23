import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "./components/about";
import Work from "./components/work";
import Header from "./components/header";
import Footer from "./components/footer"

import "./App.css";

class App extends Component {

    render() {
        return (
            <Router>
                <div class="container">
                     <Header />
                    <Switch>
                        <Route exact path="/" component={About} />
                        <Route path="/about" component={About} />
                        <Route path="/work" component={Work} />
                    </Switch>
                    <Footer />
                </div>
            </Router>
        )
    }
}

export default App;
