import React from 'react';


const Search = ({ handleSearch }) => {
	return (
		<div className='search'>
			<i className="fas fa-search"></i>
			<input
				onChange={(event) =>
					handleSearch(event.target.value)
				}
				type='text'
				placeholder='type to search...'
			/>
		</div>
	);
};

export default Search;