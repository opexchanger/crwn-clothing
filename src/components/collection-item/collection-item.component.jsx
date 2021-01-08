import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';
import { addCartItem } from '../../redux/cart/cart.actions';

import './collection-item.styles.scss';

const CollectionItem = ({ item, addCartItem }) => (
  <div className='collection-item'>
    <div
      className='image'
      style={{ backgroundImage: `url(${item.imageUrl})` }}
    />
    <div className='collection-footer'>
      <span className='name'>{item.name}</span>
      <span className='price'>{item.price}</span>
    </div>
    <CustomButton inverted onClick={() => addCartItem(item)}>
      ADD TO CART
    </CustomButton>
  </div>
);

const mapDispatchToProps = {
  addCartItem,
};

export default connect(null, mapDispatchToProps)(CollectionItem);
