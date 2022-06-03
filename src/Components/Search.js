import React from "react";

const Search = (props) => {
	return (
		<div className='inputName'>
			<input type={props.type} placeholder={props.placeholder} onChange={props.onChange} />
			{props.children}
		</div>
	);
};

export default Search;
