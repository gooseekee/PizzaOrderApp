import React from "react";
import styles from './PizzasSloganText.module.css';

const PizzasSloganText = props => {
    return (
        <section className={styles.slogan}>
          <h2>Satisfy your cravings with PizzaMania!</h2>
          <p>
          Pizza is a cultural phenomenon that brings people together. 
          Its crispy crust, gooey cheese, 
          and flavorful toppings create a perfect symphony of taste.
          </p>
          <p>
          From a classic Margherita to a loaded meat-lovers pie, 
          there's a pizza for everyone. It's a timeless favorite that never fails to please.
          </p>
        </section>
      );
};

export default PizzasSloganText;