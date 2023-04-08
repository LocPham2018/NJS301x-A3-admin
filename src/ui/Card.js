import classes from './Card.module.css';

const Card = ({title, qty}) => {
	return (
		<div className={classes.card}>
			<p className={classes.title}>{title}</p>
			<p className={classes.qty}>{qty}</p>
		</div>
	);
};

export default Card;