import React, { useState, useEffect } from 'react';
import Container from '../UI/Container';
import PizzaItem from './PizzaItem/PizzaItem';
import styles from './AvailablePizzas.module.css';
import axios from 'axios';


const AvailablePizzas = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('http://localhost:3000/pizzas');
        setData(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoaded(true);
      }
    })();
  }, []);  


  return (
    data.map((piz) => (
      <Container>
      <section className={styles.pizzas}>
      <PizzaItem
        key={piz.id}
        id={piz.id}
        url={piz.url}
        name={piz.name}
        description={piz.description}
        price={piz.price}
      />
      </section>
      </Container>    
    ))      
  );
};

export default AvailablePizzas;