import { BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import TopHeader from './components/header/TopHeader';
import MainHeader from './components/header/MainHeader';
import MainFooter from './components/footer/MainFooter';

import AboutPage from './pages/about/AboutPage';
import TeamPage from './pages/TeamPage';
import HomePage from './pages';
function App() {
  return (
  
    <Router>
    <div class="body-inner">
    <TopHeader/>
    <MainHeader/>
    <Switch>
    <Route exact path="/" component={HomePage} />
     <Route exact path="/about" component={AboutPage} />
     <Route exact path="/team" component={TeamPage} />
    {/* <Route exact path="/contact" component={Contact} /> */}
     <Route component={Error} />  
    </Switch>    
    <MainFooter/>    
      </div>
    </Router> 
  

 
  );
}

export default App;
