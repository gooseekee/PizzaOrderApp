import React from 'react';
import Container from '../UI/Container';
import PizzaItem from './PizzaItem/PizzaItem';
import styles from './AvailablePizzas.module.css';

const DUMMY_PIZZAS = [
  {
    id: 1,
    url: 'https://raw.githubusercontent.com/gooseekee/PizzaImages/main/marghareta.png',
    name: 'Margherita',
    description: 'San Marzano tomato sauce, fresh mozzarella, and basil on our crispy, chewy crust. A classic Italian favorite.',
    price: 149,
  },
  {
    id: 2,
    url: 'https://raw.githubusercontent.com/gooseekee/PizzaImages/main/vegetariana.png',
    name: 'Vegetariana',
    description: 'A medley of fresh veggies, including mushrooms, bell peppers, onions, and olives, atop our delicious tomato sauce and mozzarella cheese.',
    price: 199,
  },
  {
    id: 3,
    url: 'https://raw.githubusercontent.com/gooseekee/PizzaImages/main/diavola.png',
    name: 'Diavola',
    description: 'Spicy pepperoni, fiery red pepper flakes, and mozzarella cheese on our crispy crust.',
    price: 239,
  },
  {
    id: 4,
    url: 'https://raw.githubusercontent.com/gooseekee/PizzaImages/main/capricciosa.png',
    name: 'Capricciosa',
    description: 'This pizza features artichoke hearts, ham, olives, and mushrooms atop our tomato sauce and mozzarella cheese.',
    price: 219,
  },
  {
    id: 5,
    url: 'https://raw.githubusercontent.com/gooseekee/PizzaImages/main/napoletana.png',
    name: 'Napoletana',
    description: 'A traditional Neapolitan pizza, featuring San Marzano tomato sauce, mozzarella cheese, fresh garlic, and oregano.',
    price: 189,
  },
  {
    id: 6,
    url: 'https://raw.githubusercontent.com/gooseekee/PizzaImages/main/prosciutto.png',
    name: 'Prosciutto',
    description: 'Thinly sliced prosciutto ham, arugula, and Parmesan cheese on our signature tomato sauce and mozzarella cheese.',
    price: 229,
  },
  {
    id: 7,
    url: 'https://raw.githubusercontent.com/gooseekee/PizzaImages/main/marinara.png',
    name: 'Marinara',
    description: 'A simple yet delicious pizza with our tangy tomato sauce, garlic, and oregano. No cheese or other toppings, making it perfect for those who prefer a lighter option.',
    price: 159,
  }
];


const AvailablePizzas = () => {
  const pizzaList = DUMMY_PIZZAS.map((piz) => (
    <PizzaItem
      key={piz.id}
      id={piz.id}
      url={piz.url}
      name={piz.name}
      description={piz.description}
      price={piz.price}
    />
  ));

  return (
    <section className={styles.pizzas}>
      <Container>
        {pizzaList}
      </Container>
    </section>
  );
};

export default AvailablePizzas;