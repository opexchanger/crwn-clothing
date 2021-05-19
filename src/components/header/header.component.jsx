import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';

const Header = ({ currentUser, cartHidden }) => (
  <div className='header'>
    <Link to='/' className='logo-container'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link to='/shop' className='option'>
        SHOP
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link to='/authenticate' className='option'>
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {cartHidden ? null : <CartDropdown />}
  </div>
);

const mapStateToProps = (state) => {
  return {
    currentUser: state.user.currentUser,
    cartHidden: state.cart.hidden,
  };
};

export default connect(mapStateToProps)(Header);
