import Redirect from './Components/Redirect';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import SearchBar from './Components/SearchBar';

export default function App() {

  return (
    <Router>
      <Route exact path="/" component={()=> (
        <div className='App'>
          <div className='App-header'>
            <SearchBar />
            <p className='subtitle'>Some inspirations from us!</p>
            <div className='grid-container'>
              <a className='card' href='https://sourcegraph.com/search?q=context:global+%5C%22vercel%5C%22:%5Cs%5C%22%28%5B*%5D%7C%5B%5C%5E4%5D%5B.%5Cd%5D%2B%29%5C%22+file:%5Epackage%5C.json&patternType=regexp'>Vercel</a>
              <a className='card' href='https://sourcegraph.com/search?q=context:global+%5C%22lodash%5C%22:%5Cs%5C%22%28%5B*%5D%7C%5B%5C%5E4%5D%5B.%5Cd%5D%2B%29%5C%22+file:%5Epackage%5C.json&patternType=regexp'>lodash</a>
              <a className='card' href='https://sourcegraph.com/search?q=context:global+%5C%22passport%5C%22:%5Cs%5C%22%28%5B*%5D%7C%5B%5C%5E4%5D%5B.%5Cd%5D%2B%29%5C%22+file:%5Epackage%5C.json&patternType=regexp'>Passport.js</a>
              <a className='card' href='https://sourcegraph.com/search?q=context:global+%5C%22express%5C%22:%5Cs%5C%22%28%5B*%5D%7C%5B%5C%5E4%5D%5B.%5Cd%5D%2B%29%5C%22+file:%5Epackage%5C.json&patternType=regexp'>Express</a>
            </div>
            <div className='footer'>
              <p className='footer-text'>Powered by <img
                alt="sourcegraph-logo"
                src="https://github.com/sourcegraph/support-generator/blob/main/public/images/Sourcegraph_Logo_FullColor_light.png?raw=true"
                className="footer-logo"
              /></p>
            </div>
          </div>
        </div>
      )} />
      <Route exact path="/:packageName" component={()=> (
        <Redirect/>
      )} />
    </Router>
  );
}