import React,  { useContext } from 'react';

import PizzaItemForm from './PizzaItemForm';
import styles from './PizzaItem.module.css';
import CartContext from '../../../store/cart-context';

const PizzaItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `NOK ${props.price.toFixed(2)}`;

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      url: props.url,
      name: props.name,
      amount: amount,
      price: props.price
    });
  };

  return (
    <div className={styles['grid-item']}>
        <img className={styles.img} src={props.url} alt="Pizza types" />
        <div className={styles.details}>
          <h3>{props.name}</h3>
          <div className={styles.description}>{props.description}</div>
            <div className={styles.price}>{price}</div>
        </div>
    <div className={styles['item-form']}>
        <PizzaItemForm id={props.id} onAddToCart={addToCartHandler} />
    </div>
    </div>
  );
};

export default PizzaItem;