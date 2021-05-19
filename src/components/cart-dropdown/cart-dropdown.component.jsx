import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';

import './cart-dropdown.styles.scss';

const CartDropdown = ({ items, history }) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {items.length ? (
          items.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <div className='empty-message'>Your cart is empty</div>
        )}
      </div>
      <CustomButton onClick={() => history.push('/checkout')}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: selectCartItems(state),
  };
};

export default withRouter(connect(mapStateToProps)(CartDropdown));
