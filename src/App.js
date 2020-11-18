import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact>
            <HomePage />
          </Route>

          <Route path='/shop' exact>
            <ShopPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
