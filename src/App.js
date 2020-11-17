import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';

const HatsPage = () => {
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/shop/hats" exact>
            <HatsPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
