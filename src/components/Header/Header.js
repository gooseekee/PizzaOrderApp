import React from "react";
import pizzaBanner from '../../assets/pizza-banner.png';
//import PizzaIcon from "./PizzaIcon";
import styles from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";

const Header = props => {
    return <>
        <header className={styles.header}>
            {/* <span className={styles.icon}>
                <PizzaIcon />
            </span>  */}
            <h1>PizzaMania</h1>
            <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={styles.banner}>
            <img src={pizzaBanner} alt='A delicious pizza banner.'/>
        </div>

    </>

};

export default Header;
