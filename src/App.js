import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

//Routers
import Home from './routers/Home';
import About from './routers/About';
import Projects from './routers/Projects';
import Project from './routers/Project';
import Contact from './routers/Contact';
import NotFound from './routers/NotFound';

//Components
import Header from './components/Header';
import SocialNets from './components/SocialNets';
import Footer from './components/Footer';

const App = () => {  
    return (
            <HashRouter>
                <SocialNets />
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route exact path="/projects" component={Projects} />
                    <Route exact path="/projects/:id" component={Project} />
                    <Route path="/contact" component={Contact} />
                    <Route component={NotFound} />
                </Switch>
                <Footer />
            </HashRouter>
    );
}

export default App;