import classes from './Pagination.module.css';

const Pagination = props => {
	return (
		<div className={classes.pagination}>
			<p>
				Page {props.page} of {props.totalPages}
			</p>
			<button disabled={props.page === 1} onClick={props.onPrevPage}>
				&lsaquo;
			</button>
			<button
				disabled={props.page === props.totalPages}
				onClick={props.onNextPage}
			>
				&rsaquo;
			</button>
		</div>
	);
};

export default Pagination;
