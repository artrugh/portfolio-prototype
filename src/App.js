import React, { useState } from 'react';
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
    const [section, setSection] = useState(undefined)

    const data = {
        section: section,
        setSection: setSection
    }
    return (
        <HashRouter>

            <div id="main-container">

                <SocialNets
                    setSection={setSection}
                />

                <div id="routers-container">

                    <Header
                        section={section}
                        setSection={setSection} />

                    <Switch>
                        <Route exact path="/"
                            component={Home} />
                        <Route path="/about" component={About} />
                        <Route exact path="/projects"
                            render={(props) => <Projects {...props} data={setSection} />}
                        />
                        <Route exact path="/projects/:id" component={Project} />
                        <Route path="/contact" component={Contact} />
                        <Route component={NotFound} />
                    </Switch>

                </div>

            </div>
            <Footer />
        </HashRouter>
    );
}

export default App;