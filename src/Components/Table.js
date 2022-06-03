import React from "react";
import TableContent from "./TableContent";

const Table = (props) => {
	return (
		<div>
			<table>
				<thead>
					<tr>
						{props.productData.headers.map((headerData, index) => (
							<th key={index}>{headerData}</th>
						))}
					</tr>
				</thead>
				<tbody>
					{/* <tr>
						<th colSpan='2'>{props.productData.products[1].category}</th>
					</tr> */}
					<TableContent productData={props.productData.products} />
					{/* <tr>
						<th colSpan='2'>{props.productData.products[3].category}</th>
					</tr> */}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
