import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
	increment,
	decrement,
	incrementByAmount,
	incrementAsync,
	selectCount,
} from './counterSlice';
import styles from './Counter.module.css';

const Counter = () => {
	const count = useSelector(selectCount);
	const dispatch = useDispatch();
	const [incrementAmount, setIncrementAmount] = useState('2');

	return (
		<>
			<div className={styles.row}>
				<button
					aria-label='Increment value'
					onClick={() => dispatch(increment())}
					className={styles.button}
				>
					+
				</button>
				<span className={styles.value}>{count}</span>
				<button
					aria-label='Decrement value'
					onClick={() => dispatch(decrement())}
					className={styles.button}
				>
					-
				</button>
			</div>

			<div className={styles.row}>
				<input
					type='text'
					className={styles.textbox}
					aria-label='Set increment amount'
					value={incrementAmount}
					onChange={(event) => setIncrementAmount(event.target.value)}
				/>

				<button
					className={styles.button}
					onClick={() =>
						dispatch(incrementByAmount(Number(incrementAmount) || 0))
					}
				>
					Add Amount
				</button>
				<button
					className={styles.asyncButton}
					onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
				>
					Add Async
				</button>
			</div>
		</>
	);
};

export default Counter;
