import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Redirect from './Components/Redirect';
import SearchBar from './Components/SearchBar';
import Footer from './Components/Footer';
import { generateExamples } from './Components/Helpers';

export default function App() {

  return (
    <Router>
      <Route exact path="/" component={()=> (
        <div className='App'>
          <div className='container'>
            <SearchBar />
            <p className='subtitle'>👇 Some <span className='highlight-text'>inspirations</span> from us! 👇</p>
            <div className='grid-container'>
              {generateExamples()}
            </div>
            <Footer />
          </div>
        </div>
      )} />
      {/* If package name in param is detected */}
      <Route exact path="/:packageName/:mode?" component={()=> (
        <Redirect />
      )} />
    </Router>
  );
}