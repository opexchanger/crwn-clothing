import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Authenticate from './pages/authenticate/authenticate.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  closeAuth = null;

  componentDidMount() {
    this.closeAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
        });
      } else {
        this.setState({
          currentUser: null,
        });
      }
    });
  }

  componentWillUnmount() {
    if (this.closeAuth) {
      this.closeAuth();
    }
  }

  render() {
    return (
      <div>
        <Router>
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route path='/' exact>
              <HomePage />
            </Route>

            <Route path='/shop' exact>
              <ShopPage />
            </Route>

            <Route path='/authenticate' exact>
              <Authenticate />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
