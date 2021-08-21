import React from 'react';
import {   Route,  } from "react-router-dom";
import HomePage from '../../pages';
import AboutPage from '../../pages/about/AboutPage';
import TeamPage from '../../pages/TeamPage';
 

const RootRouter = () => {
    return (
        <div>        
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/about" component={AboutPage} />
                    <Route exact path="/team" component={TeamPage} />
                    {/* <Route exact path="/contact" component={Contact} /> */}
                    <Route component={Error} />    
        </div>
    );
}

export default RootRouter;
