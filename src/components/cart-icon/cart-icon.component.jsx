import React from 'react';
import { connect } from 'react-redux';

import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

const CartIcon = ({ toggleCartHidden, itemsQuantity }) => {
  return (
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{itemsQuantity}</span>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    itemsQuantity: state.cart.itemsQuantity,
  };
};

const mapDispatchToProps = {
  toggleCartHidden,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
