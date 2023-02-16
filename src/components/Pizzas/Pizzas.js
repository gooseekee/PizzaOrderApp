import React, { Fragment } from "react";
import AvailablePizzas from "./AvailablePizzas";
import PizzasSloganText from "./PizzasSloganText";


const Pizzas = () => {
    return (
    <Fragment>
        <PizzasSloganText />
        <AvailablePizzas />
    </Fragment>
        
    );
};

export default Pizzas;