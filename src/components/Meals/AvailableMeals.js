import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Veg-Rice',
    description: 'Made with finest veggies',
    price: 150,
  },
  {
    id: 'm2',
    name: 'Chicken-Rice',
    description: 'fresh and Saucy',
    price: 200,
  },
  {
    id: 'm3',
    name: 'Mixed-Rice',
    description: 'Veggy, fishy, meaty',
    price: 200,
  },
  {
    id: 'm4',
    name: 'Chef-Choice',
    description: 'Only Chef Knows',
    price: 250,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
