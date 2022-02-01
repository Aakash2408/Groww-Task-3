import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import { useState } from 'react';
import Header from './common/Header/Header';
import Feed from './views/Feed/index';
import UserDetails from './views/UserDetails/UserDetails';
import { ReactComponent as Chevron } from '../src/icons/chevron-up.svg';
// import { randomhook } from './utils/hooks/useInfiniteScroll';

function App() {
  const [backtoTop, setBacktoTop] = useState(false)
  window.addEventListener('scroll', () =>{
    if(window.scrollY>100){
      setBacktoTop(true)
      return;
    }
    setBacktoTop(false)
    return;
    
  })

  const scrollToTop = () =>{
    window.scrollTo(0,0)
  }
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
        <Route path="/" exact component={Feed} />
        <Route path="/user-details/:username" component={UserDetails} />
        </Switch>
        <div className={`ggBackToTop9305 flexbox ${backtoTop? "showBackToTop" : null}`}>
          <Chevron onClick={scrollToTop} />
        </div>
      </Router>
     
    </div>
  );
}

export default App;