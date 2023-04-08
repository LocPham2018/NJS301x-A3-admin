const TableHead = ({ headers, classes }) => {
	return (
		<thead>
			<tr>
				{headers.map((header, id) => (
					<td key={id} className={classes[header.className]}>
						{header.label}
					</td>
				))}
			</tr>
		</thead>
	);
};

export default TableHead;
