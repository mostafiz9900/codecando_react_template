import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TopHeader from './components/header/TopHeader';
import MainHeader from './components/header/MainHeader';
import MainFooter from './components/footer/MainFooter';
import Home from './pages';
import Error from './pages/Error';
function App() {
  return (
  <div class="body-inner">
    <BrowserRouter>
    <TopHeader/>
    <MainHeader/>
    <Switch>
    <Route exact path="/" component={Home} />
                    {/* <Route exact path="/about" component={About} />
                    <Route exact path="/services" component={Services} />
                    <Route exact path="/contact" component={Contact} /> */}
                    <Route component={Error} />
    </Switch>
    <MainFooter/>
    </BrowserRouter>


  
  

  </div>
 
  );
}

export default App;
