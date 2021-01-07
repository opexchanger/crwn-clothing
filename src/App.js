import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Counter from './pages/counter/counter.component';
import Authenticate from './pages/authenticate/authenticate.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
  closeAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.closeAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(null);
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
        <Header />
        <Switch>
          <Route path='/' exact component={HomePage} />
          <Route path='/shop' exact component={ShopPage} />
          <Route path='/counter' exact component={Counter} />
          <Route path='/authenticate' exact component={Authenticate} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = {
  setCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
