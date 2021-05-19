import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Authenticate from './pages/authenticate/authenticate.component';
import Checkout from './pages/checkout/checkout.component';

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
      <>
        <Header />
        <Switch>
          <Route path='/shop' exact component={ShopPage} />
          <Route path='/checkout' exact component={Checkout} />
          <Route path='/authenticate' exact>
            {this.props.currentUser ? <Redirect to='/' /> : <Authenticate />}
          </Route>
          <Route path='/' component={HomePage} />
        </Switch>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
  };
};

const mapDispatchToProps = {
  setCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
