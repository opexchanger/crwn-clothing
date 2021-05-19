import React from 'react';
import { connect } from 'react-redux';

import {
  selectCartItems,
  selectCartItemsTotal,
} from '../../redux/cart/cart.selectors';

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>Descritption</div>
      <div className='header-block'>Quantity</div>
      <div className='header-block'>Price</div>
      <div className='header-block'>Remove</div>
    </div>
    {cartItems.map(({ id, name, quantity, price }) => (
      <div key={id} className='cart-item'>
        {name}
      </div>
    ))}
    <div className='total'>TOTAL: ${total}</div>
  </div>
);

const mapStateToPropts = (state) => ({
  cartItems: selectCartItems(state),
  total: selectCartItemsTotal(state),
});

export default connect(mapStateToPropts)(CheckoutPage);
