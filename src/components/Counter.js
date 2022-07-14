import { useSelector, useDispatch } from 'react-redux'
import classes from './Counter.module.css';
import { counterActions } from '../store/index'

const Counter = () => {
  const dispatch = useDispatch();
  // const counter = useSelector(state => state.counter)
  // const showCounter = useSelector(state => state.showCounter)
  const state = useSelector(state => state.counter)

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }

  const increaseBy5Handler = () => {
    dispatch(counterActions.increase(5))
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement())

  }



  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {state.showCounter && <div className={classes.value}>{state.counter}</div>}
      <div>
        <button onClick={incrementHandler}> Increment </button>
        <button onClick={increaseBy5Handler}> Increment by 5 </button>
        <button onClick={decrementHandler}> Decrement </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
